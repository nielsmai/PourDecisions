// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Equivalent of adding enum strings in Java
const listOfIngredientType = ['LIQUOR', 'FRUIT', 'SODA', 'HERB', 'VEGGIE', 'OTHER'];

// const Schema, assuming that content of Ingredient cannot be changed
const ingredientSchema = new Schema({
    ingredientName: { 
        type: String, 
        required: true, 
    },
    ingredientType: { 
        type: String, 
        enum: listOfIngredientType, 
        default: 'OTHER', 
        required: true 
    },
}, {
    timestamps: true,
});

// module.exports = mongoose.model('Ingredient', ingredientSchema);
var Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = { Ingredient }; 
module.exports.ingredientSchema = ingredientSchema; // For recipe.model.js