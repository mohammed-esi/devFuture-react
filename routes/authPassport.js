const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const passport = require('passport');

// @route  GET /auth/google
// @desc   Auth with google
// @access Public
router.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  })
);

// @route  GET /auth/google/callback
// @desc   Google auth callback
// @access Private
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth' }),
  async (req, res) => {
    try {
      const payload = {
        user: {
          id: req.user.id,
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
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route  GET /auth/facebook
// @desc   Auth with facebook
// @access Public
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email'],
  })
);

// @route  GET /auth/facebook/callback
// @desc   Facebook auth calllback
// @access Public
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth' }),
  (req, res) => {
    try {
      const payload = {
        user: {
          id: req.user.id,
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
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
