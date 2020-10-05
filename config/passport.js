const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const config = require('config');
const User = require('../models/User');

module.exports = function (passport) {
  //Login with Google
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.get('googleClientId'),
        clientSecret: config.get('googleClientSecret'),
        callbackURL: 'http://localhost:5500/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          await User.findOne({
            email: profile.emails[0].value,
          })
            .select('email password')
            .exec((err, user) => {
              if (err) done(err);
              if (user && user !== null) {
                done(null, user);
              } else {
                done(err);
              }
            });
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error!');
        }
      }
    )
  );

  // Login with Facebook
  passport.use(
    new FacebookStrategy(
      {
        clientID: config.get('facebookClientId'),
        clientSecret: config.get('facebookClientSecret'),
        callbackURL: 'http://localhost:5500/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'photos', 'email'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          await User.findOne({
            email: profile.emails[0].value,
          })
            .select('email password')
            .exec((err, user) => {
              if (err) done(err);
              if (user && user !== null) {
                done(null, user);
              } else {
                done(err);
              }
            });
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error!');
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
