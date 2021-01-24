const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const RubySchema = mongoose.Schema({
 
  userId: reqString,
  ruby: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Ruby', RubySchema)