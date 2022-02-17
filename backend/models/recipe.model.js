// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const {ingredientSchema} = require('./ingredient.model.js');
var Schema = mongoose.Schema;

// var Schema, assuming that content of Recipe can be changed
var recipeSchema = new Schema({
    ingredients: [ingredientSchema],    // Imported from ingredient.model.js
    garnish: [{ type: String }],        // ingredient with type garnish instead?
    instruction: { 
        type: String, // not requiring instructions makes sense? just a list of ingredients
    },
}, {
    timestamps: true,
});

// module.exports = mongoose.model('recipe', recipeSchema);
var recipe = mongoose.model('Recipe', recipeSchema);
module.exports = { recipe }; 
module.exports = recipeSchema;
