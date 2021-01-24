const Discord = require('discord.js')
const RareChest = require('../../Util/Legendary-Chest')
const economy = require('../../Util/economy')

module.exports = {
  commands: ['buy-legendarychest', 'buy-lc'],
  cooldown: '10',
  expectedArgs: "[ Mention ]",
  description: "Shows the users current balance",
  callback: async (message, arguments) => {
    
    const args = arguments[1]

    const userId = message.author.id

    const coins = await economy.getCoins(userId)

    const costrarechest = 3250

    if(coins < costrarechest) {
        const embed = new Discord.MessageEmbed
        embed.setTitle(`❌ Error Generated`)
        embed.setColor('#060103')
        embed.setDescription(`You do not have enough keys to buy a legendary chest. You need ${costrarechest - coins} more keys`)
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
        const common = await RareChest.addLegendaryChest(
            userId,
            chesttogive,            
        )

        const currecommon = await RareChest.getLegendaryChest(userId)

        const embed = new Discord.MessageEmbed
        embed.setTitle(`Succesfully purchased Legendary Chest`)
        embed.setColor('#060103')
        embed.setDescription(`${message.author} has successfully purchased a legendary chest and have ${currecommon} legendary chests.`)
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