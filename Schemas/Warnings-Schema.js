const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
  }

const WarningsUser = mongoose.Schema({
    userId: reqString,
    guildId: reqString,
    warnings: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('WarningsUser', WarningsUser)