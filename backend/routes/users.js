import express from 'express';
import { getAllUsers, createUser } from '../controllers/users.js';

const router = express.Router();

// this is supposed to get info once we go to root
// temporary
router.get('/', getAllUsers);

// route to add new user (post)
router.post('/', createUser);

export default router;
