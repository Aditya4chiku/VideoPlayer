const express=require('express');
const userRoute=express.Router();
const UserModel=require('../model/user.Model')

userRoute.get('/register',(req,res)=>{
    res.send("I am get");
})


userRoute.post('/login',(req,res)=>{
  if(req.body || req.body.length <=0)
  {
      res.send("vj")
      
  }
        let user=new UserModel({
           username:req.body.username,
           password:req.res.password
   })



user.save().then(data=>{
    res.send(data)
},err=>{
    res.send(err)
}).catch((err)=>{
    res.send(err)
})
})

module.exports=userRoute;