// import express from 'express'; 
// import { createDrink, getAllDrinks } from '../controllers/drinks.js';
const express = require('express');
const { createDrink, getAllDrinks, deleteAllDrinks } = require('../controllers/drinks');
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


// export default router;
module.exports = router;
