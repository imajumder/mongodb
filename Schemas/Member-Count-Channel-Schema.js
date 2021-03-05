const mongoose = require('mongoose')

const membercountchannel = mongoose.Schema({
    guildId: {
        type: String,
        required: true,
    },
    channelId: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Member-Count-Channel', membercountchannel)