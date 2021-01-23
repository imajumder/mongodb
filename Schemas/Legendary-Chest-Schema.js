const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const LegendaryChestSchema = mongoose.Schema({
 
  userId: reqString,
  legendarychest: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Legendary-Chest', LegendaryChestSchema)