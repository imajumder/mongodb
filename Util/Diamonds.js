const mongo = require('./mongo')

const DiamondsSchema = require('../Schemas/Diamonds-Schema')

const DiamondsCache = {}


module.exports = (client) => {}

module.exports.addDiamondsChest = async ( userId, diamonds) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await DiamondsSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            diamonds,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      DiamondsCache[`${userId}`] = result.diamonds

      return result.diamonds
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getDiamondsChest = async (userId) => {
  const cachedValue = DiamondsCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await DiamondsSchema.findOne({
        userId,
      })

      let diamonds = 0
      if (result) {
        diamonds = result.diamonds
      } else {
       
        await new DiamondsSchema({
         
          userId,
         diamonds,
        }).save()
      }

     DiamondsCache[`${userId}`] = diamonds

      return diamonds
    } finally {
      mongoose.connection.close()
    }
  })
}


