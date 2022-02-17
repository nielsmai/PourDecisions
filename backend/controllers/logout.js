// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

// import User from '../models/user.model.js';
const User = require('../models/user.model');

const router = express.Router();

module.exports.logout = function () {
    sessionStorage.clear;
    return "LOGOUT-SUCCESSFUL";
}

// export default router;
module.exports = router;
