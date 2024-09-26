const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{timestamps:true})

module.exports = mongoose.model('user',userSchema)

