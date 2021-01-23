const mongo = require('./mongo')

const EpicChestSchema = require('../Schemas/Epic-Chest-Schema')

const EpicChestCache = {}


module.exports = (client) => {}

module.exports.addEpicChest = async ( userId, epicchest) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await EpicChestSchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            epicchest,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      EpicChestCache[`${userId}`] = result.epicchest

      return result.epicchest
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getEpicChest = async (userId) => {
  const cachedValue = EpicChestCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await EpicChestSchema.findOne({
        userId,
      })

      let epicchest = 0
      if (result) {
        epicchest = result.epicchest
      } else {
       
        await new EpicChestSchema({
         
          userId,
          epicchest,
        }).save()
      }

      EpicChestCache[`${userId}`] = epicchest

      return epicchest
    } finally {
      mongoose.connection.close()
    }
  })
}


