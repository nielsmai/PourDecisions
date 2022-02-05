const router = require('express').Router();
let User = require('../models/user.model');

// this is supposed to get info once we go to root
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

    // save them to database
    newUser.save()
    .then(() => res.json('User added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
