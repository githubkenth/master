const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
    doctorID : {
        type: String,
        required : true
    },

    guestID : {
        type: String,
        required : true
    },

    doctorDetails : {
        name : String,
        profile : String,
        gender : String,
        mobileNumber : String
        
    },

    userDetails : {
        name : String,
        profile : String,
        gender : String,
        mobileNumber : String
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

    password : {
        type: String,
        required: true
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('Session', sessionSchema);