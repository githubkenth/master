const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')
const makeId = require('../helpers/token')
const validEntityOnly = require('../helpers/validEntityOnly');

// @desc Get goals
// @route GET api/goals
// @access Private
const getUsers = asyncHandler(async (req, res) => {
    let id = req.query.id ?? '';
    if(id != '') {
        users = await userModel.find({
            _id: req.query.id
        });

        users = users[0] ?? false;
    } else {
        users = await userModel.find();
    }
    res.status(200).json(users)
})

// @desc Set goals
// @route POST api/goals
// @access Private
const setUser = asyncHandler(async (req, res) => {
    if(!req.body.firstname){
        res.status(400).json({message: 'error message'})
    }

    const goal = await userModel.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        userType: req.body.userType,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        password: req.body.password,
        userCode : makeId(12)
    })

    res.status(200).send(goal);
})

// @desc Update goals
// @route PUT api/goals
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    // let body = JSON.parse(req.body);
        const goal = await userModel.findByIdAndUpdate(req.params.id, req.body,{
            new : true
        })
        
        res.status(200).send({
            message : `update goals ${req.params.id}`,
            data : goal
        });
    }
)
// @desc Delete goals
// @route DELETE api/goals
// @access Private
const deleteUser = asyncHandler(async(req, res) => {
    let response = await userModel.deleteOne({
        _id : req.params.id
    });
    res.status(200).send({
        message : 'deleted successfully',
        success : true
    });
})

const authenticate = asyncHandler(async(req, res) => {
    let response = await userModel.find({
        email : req.body.email
    });

    if(!response) {
        res.status(200).send({
            message : ' no user found ',
            user : false
        })
    } else {
        let user = response[0];
        if(user.password != req.body.password) {
            res.status(200).send({
                message : ' password unmatched ',
                user : false
            })
        } else {
            res.status(200).send({
                message : ' user found ',
                user : user
            })
        }
    }
});

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser,
    authenticate
}