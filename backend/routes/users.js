const express = require('express');
const passport = require('passport')
const { getAllUsers, createUser, updateUser, deleteAll, getUserByUsername } = require('../controllers/users');
const { login } = require('../controllers/login');
const { logout } = require('../controllers/logout');

const { ensureAuth, forwardAuth } = require('../controllers/auth');

const router = express.Router();

// TODO ensureAuth is here for test, remove later
router.get('/', (req,res) => {
    getAllUsers(req,res);
})

router.post('/register', (req,res) => {
    createUser(req, res);
});

// add forwardAuth 
router.post('/login', (req, res, next) => {
    login(req,res,next);
})

router.post('/login', (req, res, next) => {
 login (req, res, next)
})

// add ensureAuth
router.get('/logout', (req, res) => {
    logout(req, res)
})

// for testing
router.get('/profile', (req, res, next) => {
    if (req.user) {
        return res.json({ user: req.user})
    } else { 
        return res.json({ user: null })
    }
})

router.get('/:username', (req, res) => {
    getUserByUsername(req,res)
    
}) 
router.delete('/', (req, res) => {
    deleteAll(req,res)
});

module.exports = router;
