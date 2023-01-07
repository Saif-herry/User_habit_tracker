const express = require("express");
const HabitModal = require("../models/Habits.model");



const habitController = express.Router();

habitController.post("/create",async(req,res)=>{
    // const {habit,userId} = req.body
    const new_habit =await HabitModal.create(req.body)
    new_habit.save();
    res.send({"message":"new habit created",new_habit})
})

habitController.get("/",async(req,res)=>{
    const habit = await HabitModal.find().populate("userId");
    res.send(habit)
})


module.exports = habitController