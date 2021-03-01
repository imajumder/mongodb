const Discord = require('discord.js')

const warningscheck = require('../../Util/Warnings')

module.exports = {
    commands: 'warnings',

callback: async (message, arguments) => {

    let target = message.mentions.users.first() || message.author

    const userId = target.id

    const guildId = message.guild.id

    const warningsowned = await warningscheck.getWarnings(userId, guildId)

    const embed4 = new Discord.MessageEmbed
    embed4.setTitle(`${target.username} has ${warningsowned} warnings`)
    embed4.setColor('#060103')
    message.reply(embed4)

     }
}