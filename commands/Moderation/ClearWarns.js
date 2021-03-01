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

    if(!message.member.hasPermission('ADMINISTRATOR') || !message.member.hasPermission('MANAGE_GUILD')) {
        const embed = new Discord.MessageEmbed
    embed.setTitle(`You do not have the required permissions to run this command`)
    message.channel.send(embed)
    }

    const embed = new Discord.MessageEmbed
    embed.setTitle(`${target.username}'s Warnings have been reseted | They now have ${warningsreset} warnings`)
    message.channel.send(embed)
     },
    }