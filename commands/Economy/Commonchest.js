const Discord = require('discord.js')
const commonChest = require('../../Util/Common-Chest')
const economy = require('../../Util/economy')

module.exports = {
  commands: ['buy-commonchest', 'buy-cc'],
  cooldown: '10',
  expectedArgs: "[ Mention ]",
  description: "Shows the users current balance",
  callback: async (message, arguments) => {
    
    const args = arguments[1]

    const userId = message.author.id

    const coins = await economy.getCoins(userId)

    const costcommonchest = 750

    if(coins < costcommonchest) {
        const embed = new Discord.MessageEmbed
        embed.setTitle(`❌ Error Generated`)
        embed.setColor('#060103')
        embed.setDescription(`You do not have enough keys to buy a common chest. You need ${costcommonchest - coins} more keys`)
        embed.setFooter(`Generated for ${message.author.username}`)
        embed.setTimestamp()
        message.channel.send(embed)
    }

    else{

        const chesttogive = 1

        const remainingCoins = await economy.addCoins(
            userId,
            costcommonchest * -1
          )
        const common = await commonChest.addCommonChest(
            userId,
            chesttogive,            
        )

        const currecommon = await commonChest.getCommonChest(userId)

        const embed = new Discord.MessageEmbed
        embed.setTitle(`Succesfully purchased Common Chest`)
        embed.setColor('#060103')
        embed.setDescription(`${message.author} has successfully purchased a common chest and have ${currecommon} common chests.`)
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