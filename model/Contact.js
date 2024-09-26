const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    address:{type:String,required:true}
})

module.exports = mongoose.model('contact',contactSchema)

