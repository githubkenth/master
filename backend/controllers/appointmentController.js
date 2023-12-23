const asyncHandler = require('express-async-handler')
const appointmentModel = require('../models/appointmentModel');
const makeId = require('../helpers/token');
const validEntityOnly = require('../helpers/validEntityOnly');

// @desc Get goals
// @route GET api/goals
// @access Private
const getAppointments = asyncHandler(async(req, res) => {
    let id = req.query.id ?? '';
    let appointments = [];

    if(id != '') {
        appointments = await appointmentModel.find({
            _id : '6579e34fa5b40f1627cca64c'
        });

        appointments = appointments[0] ?? false;
    } else {
        appointments = await appointmentModel.find();
    }
    res.status(200).json(appointments)
})

const setAppointment = asyncHandler(async(req, res) => {

    let appointmentObject = validEntityOnly({
        validEntities : [
            'guestName',
            'guestMobileNumber',
            'guestEmail',
            'appointmentDate',
            'notes',
            'status'
        ],
        objectData : req.body
    });

    if(!appointmentObject.hasOwnProperty('status')){
        appointmentObject['status'] = 'Reserved';
    }
    appointmentObject['appointmentReference'] = makeId(12);

    // console.log(appointmentObject);

    const appointmentResponse = await appointmentModel.create(appointmentObject)

    res.status(200).send([
        appointmentObject,
        appointmentResponse
    ]);
})

// @desc Update goals
// @route PUT api/goals
// @access Private
const update = asyncHandler(async (req, res) => {
    // let body = JSON.parse(req.body);
        const goal = await appointmentModel.findByIdAndUpdate(req.params.id, req.body,{
            new : true
        })
        
        res.status(200).send({
            message : `updated ${req.params.id}`,
            data : goal
        });
    }
)
// @desc Delete goals
// @route DELETE api/goals
// @access Private
const destroy = asyncHandler(async(req, res) => {
    const response = await appointmentModel.deleteOne({
        _id: req.params.id
    });
    res.status(200).send({
        message : 'deleted'
    });
})

module.exports = {
    getAppointments,
    setAppointment,
    update,
    destroy
}