import express from 'express';
import mongoose from 'mongoose';

import Drink from '../models/drink.model.js';

const router = express.Router();

export const getAllDrinks = async (req, res) => {
    try {
        const drinks = await Drink.find();
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createDrink = async (req, res) => {
    const {name, recipe, rating, date} = req.body;  

    const newDrink = new Drink({name, recipe, rating, date});

    try {
        await newDrink.save();
        res.status(201).json(newDrink);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
    
}

export default router;

