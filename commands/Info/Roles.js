const Discord = require('discord.js')

module.exports = {
    commands: ['roles'],
    description: "Server Info",
    callback: async (message) => {

        let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
            if (!rolemap) rolemap = "No roles";

            const embed = new Discord.MessageEmbed
            embed.setTitle(`Roles of ${message.guild.name}`)
            embed.setThumbnail(message.guild.iconURL())
            embed.setColor(`RANDOM`)
            embed.addField(`Roles [${message.guild.roles.cache.size}]`, `${rolemap}`, true)

        message.channel.send(embed)
    }
}