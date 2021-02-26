const Discord = require('discord.js')

module.exports = {
    commands: ['channel-info'],
    description: "Server Info",
    callback: async (message) => {


        const  channelembed = new Discord.MessageEmbed

            channelembed.setTitle(`Channel Information for ${message.channel.name}`)

            channelembed.setThumbnail(message.guild.iconURL())
        
            channelembed.addField("**Channel ID**", message.channel.id, true)
            channelembed.addField("**Channel Type**", message.channel.type)
            channelembed.addField("**Channel Description**", `${message.channel.topic || "No Description"}`)
            channelembed.addField("**Channel Created At**", message.channel.createdAt)
            channelembed.addField("** is NSFW**", message.channel.nsfw, true)
            channelembed.setColor("RANDOM")
            channelembed.setFooter(`Generated For ${message.author.username}`)
            channelembed.setTimestamp()

        message.channel.send(channelembed);

    }
}