// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

// import User from '../models/user.model.js';
const User = require('../models/user.model');

const router = express.Router();

module.exports = router;

module.exports.logout = function (req, res) {
    if (req.session) {
        console.log(req.session.isLoggedIn);
        req.session.isLoggedIn = false; 
        req.session = null;
        res.redirect('/login'); //for now
        // req.session.destroy ( (err) => {
        //     if (err) res.status(400).send('LOGOUT-FAILURE')
        //     else {
        //         req.session = null;
        //         res.clearCookie();
        //         res.status(200).send('LOGOUT-SUCCESSFUL')
        //     }
        // })
    } else {
        console.log("NO-SESSION")
        res.end()
    }

    // sessionStorage.clear;
    // if (sessionStorage.getItem('status') == null) {
    //     return "LOGOUT-SUCCESSFUL";
    // }
    // else {
    //     return "LOGOUT-FAILURE";
    // }
}

// export default router;
