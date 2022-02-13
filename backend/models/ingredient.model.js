import mongoose from 'mongoose';

var Schema = mongoose.Schema;
// Equivalent of adding enum strings in Java
const listOfIngredientType = ['Liquor', 'Fruit', 'Soda', 'Herb', 'Veggie', 'Other'];

var ingredientSchema = new Schema({
    ingredientName: { type: String, required: true, trim: true },
    ingredientType: { type: String, enum: listOfIngredientType, default: 'Other', required: true },
}, {
    timestamps: true,
});

// module.exports = mongoose.model('Ingredient', ingredientSchema);
var Ingredient = mongoose.model('Ingredient', ingredientSchema);
export default Ingredient; 