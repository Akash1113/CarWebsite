const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const db = "mongodb+srv://admin:admin@mydata-lz0es.mongodb.net/myDB?retryWrites=true&w=majority"
mongoose.connect(db, err => {
  if(err){
    console.error('error' + err)
  }
  else{
    console.log('connected to mdb')
  }
})

router.get('/', (req, res)=> {
  res.send('From Api')
})

router.post('/register', (req, res)=>{
  let userData = req.body
  let user = new User(userData)
  user.save((error, registerUser) => {
    if (error){
      console.log(error)
    } else{
     let payload = { subject: registerUser._id} 
     let token = jwt.sign(payload, 'SecretKey')
     res.status(200).send({token})
    }
  })
})

router.post('/login', (req,res) => {
let userData = req.body
User.findOne({email: userData.email}, (error,user) =>{
if(error){
  console.log(error)
}
else{
  if(!user){
    res.status(401).send('invalid email')
  } else{
    if(user.password !== userData.password){
      res.status(401).send('Invalid Password')
    }
    else{
      let payload = { subject: user._id}
      let token = jwt.sign(payload, "secretKey")
      res.status(200).send({token})
    }
  }
}
})
})
module.exports = router
