const { MessageEmbed } = require("discord.js");

module.exports = {
  
    commands: "nowplaying",

  callback: async function ( message ) {

    const embed1 = new MessageEmbed
    embed1.setTitle(`Nothing is playing in this server`)
    embed1.setColor(`#060103`)

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send(embed1)
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
    .setAuthor(`Playing ${song.title}`)
                .setThumbnail(song.img)
                .setColor("#060103")
                .addField("Name", song.title, true)
                .addField("Duration", song.duration, true)
                .addField(`Posted`, `${song.ago}`, true)
                .addField(`Views`, `${song.views}`, true)
                .setFooter(`Requested by ${message.author.username}`)
                .setTimestamp()
    return message.channel.send(thing)
  },
};
