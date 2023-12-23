const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    appointmentReference : {
        type: String,
        required: true
    },

    guestName : {
        type: String,
        required: true
    },

    guestEmail : {
        type : String,
    },

    guestMobileNumber : {
        type: String,
        required: true
    },

    appointmentDate : {
        type: String,
        required : true
    },
    
    notes : {
        type: String,
    },

    remarks : {
        type: String
    },

    status: {
        type : String,
        enum : ['Reserved', 'Arrived', 'Cancelled'],
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('Appointment', appointmentSchema);