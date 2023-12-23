const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals)
})

// @desc Set goals
// @route POST api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400).json({message: 'error message'})
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).send(goal);
})

// @desc Update goals
// @route PUT api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findByIdAndUpdate('6554225af6ea1c1047914c5a', {
        text : "Updated Item"
    },{
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
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).send(`delete goals ${req.params.id}`);
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}