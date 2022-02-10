import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// euh not sure what a drink should have
const drinkSchema = new Schema({
    name: { type: String, required: true, trim: true },
    public: { type: Boolean, required: true },
    rating: { type: Number, required: true },
    //recipe: { type: String, required: true }, // maybe need to change this
    // needed: recipe, tag, creator
}, {
    timestamps: true,
});

// module.exports = mongoose.model('Drink', drinkSchema);
var Drink = mongoose.model('Drink', drinkSchema);
export default Drink; 
