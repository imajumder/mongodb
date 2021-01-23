const Discord = require('discord.js')
const { discriminator } = require('../../Schemas/Daily-Rewards-Schema')
const dailyRewardsSchema = require('../../Schemas/Daily-Rewards-Schema')
const economy = require('../../Util/economy')
const Humanize = require('humanize-duration')
const mongo = require('../../Util/mongo')
const Balance = require('./Balance')
module.exports = {
  commands: ['daily'],
  expectedArgs: "[ Mention ]",
  description: "Shows the users current balance",
  callback: async (message) => {
      
    
let claimedCache = []


const clearCache = () => {
  claimedCache = []
  setTimeout(clearCache, 1000 * 60 * 10) // 10 minutes
}
clearCache()



const embed2 = new Discord.MessageEmbed
embed2.setTitle(`❌ Rewards Already Claimed`)
embed2.setColor('#060103')
embed2.setDescription(` You cannot claim your daily rewards just yet. The daily rewards refreshed after 24 hours so try collecting after that`)
embed2.setFooter(`Generated For ${message.author.username}`)
embed2.setTimestamp()

const { guild, member } = message
const { id } = member

if (claimedCache.includes(id)) {
 
  message.reply(embed2)
  return
}



const obj = {
  guildId: guild.id,
  userId: id,
}

await mongo().then(async (mongoose) => {
  try {
    const results = await dailyRewardsSchema.findOne(obj)


    if (results) {
      const then = new Date(results.updatedAt).getTime()
      const now = new Date().getTime()

      const diffTime = Math.abs(now - then)
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays <= 1) {
        claimedCache.push(id)

        message.reply(embed2)
        return
      }
    }

    await dailyRewardsSchema.findOneAndUpdate(obj, obj, {
      upsert: true,
    })

    claimedCache.push(id)

    const coinsToGive = 350

    const guildId = message.guild.id
    const userId = message.author.id

    const newBalance = await economy.addCoins(guildId, userId, coinsToGive)

    // TODO: Give the rewards
    const embed1 = new Discord.MessageEmbed
    embed1.setTitle(`${message.author.username}'s balance`)
    embed1.setColor(`#060103`)
    embed1.setDescription(`Daily Reward Claimed`)
    embed1.addFields({
        name: "Keys Owned Currently",
        value: `${newBalance}`
    })
    embed1.setFooter(`Generated For ${message.author.username}`)
    embed1.setTimestamp()
    message.channel.send(embed1)
  } finally {
    mongoose.connection.close()
  }
})
}
}