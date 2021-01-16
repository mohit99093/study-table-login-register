const Contact = require('../models/contact')
const Email = require('../models/emails')
const Register = require('../models/register')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const use = require('../utils/emails')

//contact
exports.postContact = async (req,res)=>{
       const contact = new Contact(req.body)
       try{
          await contact.save()
          res.json({status:201,message:'Thank you for taking interest in us. Our Team will have coffee with you soon !!'})
       }
       catch(e){          
          res.json({status:401,message:e.message})
       }
}
exports.postEmail = async (req,res)=>{
   const email = new Email(req.body)
   try{
      await email.save()
      res.json({status:201,message:'We got your email. Will update you soon !!'})
   }
   catch(e){          
      res.json({status:401,message:e.message})
   }
}
exports.postRegister = async (req,res)=>{
   console.log(req.body);
  
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password,salt) 
   const register = new Register({...req.body, password:hashedPassword})
   console.log(register);
   try{
      await register.save()
      res.json({status:201,message:'Thank you for taking interest in us. Our Team will have coffee with you soon !!'})
   }
   catch(e){          
      res.json({status:401,message:e.message})
   }
}
exports.signin=async(req,res)=>{
   const user = await Register.findOne({email:req.body.email})
   if(!user)
   return  res.json({status:401,message:"Not Found"})

   const validPass = await bcrypt.compare(req.body.password,user.password)
   if(!validPass) 
   return res.json({status:401,message:"Incorrect password"})

   let token = jwt.sign({email:req.body.email,userId:user._id},'studyTable',{expiresIn:'2h'})
   console.log(user);
   console.log(token);
   return res.json({status:201,idToken:token,userId:user._id,userName:user.name})
}

exports.sendOTP=async(req,res)=>{
   const email = req.body.email
   try{
      const user = await Register.findOne({}).where({email:email})
      if(!user)
      return res.json({status:401,message:"Not registered! Please register first!"})
      const otp = Math.floor((Math.random()*1000000)%10000000);
   const subject = "OTP for password change";
   const text = `Hi ${user.name}, your OTP for changing password is ${otp}`;
   use.sentMail(email,subject,text);
   return res.json({status:201,otp:otp,message:'OTP is send to your email address'})
   }
   catch(e){
      res.json({status:401,message:e.message})
   }
}

exports.changePassword = async(req,res)=>{
   
   const user = await Register.findOne({email:req.body.email})
   if(!user)
   return  res.json({status:401,message:"User Not Found"})

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.newPassword,salt) 
  
   try{
      await  Register.updateOne({ email: req.body.email }, { $set: { password: hashedPassword } });
      res.json({status:201,message:'Password updated'})
   }
   catch(e){          
      res.json({status:401,message:e.message})
   }
}