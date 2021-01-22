const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const shopSchema = mongoose.Schema({
  name: reqString,
    cost: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('shop', shopSchema)