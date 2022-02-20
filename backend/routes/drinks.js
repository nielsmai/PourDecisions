const express = require('express');
const { createDrink, getAllDrinks, createRecipe, createIngredient } = require('../controllers/drinks');

const router = express.Router();

// this is supposed to get info once we go to root
// router.get('/', getAllDrinks);
router.get('/', (req, res) => {
    getAllDrinks(req, res);
})

// route to add new drinks (post)
// router.post('/', createDrink);
router.post('/add', (req,res) => {
    createDrink(req, res);
})

router.post('/add/recipe', (req, res) => {
    createRecipe(req, res);
})

router.post('/add/ingredient', (req, res) => {
    createIngredient(req, res);
})

// router.delete('/', deleteAllDrinks);
router.delete('/', (req,res) => {
    deleteAllDrinks(req, res);
})

module.exports = router;
