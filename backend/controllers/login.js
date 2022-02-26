const passport = require('passport')

module.exports.login = function (req, res, next) {
    passport.authenticate('local', (err, user) => {
        
        req.logIn(user, (err) => {
            // console.log("CURRENT USER: ", user)
            if (err) {
                res.status(500).json({message: "LOGIN-INVALID"})
            } else {
                res.status(200).json({message: "LOGIN-SUCCESSFUL"})
            }
        })
    }) (req, res, next)

    // }) (req, res, next)
    // if (req.user) {
    //     res.status(200).json({message: "LOGIN-SUCCESSFUL"})
    // }else {
    //     res.status(500).json({message: "LOGIN-INVALID"})
    // }
}

