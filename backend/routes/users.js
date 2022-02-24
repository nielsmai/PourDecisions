const express = require('express');

const { getAllUsers, createUser, updateUser, deleteAll } = require('../controllers/users');
const { login } = require('../controllers/login');
const { logout } = require('../controllers/logout');

const { ensureAuth, forwardAuth } = require('../controllers/auth');

const router = express.Router();

// TODO ensureAuth is here for test, remove later
router.get('/', ensureAuth, (req,res) => {
    getAllUsers(req,res);
})

router.post('/register', (req,res) => {
    createUser(req, res);
});

router.post('/login', (req, res, next) => {
    login(req,res,next);
})

router.get('/logout', (req, res) => {
    logout(req, res)
})

router.delete('/', deleteAll);

module.exports = router;
