const express = require('express')
const router = express.Router();

const {
    getAppointments,
    setAppointment,
    destroy,
    update
} = require('../controllers/appointmentController')

router.route('/').get(getAppointments).post(setAppointment);
router.route('/:id').delete(destroy).put(update);

module.exports = router;