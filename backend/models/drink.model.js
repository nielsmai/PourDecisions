// import mongoose from 'mongoose';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const recipeSchema = require('./recipe.model');

// var Schema, assuming that content of Drink can be modified
var drinkSchema = new Schema({
    name: { 
        type: String,
        required: true,
        trim: true
    },
    tag: { 
        type: String,
        enum: ['ALCOHOLIC', 'MOCKTAIL', 'CUSTOM', 'CLASSIC'],
        default: 'CUSTOM',
        required: true
    },
    public_status: {
        type: Boolean,
        default: true,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    rating: { 
        type: Number,
        required: true
    },
    recipe: recipeSchema

}, {
    timestamps: true,
});


var Drink = mongoose.model('Drink', drinkSchema);

// export { Drink, Recipe, Ingredient }; 
module.exports = { Drink };
