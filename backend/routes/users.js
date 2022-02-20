// import express from 'express';
// import { getAllUsers, createUser } from '../controllers/users.js';
const express = require('express');
const { getAllUsers, createUser, updateUser } = require('../controllers/users');

const router = express.Router();

// this is supposed to get info once we go to root
// router.get('/', getAllUsers);
router.get('/', function(req,res){
    getAllUsers;
})

// route to add new user (post)
// router.post('/', createUser);
router.post('/register', function(req,res){
    createUser;
});

router.put('/', function(req,res){
    updateUser;
})

// export default router;
module.exports = router;
