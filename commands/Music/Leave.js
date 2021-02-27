const { MessageEmbed } = require("discord.js");

module.exports = {
        commands: "leave",

    callback: async function (message) {


        const embed = new MessageEmbed
        embed.setTitle(`You need to be in a voice channel to use this command`)
        embed.setColor(`#060103`)
     

        
        const embed1 = new MessageEmbed
        embed1.setTitle(`I'm not in any voice channel so I can't leave one`)
        embed1.setColor(`#060103`)
       

        const embed2 = new MessageEmbed
        embed2.setTitle(`Something wrong is going on.. Try to leave the voice channel`)
        embed2.setColor(`#060103`)
       


        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send(embed)
        if (!message.guild.me.voice.channel) return message.channel.send(embed1)

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return message.channel.send(embed2)
        }

        const Embed = new MessageEmbed()
            .setAuthor(`Success`)
            .setColor("#060103")
            .setTitle("Left the voice channel")
           
        return message.channel.send(Embed)
    },
};
