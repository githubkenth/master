const mongoose = require('mongoose');

const specializationSchema = mongoose.Schema({
    specializationCode : {
        type: String
    },

    specializationName : {
        type: String
    },

    specializationDescription : {
        type: String
    }
}, {
    timestamp : true
});

module.exports = mongoose.model('Specialization', specializationSchema);