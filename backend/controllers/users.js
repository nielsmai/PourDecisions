const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

const User = require('../models/user.model');

const router = express.Router();
module.exports = router;

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.getUserByUsername = async (req, res) => {
    try  {
        const { user } = req.params
        let userQuery = await User.findOne({username: user})
        if (userQuery){
            console.log(userQuery)
            res.status(200).json(userQuery)
        }
        else res.status(400).json({message: "no such user"})
    }catch (err) {
        console.log("something went wrong in getUserByUsername")
    }
}

module.exports.createUser = async (req, res) => {
    
    try {
        const { username, password, email } = req.body;  

        let newUser = await User.findOne({username:username});

        if (newUser) {
            // add more stuff if this works
            res.status(400).json({message: "CREDENTIALS-ALREADY-TAKEN"})
        } else {
            newUser = new User({username, password, email});
            await newUser.save()
            res.status(200).json({message: "USER-CREATED"})
        }


    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports.updateUser = async (req, res) => {
    
    const { username, password, newPassword } = req.body;
    const updatedUser = User({username, password});

    // Not exactly how the hashing works here so leaving blank
}

module.exports.deleteAll = async (req, res) => {
    try {
        const del = await User.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
    
}



