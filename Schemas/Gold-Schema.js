const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const GoldSchema = mongoose.Schema({
 
  userId: reqString,
  gold: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Gold', GoldSchema)