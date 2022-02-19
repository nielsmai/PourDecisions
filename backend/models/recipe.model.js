// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const {ingredientSchema} = require('./ingredient.model');
var Schema = mongoose.Schema;

// var Schema, assuming that content of Recipe can be changed
const recipeSchema = new Schema({
    ingredients: [ingredientSchema],    // Imported from ingredient.model.js
    garnish: [{ type: String }],        // ingredient with type garnish instead?
    instruction: { 
        type: String, 
        required: true },
}, {
    timestamps: true,
});

// module.exports = mongoose.model('Recipe', recipeSchema);
var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = { Recipe }; 
module.exports.recipeSchema = recipeSchema;
