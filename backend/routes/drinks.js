const express = require('express');
const { createDrink, getAllDrinks, deleteAllDrinks, deleteAllRecipes, deleteAllIngredients, createIngredient, createRecipe } = require('../controllers/drinks');

const router = express.Router();

// this is supposed to get info once we go to root
// router.get('/', getAllDrinks);
router.get('/', (req, res) => {
    getAllDrinks(req, res);
})

// route to add new drinks (post)
router.post('/add', (req,res) => {
    createDrink(req, res);
})

router.post('/add/recipe', (req, res) => {
    createRecipe(req, res);
})

router.post('/add/ingredient', (req, res) => {
    createIngredient(req, res);
})

router.delete('/', (req,res) => {
    deleteAllDrinks(req, res);
})

router.delete('/ingredients', (req, res) => {
    deleteAllIngredients(req, res);
})

router.delete('/recipes', (req, res) => {
    deleteAllRecipes(req, res);
})


module.exports = router;
