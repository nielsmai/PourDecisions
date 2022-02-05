const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// euh not sure what a drink should have
const drinkSchema = new Schema({
    name: { type: String, required: true },
    recipe: { type: String, required: true }, // maybe need to change this
    rating: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Drink', drinkSchema);
