const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  email : String,
  password: String,
  fname: String,
  lname: String
})
module.exports = mongoose.model('user', userSchema, 'users')
