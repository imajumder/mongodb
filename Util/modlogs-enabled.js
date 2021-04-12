const mongo = require('../Util/mongo')

const ModLogsEnabled = require('../Schemas/Mod-Logs-Schema')

const coinsCache = {} // { 'guildId-userId': coins }

module.exports = (client) => {}

module.exports.addCoins = async ( guildId, enabled) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await ModLogsEnabled.findOneAndUpdate(
        {
          
          guildId,
        },
        {
         
        guildId,
        enabled,
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      coinsCache[`${guildId}}`] = result.enabled

      return result.enabled
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getCoins = async (guildId) => {
  const cachedValue = coinsCache[`${guildId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await ModLogsEnabled.findOne({
        guildId,
      })

      let enabled = 0
      if (result) {
        enabled = result.enabled
      } else {
       
        await new ModLogsEnabled({
         
          guildId,
          enabled,
        }).save()
      }

      coinsCache[`${guildId}`] = enabled

      return enabled
    } finally {
      mongoose.connection.close()
    }
  })
}

