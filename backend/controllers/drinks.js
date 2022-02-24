// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

// import { Drink, Recipe, Ingredient } from '../models/drink.model.js';
const Drink  = require('../models/drink.model');
const { Recipe } = require('../models/recipe.model');
const { Ingredient } = require('../models/ingredient.model');

const router = express.Router();

module.exports = router;

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
    // const { name, author, recipe, tag, public_status, rating } = req.body;

    const newDrink = new Drink(drink);
    // const newDrink = new Drink({ name, author, recipe, tag, public_status, rating } );

    try {
        await newDrink.save();
        res.status(201).json(newDrink);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}


module.exports.getAllDrinksAlpha = async (req,res) => {
    try {
        const drinks = await Drink.find( { $or: 
            [ {author: req}, {status: public } ] } ).sort( {name : 1});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getAllDrinksNewest = async (req,res) => {
    try {
        const drinks = await Drink.find( { $or: 
            [ {author: req}, {status: public} ] } ).sort( {timestamps : 'desc'});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getAllDrinksRating = async (req,res) => {
    try {
        const drinks = await Drink.find( { $or: 
            [ {author: req}, {status: public } ] } ).sort( {rating : -1});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getPersonalCustomDrinks = async (req,res) => {
    try {
        const drinks = await Drink.find( {author: req});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getAllDrinksAboveRating = async (req,res) => {
    try {
        const drinks = await Drink.find( {rating: {$gt: req}});
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getDrinkByUser = async (req,res) => {
    try {
        const drinks = await Drink.find({$and: [{author:req}, {status: public}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports.getDrinkByName = async (req,res) => {
    try {
        const drinks = await Drink.find({$and: [{name:req}, {status: public}]})
        res.status(200).json(drinks);
        return drinks;
    } catch (err) {
        res.status(404).json({message: "RECIPE-NOT-FOUND"})
    }
}

module.exports.getDrinkByTag = async (req,res) => {
    try {
        const drinks = await Drink.find({$and: [{tag: {$in: req}}, {status: public}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports.getDrinkByIngredients = async (req,res) => {
    try {
        const drinks = await Drink.find({$and: [{ 'recipe.ingredients': {$in: req}}, {status: public}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

// temporary for testing 
module.exports.deleteAllDrinks = async (req, res) => {
    try {
        const del = await Drink.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
}

// TODO MOVE THESE TO ANOTHER FILE
// module.exports.createIngredient = (req, _res) => {
//     const ingredient = req.body;
//     const newIngredient = new Ingredient(ingredient);
//     return newIngredient;
// }
module.exports.createIngredient = async (req, res) => {
    const ingredient = req.body;  

    const newIngredient = new Ingredient(ingredient);

    try {
        await newIngredient.save();
        res.status(201).json(newIngredient);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// // temporary for testing 
module.exports.deleteAllIngredients = async (req, res) => {
    try {
        const del = await Ingredient.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
}

// module.exports.createRecipe = (req, _res) => {
//     const recipe = req.body;
//     const newRecipe = new Recipe(recipe);
//     return newRecipe;
// }
module.exports.createRecipe = async (req, res) => {
    const recipe = req.body

    const newRecipe = new Recipe(recipe);

    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}




// // temporary for testing 
module.exports.deleteAllRecipes = async (req, res) => {
    try {
        const del = await Recipe.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
}



// export default router;

