const mongo = require('./mongo')

const GoldSchema = require('../Schemas/Gold-Schema')

const GoldCache = {}


module.exports = (client) => {}

module.exports.addGoldChest = async ( userId, gold) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await GoldSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            gold,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      GoldCache[`${userId}`] = result.gold

      return result.gold
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getGoldChest = async (userId) => {
  const cachedValue = GoldCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await GoldSchema.findOne({
        userId,
      })

      let gold = 0
      if (result) {
        gold = result.gold
      } else {
       
        await new GoldSchema({
         
          userId,
          gold,
        }).save()
      }

      GoldCache[`${userId}`] = gold

      return gold
    } finally {
      mongoose.connection.close()
    }
  })
}


