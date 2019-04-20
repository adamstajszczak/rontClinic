const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const moongose = require('mongoose');
const keys = require('../config/keys');

const User = moongose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let existingUser = await User.findOne({ googleId: profile.id });
      
      if (existingUser) {
        // Update user if is not to date
        if(existingUser.displayName !== profile.displayName || existingUser.email !== profile._json.email || existingUser.picture !== profile._json.picture) {
          existingUser = await User.update({googleId: profile.id}, Object.assign({}, profile._json, { displayName: profile.displayName, googleId: profile.id }));
        }

        return done(null, existingUser);
      }
      const user = await new User(Object.assign({}, profile._json, { displayName: profile.displayName, googleId: profile.id })).save();
      done(null, user);
    }
  )
);
