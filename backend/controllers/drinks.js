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
            [ {author: req}, {status: public} ] } ).sort( {createdAt : 'desc'});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getAllDrinksRating = async (req,res) => {
    try {
        const drinks = await Drink.find( { $or: 
            [ {author: req}, {public_status : true} ] } ).sort( {rating : -1});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getPersonalCustomDrinks = async (req,res) => {
    try {
        const drinks = await Drink.find( {$and: [{author: req},{tag: CUSTOM }]});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getAllDrinksAboveRating = async (req,res) => {
    try {
        const drinks = await Drink.find( {$and: [{rating: {$gt: req}}, {public_status : true}]});
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getDrinkByUser = async (req,res) => {
    try {
        const drinks = await Drink.find({$and: [{author:req}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}
module.exports.getDrinkByName = async (req,res) => {
    try {
        const drinks = await Drink.find({$and: [{name:req}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: "RECIPE-NOT-FOUND"})
    }
}

module.exports.getDrinkByTag = async (req,res) => {
    try {
        const drinks = await Drink.find({$and: [{tag: {$in: req}}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports.getDrinkByIngredients = async (req,res) => {
    try {
        const drinks = await Drink.find({$and: [{ 'recipe.ingredients': {$in: req}}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}


module.exports.createIngredient = (req, _res) => {
    const ingredient = req.body;
    const newIngredient = new Ingredient(ingredient);
    return newIngredient;
}

module.exports.createRecipe = (req, _res) => {
    const recipe = req.body;
    const newRecipe = new Recipe(recipe);
    return newRecipe;
}

router.get('/', function(req,res){
    getAllDrinks(req,res)
})

router.get('/:user/a', function(req,res){
    getAllDrinksAlpha(req,res)
})

router.get('/:user/n', function(req,res){
    getAllDrinksNewest(req,res)
})

router.get('/:user/r', function(req,res){
    getAllDrinksRating(req,res)
})

router.get('/:user/custom', function(req,res){
    getPersonalCustomDrinks(req,res)
})

router.get('/:user/ra', function(req,res){
    getAllDrinksAboveRating(req,res)
})

router.get('/:user', function(req,res){
    getDrinkByUser(req,res)
})

router.get('/:name/name', function(req,res){
    getDrinkByName(req,res)
})

router.get('/tags', function(req,res){
    getDrinkByTag(req,res)
})

router.get('/ingredients', function(req,res){
    getDrinkByTag(req,res)
})



// export default router;
module.exports = router;

