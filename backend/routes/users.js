const express = require('express');
const { getAllUsers, createUser, createAdmin, deleteAll, getUserByUsername, updatePassword, addFavourite, removeFavourite } = require('../controllers/users');
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

router.get('/:username', (req, res) => {
    getUserByUsername(req,res)
    
}) 

router.put('/update', (req, res) => {
    updatePassword(req, res)
})

router.put('/:username/favourite/add', (req, res) => {
    addFavourite(req, res)
})

router.put('/:username/favourite/remove', (req, res) => {
    removeFavourite(req, res)
})

router.delete('/', (req, res) => {
    deleteAll(req,res)
});

module.exports = router;
