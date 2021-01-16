const mongoose = require('mongoose')
const validator = require('validator')

const contactSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid Email")
            }
        }
    },
    contact:{
        type:String,
        required:true,        
    },
    city:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    },
},
)

const Contact = mongoose.model('Contact',contactSchema)

module.exports = Contact