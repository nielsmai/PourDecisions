import mongoose from 'mongoose';

var Schema = mongoose.Schema;
// Equivalent of adding enum strings in Java
const listOfTag = ['Alcoholic', 'Mocktail', 'Custom', 'Classic'];

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

// module.exports = mongoose.model('Drink', drinkSchema);
var Drink = mongoose.model('Drink', drinkSchema);
export default Drink; 
