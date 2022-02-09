import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// euh not sure what a drink should have
const drinkSchema = new Schema({
    name: { type: String, required: true, trim: true },
    recipe: { type: String, required: true }, // maybe need to change this
    rating: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

// module.exports = mongoose.model('Drink', drinkSchema);
export default mongoose.model('Drink', drinkSchema);
