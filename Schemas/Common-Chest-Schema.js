const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const CommonChestSchema = mongoose.Schema({
 
  userId: reqString,
  commonchest: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Common-Chest', CommonChestSchema)