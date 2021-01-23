const mongo = require('./mongo')

const CommonChestSchema = require('../Schemas/Common-Chest-Schema')

const CommonChestCache = {}


module.exports = (client) => {}

module.exports.addCommonChest = async ( userId, commonchest) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await CommonChestSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            commonchest,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      CommonChestCache[`${userId}`] = result.commonchest

      return result.commonchest
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getCommonChest = async (userId) => {
  const cachedValue = CommonChestCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await CommonChestSchema.findOne({
        userId,
      })

      let commonchest = 0
      if (result) {
        commonchest = result.commonchest
      } else {
       
        await new CommonChestSchema({
         
          userId,
          commonchest,
        }).save()
      }

      CommonChestCache[`${userId}`] = commonchest

      return commonchest
    } finally {
      mongoose.connection.close()
    }
  })
}


