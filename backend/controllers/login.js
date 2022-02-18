// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

// import User from '../models/user.model.js';
const User = require('../models/user.model');

const router = express.Router();

module.exports = router;

module.exports.login = function(username,password) {
    if (password == null){
        throw 'LOGIN-FIELD-EMPTY';
    }
    if (username == null){
        throw 'LOGIN-FIELD-EMPTY';
    }
    User.findOne({username}, function(err, user) {
        if (err) {
            throw 'LOGIN-INVALID'
        }
        else if (user.password != password) {
            throw 'LOGIN-INVALID';
        }
        else {
            sessionStorage.setItem('status', 'loggedIn');
            return true;
        }
    })
};

// export default router;
