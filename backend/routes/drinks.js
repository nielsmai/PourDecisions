// import express from 'express'; 
// import { createDrink, getAllDrinks } from '../controllers/drinks.js';
const express = require('express');
const { createDrink, getAllDrinks, createRecipe, createIngredient } = require('../controllers/drinks');

const router = express.Router();

// this is supposed to get info once we go to root
// router.get('/', getAllDrinks);
router.get('/', function (req,res) {
    getAllDrinks(req, res);
})

// route to add new drinks (post)
// router.post('/', createDrink);
router.post('/add', function (req,res) {
    createDrink(req, res);
})

router.post('/add/recipe', function (req, res) {
    createRecipe(req, res);
})

router.post('/add/ingredient', function (req, res) {
    createIngredient(req, res);
})

// export default router;
module.exports = router;
