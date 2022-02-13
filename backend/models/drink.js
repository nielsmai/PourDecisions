import mongoose from 'mongoose';

var Schema = mongoose.Schema;
// Equivalent of adding enum strings in Java
const listOfTag = ['Alcoholic', 'Mocktail', 'Custom', 'Classic'];
const listOfIngredientType = ['Liquor', 'Fruit', 'Soda', 'Herb', 'Veggie', 'Other'];

var drinkSchema = new Schema({
    drinkID: Schema.Types.ObjectId,
    drinkName: { type: String, required: true, trim: true },
    tag: { type: String, enum: listOfTag, default: 'Classic', required: true },
    public: { type: Boolean, required: true },
    creator: { type: String, required: true, trim: true },
    rating: { type: Number, required: true }

}, {
    timestamps: true,
});

/** 
Separated Recipe and Ingredient in different files as they are represented as classes in class diagram.
If we decide to describe them as objects of the class Drink, then uncomment everything below.

var recipeSchema = new Schema({
    garnish: { type: [String] },
    instruction: { type: String, required: true },
}, {
    timestamps: true,
});

var ingredientSchema = new Schema({
    ingredientName: { type: String, required: true, trim: true },
    ingredientType: { type: String, enum: listOfIngredientType, default: 'Other', required: true },
}, {
    timestamps: true,
});
*/

// module.exports = mongoose.model('Drink', drinkSchema);
var Drink = mongoose.model('Drink', drinkSchema);
export default Drink; 
