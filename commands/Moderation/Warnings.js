const Discord = require('discord.js')

const warningscheck = require('../../Util/Warnings')

module.exports = {
    commands: 'warnings',

callback: async (message, arguments) => {

    let target = message.mentions.users.first() || message.author

    const userId = target.id

    const guildId = message.guild.id

    const warningsowned = await warningscheck.getWarnings(userId, guildId)

    if(!message.member.hasPermission('ADMINISTRATOR') || !message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('KICK_MEMBERS') || !message.member.hasPermission('BAN_MEMBERS')){
        const embed = new Discord.MessageEmbed
    embed.setTitle(`You do not have the required permissions to run this command`)
    embed.setColor('#060103')
    message.channel.send(embed)
    }

    const embed4 = new Discord.MessageEmbed
    embed4.setTitle(`${target.username} has ${warningsowned} warnings`)
    embed4.setColor('#060103')
    message.reply(embed4)

     }
}