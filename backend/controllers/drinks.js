// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');


// import { Drink, Recipe, Ingredient } from '../models/drink.model.js';
const  Drink  = require('../models/drink.model');
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
        const author = req.params.username
        const drinks = await Drink.find( { $or: 
            [ {author: author}, {public_status : true } ] } ).sort( {name : 1});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getAllDrinksNewest = async (req,res) => {
    try {
        const author = req.params.username
        const drinks = await Drink.find( { $or: 
            [ {author: author}, {public_status : true} ] } ).sort( {createdAt : 'desc'});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getAllDrinksRating = async (req,res) => {
    try {
        const author = req.params.username
        const drinks = await Drink.find( { $or: 
            [ {author: author}, {public_status : true} ] } ).sort( {rating : -1});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getPersonalCustomDrinks = async (req,res) => {
    try {
        const author = req.params.username
        const drinks = await Drink.find( {$and: [{author: author},{tag: 'CUSTOM'}]});
            res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getAllDrinksAboveRating = async (req,res) => {
    try {
        const author = req.params.username
        const rating = parseInt(req.params.rating)
        const drinks = await Drink.find( {$and: [{rating: {$gt: rating}}, { $or: 
            [ {author: author}, {public_status : true} ] }]});
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports.getDrinkByUser = async (req,res) => {
    try {
        const author = req.params.username
        const drinks = await Drink.find({$and: [{author: author}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports.getDrinkByName = async (req,res) => {
    try {
        const name = req.params.name.replaceAll('_',' ')
        const drinks = await Drink.find({$and: [{name: name}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: "RECIPE-NOT-FOUND"})
    }
}

module.exports.getDrinkByTag = async (req,res) => {
    try {
        const tags = req.params.tags
        const drinks = await Drink.find({$and: [{tag: {$in: tags}}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports.getDrinkByIngredients = async (req,res) => {
    try {
        const ingredients = req.params.ingredients
        const drinks = await Drink.find({$and: [{ 'recipe.ingredients': {$in: ingredients}}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

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

