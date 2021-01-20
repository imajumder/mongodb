const mongoose = require('mongoose')
const  mongoPath = 'mongodb+srv://Hthere:I2emmWGteM8kpm5s@cluster0.epybr.mongodb.net/Cluster0?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
