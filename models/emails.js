const mongoose = require('mongoose')
const validator = require('validator')

const emailSchema  = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid Email")
            }
        }
    },
}
)

const Email = mongoose.model('Email',emailSchema)

module.exports = Email