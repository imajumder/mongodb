const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const RareChestSchema = mongoose.Schema({
 
  userId: reqString,
  rarechest: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Rare-Chest', RareChestSchema)