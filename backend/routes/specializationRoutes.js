const express = require('express')
const router = express.Router();

const {
    get,
    set,
    update,
    destroy
} = require('../controllers/specializationController')

router.route('/').get(get).post(set)
router.route('/:id').delete(destroy).put(update)

module.exports = router;
