// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

// import { Drink, Recipe, Ingredient } from '../models/drink.model.js';
const { Drink, Recipe, Ingredient } = require('../models/drink.model');

const router = express.Router();

module.exports.getAllDrinks = async (req, res) => {
    try {
        const drinks = await Drink.find();
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.createDrink = async (req, res) => {
    const drink = req.body;  

    const newDrink = new Drink(drink);

    try {
        await newDrink.save();
        res.status(201).json(newDrink);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
    
}

module.exports.createIngredient = (req, res) => {
    const ingredient = req.body;
    const newIngredient = new Ingredient(ingredient);

    return newIngredient;
}

module.exports.createRecipe = (req, res) => {
    const recipe = req.body;
    const newRecipe = new Recipe(recipe);

    return newRecipe;
}

// export default router;
module.exports = router;

