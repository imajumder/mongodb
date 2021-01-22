const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const shopSchema = mongoose.Schema({
  userId: reqString,
  itemid: reqString,
    amount: {
        type: Number,
        required: true,
        'default': 0,
    },
})

module.exports = mongoose.model('shop', shopSchema)