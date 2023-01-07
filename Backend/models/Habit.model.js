const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
    habit:{type:String,required:true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
})

const HabitModal = mongoose.model("habit",habitSchema)

module.exports = HabitModal