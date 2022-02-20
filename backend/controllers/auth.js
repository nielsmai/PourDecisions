module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next() 
        }
        req.flash('error_msg', 'NOT-LOGGED-IN')
        res.redirect('/users/login')
    },

    forwardAuth: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next()
        }
        res.redirect('/')
    }
}
