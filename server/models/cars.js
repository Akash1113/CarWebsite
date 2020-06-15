const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const carSchema = new Schema({
    carBrand: String,
    cmodel: String,
    modelYear: String,
    desc: String,
    type: String,
    image: String
})

module.exports = mongoose.model('Car', carSchema, 'Cars')