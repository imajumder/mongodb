const mongoose = require('mongoose')
const  mongoPath = 'mongodb+srv://Discordbot-Owner:BhXaZosCY6OYbHui@mongodb-discord.oejgy.mongodb.net/MongoDB-Discord?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: false,
    useUnifiedTopology: false,
  })
  return mongoose
}
