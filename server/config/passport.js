var mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

module.exports = function() {
    passport.use(new LocalStrategy(function (username, password, done) {
        //console.log('middelware LocalStrategy()');
        User.findOne({username: username}, function (err, user) {
            if (user && user.authenticate(password)) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));

    passport.serializeUser(function (user, done) {
        //console.log('passport.serializeUser();');
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser(function (id, done) {
        //console.log('passport.desirializeUer();');
        User.findOne({_id: id}, function (err, user) {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    });
}