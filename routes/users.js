const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const gravatar = require('gravatar');
const normalize = require('normalize-url');
const { check, validationResult } = require('express-validator');

// Import model Users
const User = require('../models/User');

// @route POST api/users
// @desc  Register user
// @access Public
router.post(
  '/',
  [
    check('firstName', 'firstName is required').not().isEmpty(),
    check('lastName', 'lastName is required').not().isEmpty(),
    check(
      'username',
      'Please enter a username with 3 or more charachters and lowercase'
    )
      .isLength({ min: 3 })
      .isLowercase(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { firstName, lastName, username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ success: false, msg: 'User already exists' });
      }

      const avatar = normalize(
        gravatar.url(email, { s: '200', r: 'pg', d: 'mm' }),
        { forceHttps: true }
      );

      user = new User({
        firstName,
        lastName,
        username,
        avatar,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ success: true, token });
        }
      );
    } catch (err) {
      if (err.message[0] === 'E') {
        return res
          .status(400)
          .json({ success: false, msg: 'Username already taken' });
      }
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
