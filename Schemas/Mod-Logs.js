const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true,
  }
  
  const ModlogsChannel = mongoose.Schema({
   
    guildId: reqString,
    channelId: reqString,
    
  })
  
  module.exports = mongoose.model('ModlogsChannel', ModlogsChannel)