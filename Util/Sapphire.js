const mongo = require('./mongo')

const SapphireSchema = require('../Schemas/Sapphire')

const SapphireCache = {}


module.exports = (client) => {}

module.exports.addSapphireChest = async ( userId, sapphire) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await SapphireSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            sapphire,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      SapphireCache[`${userId}`] = result.sapphire

      return result.sapphire
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getSapphireChest = async (userId) => {
  const cachedValue = SapphireCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await SapphireSchema.findOne({
        userId,
      })

      let sapphire = 0
      if (result) {
        sapphire = result.sapphire
      } else {
       
        await new SapphireSchema({
         
          userId,
          sapphire,
        }).save()
      }

      SapphireCache[`${userId}`] = sapphire

      return sapphire
    } finally {
      mongoose.connection.close()
    }
  })
}


