import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.model.js';

const router = express.Router();

function logout(username) {
    if (username != "Guest"){
        return "LOGOUT-SUCCESSFUL";
    }
    else throw 'LOGOUT-INVALID';
}

export default router;