const express = require('express');
const mongoose = require('mongoose');

const Drink = require('../models/drink.model');
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
    // const drink = req.body;  
    const { name, author, recipe, tag, public_status, rating } = req.body;

    // const newDrink = new Drink(drink);
    const newDrink = new Drink({ name, author, recipe, tag, public_status, rating } );

    try {
        await newDrink.save();
        res.status(201).json(newDrink);
    } catch (err) {
        var errorMessage = err.message
        if (name == undefined || name == ""){
            errorMessage = "CREATE-DRINK-NAME-EMPTY"
        }else if (author == undefined || author == ""){
            errorMessage = "CREATE-DRINK-AUTHOR-EMPTY"
        }else if (recipe.ingredients == []){
            errorMessage = "CREATE-DRINK-INGREDIENTS-EMPTY"
        } 
        res.status(409).json({ message: errorMessage});
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
        res.status(500).json({message: err.message})
    }
}

module.exports.getDrinkByName = async (req,res) => {
    try {
        const name = req.params.name.replaceAll('_',' ')
        const drinks = await Drink.find({$and: [{name: new RegExp(name,'i')}, {public_status : true}]})
            res.status(200).json(drinks);
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports.getDrinkByTag = async (req,res) => {
    try {
        const tag = req.params.tag
        const drinks = await Drink.find({$and: [{tag: tag}, {public_status : true}]})
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports.getDrinkByIngredients = async (req,res) => {
    try {
        const ingredients = req.query.ingredients
        const drinks = await Drink.find({
            "$and": [
              {
                "recipe.ingredients": {
                  "$elemMatch": {
                    ingredientName: {
                      "$in": ingredients
                    }
                  }
                }
              },
              {
                public_status: true
              }
            ]
          })
        res.status(200).json(drinks);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports.createIngredient = async (req, res) => {
    // const ingredient = req.body;  
    const { ingredientName, ingredientType } = req.body

    const newIngredient = new Ingredient({ingredientName, ingredientType});

    try {
        await newIngredient.save();
        res.status(201).json(newIngredient);
    } catch (err) {
        var errorMessage = err.message
        if (ingredientName == undefined || ingredientName == ""){
            errorMessage = "UNDEFINED-INGREDIENT-NAME"
        }
        res.status(409).json({ message: errorMessage });
    }
}

module.exports.changeStatus = async (req, res) => {
    const author = req.params.username
    const name = req.params.name.replaceAll('_',' ')
    const public_status = (req.body.public_status == "public") ? true: false

    
    try {
       const update = await Drink.findOneAndUpdate({
            author: author,
            name: name
        },{
            public_status: public_status 
        })
        if (update){
            res.status(200).json({message: "UPDATE-RECIPE-STATUS"})
        } else {
            res.status(400).json({message: "COULD-NOT-UPDATE-STATUS"})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }

}

// // temporary for testing 
module.exports.deleteAllDrinks = async (req, res) => {
    try {
        const del = await Drink.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
}

module.exports.deleteAllIngredients = async (req, res) => {
    try {
        const del = await Ingredient.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
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

// temporary for testing 
module.exports.deleteAllRecipes = async (req, res) => {
    try {
        const del = await Recipe.deleteMany({});
        res.status(200).json({del});
    } catch (error) {
        res.status(400).json({ message: error.message });
    } 
}


