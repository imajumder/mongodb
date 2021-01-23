const mongo = require('./mongo')

const LegendaryChestSchema = require('../Schemas/Legendary-Chest-Schema')

const LegendaryChestCache = {}


module.exports = (client) => {}

module.exports.addLegendaryChest = async ( userId, legendarychest) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await LegendaryChestSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            legendarychest,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      LegendaryChestCache[`${userId}`] = result.legendarychest

      return result.legendarychest
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getLegendaryChest = async (userId) => {
  const cachedValue = LegendaryChestCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await LegendaryChestSchema.findOne({
        userId,
      })

      let legendarychest = 0
      if (result) {
        legendarychest = result.legendarychest
      } else {
       
        await new LegendaryChestSchema({
         
          userId,
          legendarychest,
        }).save()
      }

      LegendaryChestCache[`${userId}`] = legendarychest

      return legendarychest
    } finally {
      mongoose.connection.close()
    }
  })
}


