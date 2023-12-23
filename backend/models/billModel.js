const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    billReference : {
        type: String,
        required: true
    },

    billName : {
        type: String,
    },

    billedToID : {
        type : String
    },

    customerDetails : {
        name: String,
        email : String,
        mobileNumber : String
    },

    billAmount : {
        type : Number,
        required : true
    },

    billNetAmount : {
        type : Number,
        required : true
    },

    billItems : {
        type: Array,
    },

    remarks : {
        type: String
    },

    status: {
        type : String,
        enum : ['Unpaid', 'Paid', 'Cancelled']
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('Appointment', paymentSchema);