// import express from 'express';
// import { getAllUsers, createUser } from '../controllers/users.js';
const express = require('express');
const { getAllUsers, createUser } = require('../controllers/users');

const router = express.Router();

// this is supposed to get info once we go to root
// router.get('/', getAllUsers);
router.get('/', function(req,res){
    getAllUsers;
})

// route to add new user (post)
// router.post('/', createUser);
router.post('/', function(req,res){
    createUser;
});


// export default router;
module.exports = router;
