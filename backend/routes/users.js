const express = require('express');
const passport = require('passport')
const { getAllUsers, createUser, updateUser, deleteAll } = require('../controllers/users');
const { login } = require('../controllers/login');
const { logout } = require('../controllers/logout');

const { forwardAuth } = require('../controllers/auth');

const router = express.Router();

router.get('/', forwardAuth, (req,res) => {
    getAllUsers(req,res);
})


router.post('/register', (req,res) => {
    createUser(req, res);
});

// router.post('/login', function (req, res) {
//     login(req, res);
// })
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    }) (req, res, next)
})

// router.delete('/logout', function (req, res) {
//     logout(req, res);
// })
router.get('/logout', (req, res) => {
    logout(req, res)
})

router.delete('/', deleteAll);

module.exports = router;
