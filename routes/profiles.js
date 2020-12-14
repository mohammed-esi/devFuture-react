const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const normalize = require('normalize-url');
const { check, validationResult, header } = require('express-validator');
const checkObjectId = require('../middleware/checkObjectId');

const User = require('../models/User');
const Service = require('../models/Service');
const Profile = require('../models/Profile');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['firstName', 'lastName', 'avatar']);

    if (!profile)
      return res
        .status(400)
        .json({ success: false, msg: 'There is np profile for this user' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route   POST api/profile/
// @desc    Create or update user profile
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required!').not().isEmpty(),
      check('skills', 'Skills is required!').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const {
      website,
      location,
      company,
      status,
      skills,
      bio,
      githubusername,
      youtube,
      facebook,
      instagram,
      twitter,
      linkedin,
      github,
      gitlab,
    } = req.body;

    const profileFields = {
      user: req.user.id,
      company,
      location,
      website:
        website && website !== ''
          ? normalize(website, { forceHttp: true })
          : '',
      bio,
      skills: Array.isArray(skills)
        ? skills
        : skills.split(',').map((skills) => ' ' + skills.trim()),
      status,
      githubusername,
    };

    // Build sociel object
    const socielFields = {
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin,
    };

    // Build worksites object
    const worksitesFields = {
      github,
      gitlab,
    };

    for (const [key, value] of Object.entries(socielFields)) {
      if (value && value.length > 0) {
        socielFields[key] = normalize(value, { forceHttp: true });
      }
    }

    profileFields.sociel = socielFields;

    for (const [key, value] of Object.entries(worksitesFields)) {
      if (value && value.length > 0) {
        worksitesFields[key] = normalize(value, { forceHttp: true });
      }
    }

    profileFields.worksites = worksitesFields;

    try {
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error!');
    }
  }
);

// @route   GET api/profile
// @desc    Get all profile users
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'firstName',
      'lastName',
      'avatar',
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get pofile by user ID
// @access  Public
router.get(
  '/user/:user_id',
  [checkObjectId('user_id')],
  async ({ params: { user_id } }, res) => {
    try {
      const profile = await Profile.findOne({ user: user_id }).populate(
        'user',
        ['firstName', 'lastName', 'avatar']
      );

      if (!profile)
        return res
          .status(400)
          .json({ success: false, msg: 'This user does not have a profile' });
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error!');
    }
  }
);

// @route  DELETE api/profile
// @desc   Delete profile user
// @access Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove services user
    await Service.deleteMany({ user: req.user.id });
    // Remove profile user
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findByIdAndRemove({ _id: req.user.id });

    res.json({ success: true, msg: 'User deleted!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route  PUT api/profile/experience
// @desc   Add profile experience
// @access Private
router.put(
  '/experience',
  [
    auth,
    [
      check('title', 'Title is requried!').notEmpty(),
      check('company', 'Company is requried!').notEmpty(),
      check('from', 'From date is required and needs to be from to the past')
        .notEmpty()
        .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    } = req.body;

    const newEx = {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.experience.unshift(newEx);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error!');
    }
  }
);

// @route  DELETE api/profile/experience/:exp_id
// @desc   delete experience from profile
// @access Private
router.delete('/experience/:exp_id', auth, async (req, res) => {
  try {
    const foundProfile = await Profile.findOne({ user: req.user.id });

    foundProfile.experience = foundProfile.experience.filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );

    await foundProfile.save();
    res.json({ success: true, msg: 'Expereince Deleted!', foundProfile });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route  PUT api/profile/education
// @desc   Add education profile in profile
// @access Private
router.put(
  '/education',
  [
    auth,
    [
      check('school', 'School is required!').not().isEmpty(),
      check('degree', 'Degree is Required!').not().isEmpty(),
      check('fieldofstudy', 'Field of study is required!').not().isEmpty(),
      check('from', 'From date is required and needs to be from to the passt')
        .not()
        .isEmpty()
        .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error!');
    }
  }
);

// @route  DELETE api/profile/education/:edu_id
// @desc   Delete profile education from profile
// @acces  Private
router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const foundProfile = await Profile.findOne({ user: req.user.id });

    foundProfile.education = foundProfile.education.filter(
      (edu) => edu._id.toString() !== req.params.edu_id
    );

    foundProfile.save();
    res.status(200).json({
      success: true,
      msg: 'Education deleted from profile user!',
      foundProfile,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route  GET api/profile/github/:username
// @desc   Get user repos from github
// @access Public
router.get('/github/:username', async (req, res) => {
  try {
    const uri = encodeURI(
      `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`
      // `https://api.github.com/users/${
      //   req.params.username
      // }/repos?per_page=5&sort=created:asc&client_id=${config.get(
      //   'githubClientId'
      // )}&client_secret=${config.get('githubSecret')}`
    );
    const headers = {
      'user-agent': 'node.js',
      Authorization: `token ${config.get('githubToken')}`
    };

    const gitHubResponse = await axios.get(uri, { headers });
    return res.json(gitHubResponse.data);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: 'No Github profile found' });
  }
});

module.exports = router;
