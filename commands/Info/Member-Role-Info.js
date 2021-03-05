const { MessageEmbed } = require('discord.js');
const language = require('../../Language')

module.exports = {
 
 commands: "role-members",
     
callback: async (message, arguments) => {

    const { guild } = message

    const embed = new MessageEmbed
    embed.setTitle(`${language(guild, 'ROLE_INFO1')}`)
    embed.setColor(`#060103`)

    const embed1 = new MessageEmbed
    embed1.setTitle(`${language(guild, 'ROLE_INFO2')}`)
    embed1.setColor(`#060103`)
 


    const embed2 = new MessageEmbed
    embed2.setTitle(`${language(guild, 'ROLE_INFO3')}`)
    embed2.setColor(`#060103`)


    const embed3 = new MessageEmbed
    embed3.setTitle(`${language(guild, 'ROLE_INFO4')}`)
    embed3.setColor(`#060103`)
   

    const embed4 = new MessageEmbed
    embed4.setTitle(`${language(guild, 'ROLE_INFO5')}`)
    embed4.setColor(`#060103`)
 
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
            .setTitle(`${language(guild, 'ROLE_INFO6')} ${role.name} Role`)
            .setDescription(membersWithRole.join("  ,  "));
        message.channel.send(roleEmbed);
    }
}