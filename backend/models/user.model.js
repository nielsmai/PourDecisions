// taken from https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;

const {drinkSchema} = require('./drink.model');

var UserSchema = new Schema({

    // ObjectId: special type for unique identifiers (made of 24-character hexa String), use that instead of int / Number type
    username: { type: String, required: true, unique: true, minlength: 4, trim: true },
    password: { type: String, required: true, minlength: 8 },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    favourites: {type: [ drinkSchema ], default: []}
},{
    timestamps: true
});
     
// Taken from https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
// password hashing 
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();


    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });


});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    const currentPassword = this.password;
    bcrypt.compare(candidatePassword, currentPassword, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
    
};

UserSchema.statics.encrypt = function(password, cb) {
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return cb(err);
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) return cb(err);
            cb(null, hash);
        });
    });
}

var User = mongoose.model('User', UserSchema);
module.exports = User;
