const express = require('express');
const { 
    createDrink,
    getAllDrinks, 
    deleteAllDrinks,
    deleteAllRecipes,
    deleteAllIngredients,
    createIngredient,
    createRecipe,
    getAllDrinksAlpha,
    getAllDrinksNewest,
    getAllDrinksRating,
    getPersonalCustomDrinks,
    getAllDrinksAboveRating,
    getDrinkByName,
    getDrinkByUser,
    getDrinkByTag,
    getDrinkByIngredients

} = require('../controllers/drinks');

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
    getDrinkByIngredients(req,res)
})



module.exports = router;
