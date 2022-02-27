const User = require('../models/user.model');

module.exports.logout = function (req, res) {
    req.logout()
    if (req.user != null) {
        // req.flash('error_msg', 'LOGGED-OUT-FAILURE')
        res.status(400).json({message: "LOGOUT-FAILURE"})
    }
    else {
        res.status(200).json({message: "LOGOUT-SUCCESSFUL"})
    }
}

