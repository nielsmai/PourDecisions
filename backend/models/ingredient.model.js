import mongoose from 'mongoose';

var Schema = mongoose.Schema;
// Equivalent of adding enum strings in Java
const listOfIngredientTypes = ['Liquor', 'Fruit', 'Soda', 'Herb', 'Veggie', 'Other'];

var ingredientSchema = new Schema({
    ingredientName: { type: String, required: true, trim: true },
    ingredientType: { type: String, enum: listOfIngredientTypes, default: 'Other', required: true },
}, {
    timestamps: true,
});

// module.exports = mongoose.model('Ingredient', ingredientSchema);
var Ingredient = mongoose.model('Ingredient', ingredientSchema);
export default Ingredient; 