const router = require('express').Router();
let User = require('../models/user.model');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

// this is supposed to get info once we go to root
// temporary
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to add new user (post)
// need to review
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    // create new user with info
    const newUser = new User({username, password});

    // something related to password hashing
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            // save them to database
            newUser.save()
            .then(() => res.json('User added.'))
            .catch(err => res.status(400).json('Error: ' + err));
        });
    });

});

module.exports = router;
