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
        const { username } = req.params
        let userQuery = await User.findOne({username: username})
        if (userQuery){
            res.status(200).json(userQuery)
        }
        else res.status(400).json({message: "NO-USER"})
    }catch (err) {
        console.log("something went wrong in getUserByUsername")
        // res.status(500).json({message: "Something went wrong when getting user by username"})
    }
}

module.exports.createUser = async (req, res) => {
    
    try {
        const { username, password, email } = req.body;  

        if (username == undefined || username == "") {
            res.status(400).json({message: "ACCOUNT-CREATE-EMPTY-USER"})
        }
        else if (password == undefined || password == "") {
            res.status(400).json({message: "ACCOUNT-CREATE-EMPTY-PASS"})
        }else{
            let newUser = await User.findOne({username:username});

            if (newUser) {
                // add more stuff if this works
                res.status(400).json({message: "CREDENTIALS-ALREADY-TAKEN"})
            } else {
                newUser = new User({username, password, email});
                await newUser.save()
                res.status(200).json({message: "USER-CREATED"})
            }
        }

    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports.updatePassword = async (req, res) => {
    
    try {
        // given username and old password
        const username = req.params.username
        var { password, newPassword } = req.body
        
        // find user by username and verify password
        let userQuery = await User.findOne({username: username})
        // if user exists
        if (userQuery) {
            // compare passwords
            userQuery.comparePassword(password, (err, isMatch) => {
                if (err) res.status(500).json({message: "Something went wrong."})
                // if it's a match
                else if (isMatch) {
                    // hash the password
                    User.encrypt(newPassword, async (err, hash) => {
                        if (err) res.status(500).json({message:"Something went wrong."})

                        // find user and update password
                        let update = await User.findOneAndUpdate({username: username}, {
                            password: hash 
                        })
                        // success
                        if (update) {
                            res.status(200).json({message: "PASSWORD-UPDATED"})
                        // failure
                        } else {
                            res.status(500).json({message: "Something went wrong."})
                        }
                    })
                } else {
                    res.status(400).json({message: "INCORRECT-PASSWORD"})
                }
            })

        } else {
            res.status(400).json({message: "USER-DOES-NOT-EXIST"})
        }

    } catch (err) {
        res.status(500).json({message: "Something went wrong."})
    }

}

module.exports.deleteAll = async (req, res) => {
    try {
        const del = await User.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
    
}



