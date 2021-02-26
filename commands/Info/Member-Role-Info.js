const { MessageEmbed } = require('discord.js');

module.exports = {
 
 commands: "role-members",
     
callback: async (message, arguments) => {

    const embed = new MessageEmbed
    embed.setTitle(`❌ Error Generated`)
    embed.setDescription(`Please enter any other role except "@here"`)
    embed.setColor(`#060103`)
    embed.setFooter(`Generated for ${message.author.username}`)
    embed.setTimestamp()

    const embed1 = new MessageEmbed
    embed1.setTitle(`❌ Error Generated`)
    embed1.setDescription(`Please enter any other role except "@everyone"`)
    embed1.setColor(`#060103`)
    embed1.setFooter(`Generated for ${message.author.username}`)
    embed1.setTimestamp()


    const embed2 = new MessageEmbed
    embed2.setTitle(`❌ Error Generated`)
    embed2.setDescription(`Please enter a role`)
    embed2.setColor(`#060103`)
    embed2.setFooter(`Generated for ${message.author.username}`)
    embed2.setTimestamp()


    const embed3 = new MessageEmbed
    embed3.setTitle(`❌ Error Generated`)
    embed3.setDescription(`Please enter a valid role`)
    embed3.setColor(`#060103`)
    embed3.setFooter(`Generated for ${message.author.username}`)
    embed3.setTimestamp()


    const embed4 = new MessageEmbed
    embed4.setTitle(`❌ Error Generated`)
    embed4.setDescription(`List of members was too long and connot be shown`)
    embed4.setColor(`#060103`)
    embed4.setFooter(`Generated for ${message.author.username}`)
    embed4.setTimestamp()



        if (arguments.includes("@everyone")) return message.channel.send(embed1);
        
        if (arguments.includes("@here")) return message.channel.send(embed);

        if (!arguments[0]) return message.channel.send(embed2)

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(arguments[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === arguments.join(' ').toLocaleLowerCase());

        if (!role) return message.channel.send(embed3);

        let membersWithRole = message.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return member.user.tag;
        })
        if (membersWithRole > 25) return message.channel.send(embed4)

        let roleEmbed = new MessageEmbed()
            .setColor("#060103")
            .setThumbnail(message.guild.iconURL())
            .setTitle(`Users With The ${role.name} Role`)
            .setDescription(membersWithRole.join("  ,  "));
        message.channel.send(roleEmbed);
    }
}