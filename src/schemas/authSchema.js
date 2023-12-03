const { default: mongoose } = require('mongoose')
const mongose= require('mongoose')

const StudentAuthSchema= mongoose.Schema({

    FullName:{
        type: String,
        required:[true, 'A student must have a Last name'],
        
    },
    userName:{
        type: String,
        required:[true, 'A student must have a user name'],
        min:4,
        max:11
        
    },
    Department:{
        type:String,
        required:[true, ' A user must have a department']
    },
    password:{
        type:String,
        required:[true, 'A user must have a password'],
        min:6,
        max:1024
    }
    ,
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
    
})
const StudentAuth = mongoose.model('StudentAuth', StudentAuthSchema)
module.exports=StudentAuth