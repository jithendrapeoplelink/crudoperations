const mongoose = require('mongoose')
var validator = require('validator');

const Employee = mongoose.model('employee',{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error("Email is invalid")
        }

    },
    Mobile: {
        type: Number,
       minlength: 8
        // validate(value){
        //     if(value<0)
        //     throw new Error('Age must be +ve number')

        }
        
    }
)

// const userobj = new employee({name:'shadow',location:'Nuzvid',email:'jhjkhjsfs@ghd.com  ',Mobile: 6788478941})

// userobj.save().then(()=>
// console.log(userobj)
// )

module.exports = Employee