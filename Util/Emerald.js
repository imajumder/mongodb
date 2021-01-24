const mongo = require('./mongo')

const EmeraldsSchema = require('../Schemas/Emeralds-Schema')

const EmeraldsCache = {}


module.exports = (client) => {}

module.exports.addEmeraldsChest = async ( userId, emeralds) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await EmeraldsSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            emeralds,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      EmeraldsCache[`${userId}`] = result.emeralds

      return result.emeralds
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getEmeraldsChest = async (userId) => {
  const cachedValue = EmeraldsCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await EmeraldsSchema.findOne({
        userId,
      })

      let emeralds = 0
      if (result) {
        emeralds = result.emeralds
      } else {
       
        await new EmeraldsSchema({
         
          userId,
          emeralds,
        }).save()
      }

      EmeraldsCache[`${userId}`] = emeralds

      return emeralds
    } finally {
      mongoose.connection.close()
    }
  })
}


