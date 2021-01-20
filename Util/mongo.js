const mongoose = require('mongoose')
const  mongoPath = 'mongodb+srv://Discordbot-Owner:BhXaZosCY6OYbHui@mongodb-discord.oejgy.mongodb.net/MongoDB-Discord?retryWrites=true'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
