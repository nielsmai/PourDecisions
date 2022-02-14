const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/user.model.js');

const router = express.Router();

function checkUsername(id) {
    var valid = User.findById(id).exec();
    if (valid != null) {
        return true;
    }
    else return false;
}

function checkPassword(password) {
    var valid = User.findById(id).exec();
    var upassword = valid.password;
    if (password == upassword){
        return true;
    }
    else {
        return false;
    }
}
function login(username,password) {
    if (password == null){
        throw 'LOGIN-FIELD-EMPTY';
    }
    if (username == null){
        throw 'LOGIN-FIELD-EMPTY';
    }
    var validU = checkUsername(username);
    if (validU == false) {
        throw 'LOGIN-INVALID';
    }
    else {
        var validP = checkPassword(password);
        if (validP == false) {
            throw 'LOGIN-INVALID';
        }
    }
    return true;
}
// export default router;
module.exports = router;