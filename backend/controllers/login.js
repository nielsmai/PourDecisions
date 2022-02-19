// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const { type } = require('express/lib/response');
const mongoose = require('mongoose');
// import User from '../models/user.model.js';
const User = require('../models/user.model');
const { comparePassword } = require('../models/user.model')

const router = express.Router();

module.exports = router;

module.exports.login = async function(req, res) {
    console.log(req.body);
    const { username, password } = req.body;

    if (password == null || username == null){
        res.status(400).json('LOGIN-FIELD-EMPTY');
    }
    User.findOne({username}, async function(err, user) {
        if (err) {
            res.status(400).json("LOGIN-INVALID");
        }
        else {
            // prob need to add something to check if they're already logged in
            res.locals.username = username
            user.comparePassword(password, (err, isMatch) => {
                if (err) {
                    res.status(400).json(err);
                } 
                else if (!isMatch) {
                    res.status(400).json("LOGIN-INVALID")
                }
                else {
                    console.log("Logged in successful");
                    req.session.isLoggedIn = true;
                    req.session.username = res.locals.username; 
                    res.status(200).json("LOGGED-IN");
                }
            })
        }
    })
};

// export default router;
