const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const SapphireSchema = mongoose.Schema({
 
  userId: reqString,
  sapphire: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Sapphire', SapphireSchema)