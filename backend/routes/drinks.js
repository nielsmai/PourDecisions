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
    getDrinkByIngredients,
    changeStatus,
    addIngredient,
    removeIngredient,
    removeDrink,
    getAllIngredients,
    getDrinkByUserAndName,
    getDrinkById,
    incrementRating,
    decrementRating
    // getIngredientByName

} = require('../controllers/drinks');

const router = express.Router();

// this is supposed to get info once we go to root
router.get('/', (req, res) => {
    getAllDrinks(req, res);
})

router.get('/id/:id', (req, res) => {
    getDrinkById(req, res)
})

router.put('/drink/like', (req, res) => {
    incrementRating(req, res)
})

router.put('/drink/unlike', (req, res) => {
    decrementRating(req, res)
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

router.get('/:username/:name', function(req,res){
    getDrinkByUserAndName(req,res)
})

router.get('/filter/tag/:tag', function(req,res){
    getDrinkByTag(req, res)
})

router.get('/filter/ingredients/all', function(req,res){
    getDrinkByIngredients(req,res)
})

router.put('/:username/:name/update/status', function(req, res) {
   changeStatus(req, res) 
})

router.put('/:username/:name/update/ingredient', function(req, res) {
    addIngredient(req,res)
})

router.put('/:username/:name/remove/ingredient', function (req, res) {
    removeIngredient(req,res)
})

router.delete('/:name/delete', function (req, res) {
    removeDrink(req, res)
})

router.delete('/ingredients', (req, res) => {
    deleteAllIngredients(req, res);
})

router.delete('/recipes', (req, res) => {
    deleteAllRecipes(req, res);
})

router.get('/ingredients/all', function(req, res){
    getAllIngredients(req, res)
})

// router.get('ingredients/:ingredientName/name', function(req,res){
//     getIngredientByName(req,res)
// })


module.exports = router;
