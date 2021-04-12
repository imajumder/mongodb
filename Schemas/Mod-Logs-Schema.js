const mongoose = require('mongoose')

const ModLogsSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true,
    },
    enabled : {
        type: Number,
        required : true,
        default: 0
    }
})

module.exports = mongoose.model('ModLogsEnabled', ModLogsSchema)