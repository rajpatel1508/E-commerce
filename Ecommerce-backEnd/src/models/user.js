const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    hash_password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    contactNumber: {
        type: String
    },
    profileicture: {
        type: String
    }
}, { timestamps: true });

//Hashing the passwords
userSchema.virtual('password').set(function (password) {
    this.hash_password = bcrypt.hashSync(password, 10);
});

//Get fullname 
userSchema.virtual('fullname').get(function () {
    return `${this.firstname} ${this.lastname}`;
})

//Methods definition on user Model :
// Authenticate User
userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model('User', userSchema);