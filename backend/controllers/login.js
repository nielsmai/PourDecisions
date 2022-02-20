const passport = require('passport')

module.exports.login = function (req, res, next) {
    // passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/users/login',
    //     failureFlash: true }) (req, res, next)
    passport.authenticate('local', (err, user) => {

        if (err) {
            console.log('some error before log in attempt: ', err)
            return err
        }
        console.log('User: ', user)
        if (!user) {
            req.flash('error_msg', 'LOGIN-INVALID')
            return res.redirect('/users/login') 
        }
        req.logIn(user, (err) => {
            if (err) {
                console.log('some error during log in attempt: ', err)
            }
            req.flash('success_msg', 'LOGGED-IN')
            req.session.save(() => res.redirect('/'))
        })

    }) (req, res, next)
}

