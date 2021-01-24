const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const DiamondsSchema = mongoose.Schema({
 
  userId: reqString,
  diamonds: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Diamonds', DiamondsSchema)