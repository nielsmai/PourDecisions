// import express from 'express';
// import { getAllUsers, createUser } from '../controllers/users.js';
const express = require('express');
const { getAllUsers, createUser, updateUser, deleteAll } = require('../controllers/users');
const { login } = require('../controllers/login');

const router = express.Router();


// this is supposed to get info once we go to root
// router.get('/', getAllUsers);
router.get('/', function(req,res){
    getAllUsers(req,res);
})


// route to add new user (post)
// router.post('/register', createUser);
router.post('/register', function(req,res){
    createUser(req, res);
});

router.post('/login', function (req, res) {
    login(req, res);
})
// router.put('/', function(req,res){
//     updateUser;
// })

router.delete('/', deleteAll);

// export default router;
module.exports = router;
