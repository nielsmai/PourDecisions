const User = require('../models/user.model');

module.exports.logout = function (req, res) {
    req.logout()
    if (req.user != null) {
        req.flash('error_msg', 'LOGGED-OUT-FAILURE')
    }
    else {
        req.flash('success_msg', 'LOGGED-OUT-SUCCESSFULLY')
        res.redirect('/users/login')
    }
}
