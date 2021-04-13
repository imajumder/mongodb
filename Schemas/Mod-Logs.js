const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true,
  }
  
  const ModlogsChannel = mongoose.Schema({
   
    guildId: reqString,
    channelId: {
      type: String,
      required: true,
      default: 'none'
    }
    
  })
  
  module.exports = mongoose.model('ModlogsChannel', ModlogsChannel)