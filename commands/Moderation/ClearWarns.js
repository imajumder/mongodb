const Discord = require('discord.js')

const warningscheck = require('../../Util/Warnings')

module.exports = {
    commands: 'clearwarns',

callback: async (message, arguments) => {

    let target = message.mentions.users.first() 

    const userId = target.id

    const guildId = message.guild.id

    const warningsowned = await warningscheck.getWarnings(userId, guildId)

    const warningsreset = await warningscheck.addWarnings(userId, guildId, 
        warningsowned * -1)

    const embed = new Discord.MessageEmbed
    embed.setTitle(`${target.username}'s Warnings have been reseted | They now have ${warningsreset} warnings`)
    message.channel.send(embed)
     },
     permissions: 'ADMINISTRATOR',
}