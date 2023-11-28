const mongoose = require('mongoose')

 const userSchema = mongoose.Schema({
    firstName:String,
    LastName:String,
    Age:Number
 })
 const User = mongoose.model('User', userSchema)

 module.exports= User