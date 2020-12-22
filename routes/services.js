const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Service = require('../models/Service');
const User = require('../models/User');
const checkObjectId = require('../middleware/checkObjectId');

// @route  POST /api/services
// @desc   Create a service
// @access Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is requried').notEmpty(),
      check('text', 'Text is required').notEmpty(),
      check(
        'skills',
        'Please enter all skills taht used for this service!'
      ).notEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newService = new Service({
        title: req.body.title,
        text: req.body.text,
        skills: Array.isArray(req.body.skills) ? req.body.skills : req.body.skills.split(',').map((skill) => ' ' + skill.trim()),
        name: user.firstName + ' ' + user.lastName,
        avatar: user.avatar,
        user: req.user.id,
      });

      const service = await newService.save();

      res.json(service);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error!');
    }
  }
);

// @route GET /api/services
// @desc  Get all services
// @access Public
router.get('/', async (req, res) => {
  try {
    const services = await Service.find().sort({ date: -1 });
    res.json(services);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route GET /api/services/:id
// @desc  Get service by ID
// @access Private
router.get('/:id', [checkObjectId('id')], async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    console.log(req.params.id);
    // const user = await User.findById(req.user.id).select('-password');

    if (!service) return res.status(404).json({msg: "service doesn't exists!"})

    // Check User
    // if (user.id !== service.user.toString()) {
    //   return res.status(400).json({
    //     success: false,
    //     msg: `This is service doesn't exist for ${
    //       user.firstName + ' ' + user.lastName
    //     }`,
    //   });
    // }

    res.json(service);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error!');
  }
});

// @route PUT /api/services/:id
// @desc  Update a service
// @access Private
router.put('/:id', [auth, checkObjectId('id')], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).jso, { success: false, errors: errors.array() };
  }

  const { title, text, skills } = req.body;
  //Build service object
  const serviceFields = {};
  if (title) serviceFields.title = title;
  if (text) serviceFields.text = text;
  if (skills) serviceFields.skills = skills;

  try {
    let service = await Service.findById(req.params.id);
    // Check Service
    if (!service) {
      return res
        .status(400)
        .json({ success: false, msg: 'Service not found!' });
    }

    // Check User
    if (service.user.toString() !== req.user.id) {
      return res
        .status(400)
        .json({ success: false, msg: 'User not Authorized!' });
    }

    service = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: serviceFields },
      { new: true }
    );

    res.json({ success: true, msg: 'The service update', service });
  } catch (err) {}
});

// @route DELETE /api/services/:id
// @desc  Delete a service
// @access Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    // Check Service
    if (!service) {
      return res
        .status(400)
        .json({ success: false, msg: 'Service not found!' });
    }

    // Check User
    if (service.user.toString() !== req.user.id) {
      return res
        .status(400)
        .json({ success: false, msg: 'User not Authorized!' });
    }

    await service.remove();
    res.json({ success: true, msg: 'The service removed!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route PUT /api/services/like/:id
// @desc Like of service
// @access Private
router.put('/like/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    // Check Service
    if (!service) {
      return res
        .status(400)
        .json({ success: false, msg: 'Service not found!' });
    }

    // Check is the service already has been a like
    if (service.likes.some((like) => like.user.toString() === req.user.id)) {
      return res
        .status(400)
        .json({ success: false, msg: 'Service aleardy liked' });
    }

    service.likes.unshift({ user: req.user.id });

    await service.save();

    return res.json(service.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route PUT /api/services/unlike/:id
// @desc Unlike of service
// @access Private
router.put('/unlike/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    // Check Service
    if (!service) {
      return res
        .status(400)
        .json({ success: false, msg: 'Service not found!' });
    }

    // Check is the service already has been a like
    if (!service.likes.some((like) => like.user.toString() === req.user.id)) {
      return res
        .status(400)
        .json({ success: false, msg: 'Service has not yet been liked' });
    }

    service.likes = service.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    service.save();

    return res.json(service.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST /api/services/comment/:id
// @decs comment on a service
// @access Private
router.post(
  '/comment/:id',
  [
    auth,
    checkObjectId('id'),
    [check('text', 'Text is required!').not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const service = await Service.findById(req.params.id);
      const user = await User.findById(req.user.id).select('-password');

      const newComment = {
        text: req.body.text,
        name: user.firstName + ' ' + user.lastName,
        avatar: user.avatar,
        user: req.user.id,
      };

      service.comments.unshift(newComment);

      await service.save();
      return res.json({
        success: true,
        msg: `Comment add by ${user.firstName} ${user.lastName}`,
        comments: service.comments,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route PUT /api/services/comment/:id
// @decs comment on a service
// @access Private
router.put(
  '/comment/:id/:comment_id',
  [auth, [check('text', 'Text is required!').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const service = await Service.findById(req.params.id);

      // Pull out comment
      const comment = service.comments.find(
        (comment) => comment.id === req.params.comment_id
      );
      // Make sure comment exists
      if (!comment) {
        return res
          .status(404)
          .json({ success: false, msg: 'Comment does not exist' });
      }
      // Check user
      if (comment.user.toString() !== req.user.id) {
        return res
          .status(401)
          .json({ success: false, msg: 'User not authorized' });
      }

      comment.text = req.body.text;

      service.save();
      return res.json(service.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route DELETE /api/services/comment/:id/:comment_id
// @decs comment on a service
// @access Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    // Pull out comment
    const comment = service.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, msg: 'Comment does not exist' });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ success: false, msg: 'User not authorized' });
    }

    service.comments = service.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await service.save();
    return res.json({
      success: true,
      msg: 'Comment Deleted!',
      comments: service.comments,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
