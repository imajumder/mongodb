const Discord = require('discord.js');

module.exports = {

        commands: "lock-channel",
        
    callback: async (message, arguments) => {

        let lockPermErr = new Discord.MessageEmbed()
        .setTitle(`You do not have permission to use this command`)
        .setColor(`#060103`)

        if(arguments[0]) {
            const embed = new Discord.MessageEmbed
            embed.setTitle('Please provide an reason for locking the channel')
            embed.setColor(`#060103`)
            message.channel.send(embed)
        }

        const args = arguments.join(' ')
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") || !message.channel.permissionsFor(message.member).has("MANAGE_GUILD")) return message.channel.send(lockPermErr);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }
        const embed = new Discord.MessageEmbed
        embed.setTitle(`${message.channel.name} has been locked succesfully | Reason - ${args}`)
        embed.setColor(`#060103`)

        message.channel.send(embed);
    }
}