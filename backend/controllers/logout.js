// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

// import User from '../models/user.model.js';
const User = require('../models/user.model');

const router = express.Router();

function logout(username) {
    if (username != "Guest"){
        return "LOGOUT-SUCCESSFUL";
    }
    else throw 'LOGOUT-INVALID';
}

// export default router;
module.exports = router;
