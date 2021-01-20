const mongoose = require('mongoose')
const  mongoPath = 'mongodb+srv://Discordbot-Owner:BhXaZosCY6OYbHui@mongodb-discord.oejgy.mongodb.net/MongoDB-Discord?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.createConnection(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
