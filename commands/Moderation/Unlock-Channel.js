const Discord = require('discord.js');

module.exports = {
    
        commands: "unlock-channel",
    callback: async (message) => {
        let lockPermErr = new Discord.MessageEmbed()
        .setTitle(`You do not have permission to use this command`)
        .setColor(`#060103`)
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") || !message.channel.permissionsFor(message.member).has("MANAGE_GUILD") ) return message.channel.send(lockPermErr);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
            });
        } catch (e) {
            console.log(e);
        }

        const embed = new Discord.MessageEmbed
        embed.setTitle(`${message.channel.name} has been unlocked successsfully`)
        embed.setColor(`#060103`)

        message.channel.send(embed)
    }
}