const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    message: {
        type: String
    },

    isRead : {
        type: Boolean,
        default : false
    },

    link : {
        type: String
    },

    recipientID : {
        type : String
    },

    notificationType: {
        type: String,
        enum: ['Success', 'Info', 'Danger', 'Primary']
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('Payment', paymentSchema);