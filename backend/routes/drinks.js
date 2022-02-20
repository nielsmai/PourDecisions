// import express from 'express'; 
// import { createDrink, getAllDrinks } from '../controllers/drinks.js';
const express = require('express');
const { createDrink, getAllDrinks, deleteAllDrinks, getDrinkByUser,
        getDrinkByName,getDrinkByTag,getAllDrinksAlpha,getAllDrinksNewest,
        getDrinkByIngredients, getPersonalCustomDrinks,getAllDrinksRating,
        getAllDrinksAboveRating} 
    = require('../controllers/drinks');
// const drinkController = require('../controllers/drinks');

const router = express.Router();

console.log(getAllDrinks)

// this is supposed to get info once we go to root
// router.get('/', getAllDrinks);
router.get('/', function (req,res) {
    getAllDrinks(req,res);
})


// route to add new drinks (post)
// router.post('/', createDrink);
router.post('/', function (req,res) {
    createDrink(req,res);
})

// router.delete('/', deleteAllDrinks);
router.delete('/', function (req,res) {
    deleteAllDrinks(req, res);
})
router.get('/', function(req,res){
    getAllDrinks(req,res)
})

router.get('/:username/a', function(req,res){
    getAllDrinksAlpha(req,res)
})

router.get('/:username/n', function(req,res){
    getAllDrinksNewest(req,res)
})

router.get('/:username/r', function(req,res){
    getAllDrinksRating(req,res)
})

router.get('/:username/custom', function(req,res){
    getPersonalCustomDrinks(req,res)
})

router.get('/:username/ra/:rating', function(req,res){
    getAllDrinksAboveRating(req,res)
})

router.get('/:username', function(req,res){
    getDrinkByUser(req,res)
})

router.get('/:name/name', function(req,res){
    getDrinkByName(req,res)
})

router.get('/tags/:tags', function(req,res){
    getDrinkByTag(req,res)
})

router.get('/ingredients', function(req,res){
    getDrinkByIngredients(req,res)
})

// export default router;
module.exports = router;
