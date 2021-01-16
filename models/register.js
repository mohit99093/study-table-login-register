const mongoose  = require('mongoose')
const validator = require('validator')

const registerSchema  = new mongoose.Schema({
    
    Type:{
        type    : String,
        required: true
    },
    class:{
        type: String,
        
    },
    subjects: [{type:String}],
    password: {
        type    : String,
        required: true
    },
    name:{
        type    : String,
        required: true
    },
    email:{
        type    : String,
        unique  : true,
        required: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid Email")
            }
        }
    },
    contact:{
        type    : String,
        required: true,
    },
    city:{
        type    : String,
        required: true
    },
    school:{
        type: String,
       
    },
    suitable_time_for_call:{
        type: String,
       
    }
   
},
)

const Register = mongoose.model('Register',registerSchema)

module.exports = Register