import express from 'express'; 
import { createDrink, getAllDrinks } from '../controllers/drinks.js';

const router = express.Router();

// this is supposed to get info once we go to root
router.get('/', getAllDrinks);

// route to add new drinks (post)
router.post('/', createDrink);

export default router;
