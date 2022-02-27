const LocalStrategy = require('passport-local').Strategy

const passport = require('passport')
const User = require('../models/user.model')

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({}, (username, password, done) => {
            if (username == null || password == null) {
                    return done(null, false, { message: "LOGIN-EMPTY-FIELD" })
            }
            // console.log(username)
            User.findOne({username})
            .then( user => {
                if (!user) {
                    return done(null, false, { message: "USERNAME-DOES-NOT-EXIST" })
                }

                user.comparePassword(password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user, { message: "LOGIN-SUCCESSFUL"});
                    } else {
                        return done(null, false, { message: "LOGIN-INVALID"})
                    }
                })
            }) 
        })
    )
}

passport.serializeUser(function (user, done) {
    done(null, user._id)
})

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user)
    })
})
