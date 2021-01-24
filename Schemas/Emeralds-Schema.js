const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const EmeraldsSchema = mongoose.Schema({
 
  userId: reqString,
  emeralds: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Emeralds', EmeraldsSchema)