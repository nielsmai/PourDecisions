import express from 'express';
import mongoose from 'mongoose';
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

import userModel from '../models/user.model';

const router = express.Router();

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    
    const { username, password } = req.body;  
    const newUser = new userModel({username, password});
    
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            // save them to database
            newUser.save()
            .then(() => res.json(newUser))
            .catch(err => res.status(409).json({ message: err.message }));
        });
    });
    
    

}

