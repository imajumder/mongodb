const { MessageEmbed } = require("discord.js");

module.exports = {
commands: 'role-info',
      
    callback: async (message, arguments) => {

        const embed = new MessageEmbed
        embed.setTitle(`❌ Error Generated`)
       embed.setDescription(`Please mention a role`)
        embed.setColor(`#060103`)
        embed.setFooter(`Generated for ${message.author.username}`)

        const embed1 = new MessageEmbed()
        embed1.setTitle(`❌ Error Generated`)
        embed1.setDescription(`Not a valid Role`)
        embed1.setColor(`#060103`)
        embed1.setFooter(`Generated for ${message.author.username}`)

        if (!arguments[0]) return message.channel.send(embed)
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send(embed1);

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor("#060103")
            .setAuthor(`Role Info About ${arguments[0]}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Name**", role.name, true)
            .addField("**Members**", role.members.size, true)
            .addField("**Hex Color**", role.hexColor, true)
            
            .addField("**Mentionable**", status[role.mentionable], true)
           
            .addField("**Position**", role.position, true)
           
            .setFooter(`Generated For ${message.author.username} | Role Created At`)
            .setTimestamp(`${role.createdAt}`)

        message.channel.send(roleembed);
    }
}