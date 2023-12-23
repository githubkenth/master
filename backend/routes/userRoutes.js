const express = require('express')
const router = express.Router();
const {
    getUsers,
    setUser,
    updateUser,
    deleteUser,
    authenticate
} = require('../controllers/userController')

router.route('/').get(getUsers).post(setUser)
router.route('/:id').delete(deleteUser).put(updateUser)
router.route('/authenticate').post(authenticate)

module.exports = router;