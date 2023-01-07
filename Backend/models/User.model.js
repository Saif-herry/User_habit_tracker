const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true},
    name:{type:String,require:false},
    age:{type:Number,require:false},
    phone:{type:Number,require:false},
})

const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel