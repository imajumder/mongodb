const Discord = require('discord.js')
const RareChest = require('../../Util/Rare-Chest')
const economy = require('../../Util/economy')

module.exports = {
  commands: ['buy-rarechest', 'buy-rc'],
  cooldown: '10',
  expectedArgs: "[ Mention ]",
  description: "Shows the users current balance",
  callback: async (message, arguments) => {
    
    const args = arguments[0]

    const userId = message.author.id

    const coins = await economy.getCoins(userId)

    const costrarechest = 1700

    if(coins < costrarechest * args) {
        const embed = new Discord.MessageEmbed
        embed.setTitle(`❌ Error Generated`)
        embed.setColor('#060103')
        embed.setDescription(`You do not have enough keys to buy ${args} rare chest. You need ${costrarechest - coins} more keys`)
        embed.setFooter(`Generated for ${message.author.username}`)
        embed.setTimestamp()
        message.channel.send(embed)
    }
    if(!args) {
      const embed = new Discord.MessageEmbed
      embed.setTitle(`❌ Error Generated`)
        embed.setColor('#060103')
        embed.setDescription(`You did not specify an amount of chest to buy`)
        embed.setFooter(`Generated for ${message.author.username}`)
        embed.setTimestamp()
        message.channel.send(embed)
    }
    if(args === '0') {
      const embed = new Discord.MessageEmbed
      embed.setTitle(`❌ Error Generated`)
        embed.setColor('#060103')
        embed.setDescription(`0 is not an valid number try providing 1`)
        embed.setFooter(`Generated for ${message.author.username}`)
        embed.setTimestamp()
        message.channel.send(embed)
    }

    else{

      

        const remainingCoins = await economy.addCoins(
            userId,
            costrarechest * -1
          )
        const common = await RareChest.addRareChest(
            userId,
            args,            
        )

        const currecommon = await RareChest.getRareChest(userId)

        const embed = new Discord.MessageEmbed
        embed.setTitle(`Succesfully purchased Rare Chest`)
        embed.setColor('#060103')
        embed.setDescription(`${message.author} has successfully purchased a rare chest and have ${currecommon} rare chests.`)
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