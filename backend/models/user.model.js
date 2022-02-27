// taken from https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;

// var Schema = mongoose.Schema;
// var SALT_WORK_FACTOR = 10;
     
var UserSchema = new Schema({

    // ObjectId: special type for unique identifiers (made of 24-character hexa String), use that instead of int / Number type
    userID: Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true, minlength: 4, trim: true },
    password: { type: String, required: true, minlength: 8 },
    email: { type: String, required: true, unique: true },
    isAdmin : { type: Boolean, default: false }
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

// module.exports = mongoose.model('User', UserSchema);
var User = mongoose.model('User', UserSchema);
// export default User;
module.exports = User;
