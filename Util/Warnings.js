const mongo = require('../Util/mongo')
const profileSchema = require('../Schemas/Warnings-Schema')

const coinsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => {}

module.exports.addWarnings = async ( userId, guildId, warnings) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await profileSchema.findOneAndUpdate(
        {
          
          userId,
          guildId
        },
        {
         
          userId,
          guildId,
          $inc: {
            warnings,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      coinsCache[`${userId, guildId}`] = result.warnings

      return result.warnings
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getWarnings = async (userId, guildId) => {
  const cachedValue = coinsCache[`${userId, guildId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await profileSchema.findOne({
        userId,
        guildId,
      })

      let warnings = 0
      if (result) {
        warnings = result.warnings
      } else {
       
        await new profileSchema({
         
          userId,
          guildId,
          warnings,
        }).save()
      }

      coinsCache[`${userId, guildId}`] = warnings

      return warnings
    } finally {
      mongoose.connection.close()
    }
  })
}

