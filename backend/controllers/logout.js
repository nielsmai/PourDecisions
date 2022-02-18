// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

// import User from '../models/user.model.js';
const User = require('../models/user.model');

const router = express.Router();

module.exports.logout = function () {
    sessionStorage.clear;
    if (sessionStorage.getItem('status') != null) {
        return "LOGOUT-SUCCESSFUL";
    }
    else {
        return "LOGOUT-FAILURE";
    }
}

// export default router;
module.exports = router;
