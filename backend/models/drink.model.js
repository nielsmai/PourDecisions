// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredientType: {
        type: String,
        enum: ['LIQUOR', 'FRUIT', 'VEGGIE', 'SODA', 'HERB', 'OTHER'],
        default: 'OTHER'
    }
})

const recipeSchema = new Schema({
    ingredients: [ingredientSchema],
    garnish: [{type: String}], // I think this should be an ingredient with type garnish instead
    instructions: {
        type: String, 
    }
})


const drinkSchema = new Schema({
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
var Recipe = mongoose.model('Recipe', recipeSchema);
var Ingredient = mongoose.model('Ingredient', ingredientSchema);

// export { Drink, Recipe, Ingredient }; 
module.exports = { Drink, Recipe, Ingredient };
