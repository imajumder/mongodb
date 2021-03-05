const Discord = require('discord.js')

const language = require('../../Language')


module.exports = {
    commands: ['channel-info'],
    description: "Server Info",
    callback: async (message) => {

        const { guild } = message

        const  channelembed = new Discord.MessageEmbed

            channelembed.setTitle(`${language(guild, 'CHANNEL_INFO1')} \`\`\`${message.channel.name}\`\`\``)

            channelembed.setThumbnail(message.guild.iconURL())

            const trues = {
                false : `${language(guild, 'CHANNEL_INFO9')}`,
                true : `${language(guild, 'CHANNEL_INFO10')}`
            }            
        
            channelembed.addField(`**${language(guild, 'CHANNEL_INFO2')}**`, message.channel.id, true)
            channelembed.addField(`**${language(guild, 'CHANNEL_INFO3')}**`, `${language(guild, 'CHANNEL_INFO8')}`)
            channelembed.addField(`**${language(guild, 'CHANNEL_INFO4')}**`, `${message.channel.topic || `${language(guild, 'CHANNEL_INFO5')} `}`)
            channelembed.addField(`**${language(guild, 'CHANNEL_INFO6')}**`, message.channel.createdAt)
            channelembed.addField(`**${language(guild, 'CHANNEL_INFO7')}**`, `${trues[message.channel.nsfw]}`, true)
            channelembed.setColor("#060103")
            channelembed.setFooter(`${language(guild, 'GENERATEDFOR')} ${message.author.username}`)
            channelembed.setTimestamp()

        message.channel.send(channelembed);

    }
}