const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userCode  : {
        type : String,
        required: true
    },

    firstname : {
        type: String,
        required : true
    },

    lastname : {
        type: String,
        required : true
    },

    gender : {
        type : String,
        enun : ['Male', 'Female'],
        required: true
    },

    userType : {
        type : String,
        enum : ['ADMIN', 'PATIENT', 'STAFF'],
        required : true
    },

    email : {
        type: String,
        required : true
    },

    mobileNumber : String,
    password : {
        type: String,
        required: true
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('User', userSchema);