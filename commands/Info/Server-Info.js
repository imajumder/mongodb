const Discord = require('discord.js')

module.exports = {
    commands: ['server-info'],
    description: "Server Info",
    callback: async (message) => {


        const textc = message.guild.channels.cache.size

        let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
            if (rolemap.length > 1000) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";

        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        }
        const embed = new Discord.MessageEmbed
        embed.setTitle(`${message.guild.name}`)
        embed.setThumbnail(message.guild.icon)
        embed.setThumbnail(message.guild.iconURL())
        embed.setColor("RANDOM")
        embed.addFields({
            name: `Owner`, value: `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, inline: true
        },
        {
            name: `Region`, value: `${message.guild.region}`, inline: true,
        },
        {
            name: `Created On`, value: `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, inline: true,
        },
        {
            name: `Members `, value: `${message.guild.memberCount} Users`, inline: true,
        },
        {
            name: `Bots`, value: `${message.guild.members.cache.filter(member => member.user.bot).size} Bots`, inline: true,
        },
        {
            name: `No. of Roles`, value: `${message.guild.roles.cache.size} Roles`,inline: true,
        },
        {
            name: `Channels`, value: `${textc} Channels`, inline: true,
        },
        {
            name: `Verification Level`, value: `${message.guild.verificationLevel}`, inline: true,
        },
        {
            name: `Emojis`, value: `${message.guild.emojis.cache.size} External Emojis`, inline: true,
        },
        {
            name: `Roles List`, value: `${rolemap}`
        }
        )
        embed.setFooter(`Generated For ${message.author.username}`)
      embed.setTimestamp()
        message.channel.send(embed)
    }
}