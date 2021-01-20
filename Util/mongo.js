const mongoose = require('mongoose')
const  mongoPath = 'mongodb+srv://HIthere:NFAT4a1tIGbSpuAU@cluster0.c037a.mongodb.net/Cluster0?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
