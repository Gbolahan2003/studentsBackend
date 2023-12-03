const mongoose= require('mongoose')

const studentschema = mongoose.Schema({
    FirstName:{
        type: String,
        required:[true, 'A student must have a first name'],
        
    },
    LastName:{
        type: String,
        required:[true, 'A student must have a Last name'],
        
    },
    phoneNumber:{
        type:Number, required:[true, 'A student must have a phone number'],
        trim:true,
        unique:true,
        maxlength:[11, 'Phone number must have only 11 numbers'],
        minlength:[11, 'Phone number must have only 11 numbers']
    },
    Email:{
        type: String,
        required:[true, 'A student must have an email']
    },
    createdAT:{
        type:Date,
        default:Date.now(),
        select:false
    }
    

} , {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })
const student = mongoose.model('Student',studentschema )
module.exports= student