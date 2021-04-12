const mongoose = require('mongoose')

const NickNameSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('NickNameSchema', NickNameSchema)