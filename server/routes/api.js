const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Car = require('../models/cars')
const db = "mongodb+srv://admin:admin@mydata-lz0es.mongodb.net/myDB?retryWrites=true&w=majority"
mongoose.Promise = global.Promise
mongoose.connect(db, err => {
  if(err){
    console.error('error' + err)
  }
  else{
    console.log('connected to mdb')
  }
})

router.get('/cars',(req,res)=>{
console.log('Get Request for all cars')
Car.find({}).exec(function (err, cars) {
  if(err){
    console.log("error retriving cars")
  } else{
    res.json(cars)
  }
})
})

router.get('/cars/:id',(req,res)=>{
  console.log('Get Request for single cars')
  Car.findById(req.params.id).exec(function (err, car) {
    if(err){
      console.log("error retriving cars")
    } else{
      res.json(car)
    }
  })
  })

router.post('/car', function(req,res, next) {
  console.log('Post a new Car');
  var newCar = new Car();
  newCar.carBrand = req.body.carBrand;
  newCar.cmodel = req.body.cmodel;
  newCar.modelYear = req.body.modelYear;
  newCar.desc = req.body.desc;
  newCar.type = req.body.type;
  newCar.save(function(err, insertedCar){
    if(err){
      console.log('error saving car');
    }
    else{
      res.json(insertedCar);
      console.log(insertedCar);
    }
  });
});

router.put('/car/:id', function (req,res) {
  console.log("update a car")
  Car.findByIdAndUpdate(req.params.id,
     {$set:{
      carBrand:req.body.carBrand,
      cmodel: req.body.cmodel,
      modelYear:req.body.modelYear,
      desc:req.body.desc,
      type:req.body.type
     }},
     {
      new: true
     },
    
      function (err, updatedCar) {
        if(err){
          res.send("error updating car")
        }
        else{
          res.json(updatedCar)
          console.log("updated car")
        }
  })
})

router.delete('/cars/:id', function(req, res){
  console.log('deleting a car')
  Car.findByIdAndRemove(req.params.id, function(err, deletedCar){
    if(err){
      res.send("error deleting car")
    }
    else{
      res.json(deletedCar)
    }
  })
})

router.get('/', (req, res)=> {
  res.send('From Api')
})

router.get('/users', (req, res)=> {
  console.log('get data')
User.find({}).exec(function(err, user) {
  if(err){
    console.log('error '+ err)
  }
  else{
    res.json(user)
  }
})
})

router.get('/user/:id', (req, res)=> {
  console.log('get data for single user')
User.findById(req.params.id).exec(function(err, user) {
  if(err){
    console.log('error '+ err)
  }
  else{
    res.json(user)
  }
})
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
