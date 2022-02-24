// import express from 'express'; 
// import { createDrink, getAllDrinks } from '../controllers/drinks.js';
const express = require('express');
const { createDrink, getAllDrinks, deleteAllDrinks, deleteAllRecipes, deleteAllIngredients, createIngredient, createRecipe } = require('../controllers/drinks');
// const drinkController = require('../controllers/drinks');

const router = express.Router();

console.log(getAllDrinks)

// this is supposed to get info once we go to root
// router.get('/', getAllDrinks);
router.get('/', (req,res) => {
    getAllDrinks(req,res);
})


// route to add new drinks (post)
// router.post('/', createDrink);
router.post('/add', (req,res) => {
    createDrink(req,res);
})

router.post('/add/ingredient', (req, res) => {
    createIngredient(req, res)
})

router.post('/add/recipe', (req, res) => {
    createRecipe(req, res);
})

// router.delete('/', deleteAllDrinks);
router.delete('/', (req,res) => {
    deleteAllDrinks(req, res);
})

router.delete('/ingredients', (req, res) => {
    deleteAllIngredients(req, res);
})

router.delete('/recipes', (req, res) => {
    deleteAllRecipes(req, res);
})


// export default router;
module.exports = router;
