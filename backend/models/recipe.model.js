import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    garnish: { type: [String] },
    instruction: { type: String, required: true },
}, {
    timestamps: true,
});

// module.exports = mongoose.model('recipe', recipeSchema);
var recipe = mongoose.model('Recipe', recipeSchema);
export default recipe; 