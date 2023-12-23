const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    paymentReference : {
        type: String,
        required : true
    },

    payerID : {
        type: String,
        required : true
    },

    billID : {
        type: String,
        required : true
    },

    paymentAmount : {
        type : Number,
        required : true
    },

    paymentExternalReference : {
        type : String,
        required : true
    },

    organization : {
        type: String,
        required: true
    },

    payerDetails : {
        name : String,
        email : String,
        mobileNumber : String
    },

    billDetails : {
        totalAmount : Number,
        billItems : Array,
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('Payment', paymentSchema);