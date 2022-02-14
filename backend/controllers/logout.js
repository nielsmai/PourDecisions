const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/user.model.js');

const router = express.Router();

function logout(username) {
    if (username != "Guest"){
        return "LOGOUT-SUCCESSFUL";
    }
    else throw 'LOGOUT-INVALID';
}
// export default router;
module.exports = router;