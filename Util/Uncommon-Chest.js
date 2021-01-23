const mongo = require('./mongo')

const UncommonChestSchema = require('../Schemas/Uncommon-Chest-Schema')

const UncommonChestCache = {}


module.exports = (client) => {}

module.exports.addUncommonChest = async ( userId, uncommonchest) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await UncommonChestSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            uncommonchest,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      UncommonChestCache[`${userId}`] = result.uncommonchest

      return result.uncommonchest
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getUncommonChest = async (userId) => {
  const cachedValue = UncommonChestCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await UncommonChestSchema.findOne({
        userId,
      })

      let uncommonchest = 0
      if (result) {
        uncommonchest = result.uncommonchest
      } else {
       
        await new UncommonChestSchema({
         
          userId,
          uncommonchest,
        }).save()
      }

      UncommonChestCache[`${userId}`] = uncommonchest

      return uncommonchest
    } finally {
      mongoose.connection.close()
    }
  })
}


