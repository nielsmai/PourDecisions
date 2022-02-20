module.exports = {
    ensureAuth: function (req, res, next) {
        console.log("This is the current session user: ",req.session.passport)
        if (req.isAuthenticated()) {
            return next() 
        }
        console.log(`this person is logged in: ${req.isAuthenticated()}`)
        req.flash('error_msg', 'NOT-LOGGED-IN')
        res.redirect('/users/login')
    },

    forwardAuth: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next()
        }
        req.flash('error_msg', 'LOGGED-IN')
        res.redirect('/')
    }
}
