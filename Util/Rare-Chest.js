const mongo = require('./mongo')

const RareChestSchema = require('../Schemas/Rare-Chest-Schema')

const RareChestCache = {}


module.exports = (client) => {}

module.exports.addRareChest = async ( userId, rarechest) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await RareChestSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            rarechest,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      RareChestCache[`${userId}`] = result.rarechest

      return result.rarechest
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getRareChest = async (userId) => {
  const cachedValue = RareChestCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await RareChestSchema.findOne({
        userId,
      })

      let rarechest = 0
      if (result) {
        rarechest = result.rarechest
      } else {
       
        await new RareChestSchema({
         
          userId,
          rarechest,
        }).save()
      }

      RareChestCache[`${userId}`] = rarechest

      return rarechest
    } finally {
      mongoose.connection.close()
    }
  })
}


