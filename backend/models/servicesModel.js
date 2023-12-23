const mongoose = require('mongoose');
const servicesSchema = mongoose.Schema({
    serviceCode : {
        type : String
    },

    serviceName : {
        type: String
    },

    serviceAmount : {
        type : String
    },

    serviceDescription : {
        type: String
    },

}, {
    timestamp : true
});

module.exports = mongoose.model('Service', servicesSchema);