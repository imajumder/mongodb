const Discord = require('discord.js')
const RareChest = require('../../Util/Epic-Chest')
const economy = require('../../Util/economy')

module.exports = {
  commands: ['buy-epicchest', 'buy-ec'],
  cooldown: '10',
  expectedArgs: "[ Mention ]",
  description: "Shows the users current balance",
  callback: async (message, arguments) => {
    
    const args = arguments[1]

    const userId = message.author.id

    const coins = await economy.getCoins(userId)

    const costrarechest = 2200

    if(coins < costrarechest) {
        const embed = new Discord.MessageEmbed
        embed.setTitle(`❌ Error Generated`)
        embed.setColor('#060103')
        embed.setDescription(`You do not have enough keys to buy a epic chest. You need ${costrarechest - coins} more coins`)
        embed.setFooter(`Generated for ${message.author.username}`)
        embed.setTimestamp()
        message.channel.send(embed)
    }

    else{

        const chesttogive = 1

        const remainingCoins = await economy.addCoins(
            userId,
            costrarechest * -1
          )
        const common = await RareChest.addEpicChest(
            userId,
            chesttogive,            
        )

        const currecommon = await RareChest.getEpicChest(userId)

        const embed = new Discord.MessageEmbed
        embed.setTitle(`Succesfully purchased Epic Chest`)
        embed.setColor('#060103')
        embed.setDescription(`${message.author} has successfully purchased a epic chest and have ${currecommon} epic chests.`)
        embed.addFields({
            name: "Keys Owned Currently",
            value: `${remainingCoins}`,
        })
        embed.setFooter(`Generated for ${message.author.username}`)
        embed.setTimestamp()
        message.channel.send(embed)
    }

  }
}