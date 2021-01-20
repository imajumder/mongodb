const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const welcomeSchema = mongoose.Schema({
  _id: reqString,
  channelId: reqString,
  text: reqString,
})

const con = mongoose.createConnection(process.env.MONGODB_URI);
con.model('welcome-channels', welcomeSchema);

module.exports = con;