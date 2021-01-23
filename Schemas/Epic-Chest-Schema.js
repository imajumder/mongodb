const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const EpicChestSchema = mongoose.Schema({
 
  userId: reqString,
  epicchest: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Epic-Chest', EpicChestSchema)