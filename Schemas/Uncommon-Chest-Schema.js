const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const UncommonChestSchema = mongoose.Schema({
 
  userId: reqString,
  uncommonchest: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Uncommon-Chest', UncommonChestSchema)