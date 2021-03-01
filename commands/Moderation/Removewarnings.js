const Discord = require('discord.js')

const warningscheck = require('../../Util/Warnings')

module.exports = {
    commands: 'removewarns',

callback: async (message, arguments) => {

    let target = message.mentions.users.first()

    const userId = target.id

    const guildId = message.guild.id

    const warningsowned = arguments[1]


    if (isNaN(warningsowned)) {
        const embed4 = new Discord.MessageEmbed
        embed4.setTitle(`You did not provide a valid number`)
        embed4.setColor('#060103')
        message.reply(embed4)
        return
      }

      if (warningsowned === 0) {
        const embed4 = new Discord.MessageEmbed
        embed4.setTitle(`0 is not an valid argument. Try some other number`)
        embed4.setColor('#060103')
        message.reply(embed4)
        return
      }

      if (warningsowned < 0) {
        const embed4 = new Discord.MessageEmbed
        embed4.setTitle(`Negative numbers are not allowed. Try some other number`)
        embed4.setColor('#060103')
        message.reply(embed4)
        return
      }

    const warnowned = await warningscheck.getWarnings(userId, guildId)

    if(warnowned < warningsowned) {
        const embed4 = new Discord.MessageEmbed
        embed4.setTitle(`${target.username} have only ${warnowned} warnings. You cannot remove ${warningsowned} warnings from them`)
        embed4.setColor('#060103')
        message.reply(embed4)
        return
    }

    const warningsreset = await warningscheck.addWarnings(userId, guildId, warningsowned * -1)


    const embed = new Discord.MessageEmbed
    embed.setTitle(`${warningsowned} warnings have been removed | ${target.username} now have ${warnowned - warningsowned} warnings`)
    message.channel.send(embed)
     },
     permissions: 'ADMINISTRATOR',
}