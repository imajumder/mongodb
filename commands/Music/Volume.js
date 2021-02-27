const { MessageEmbed } = require("discord.js");

module.exports = {

    commands: "volume",

  callback: async function ( message, arguments) {

    const embed = new MessageEmbed
    embed.setTitle(`You need to be in a voice channel to change volume for music`)
    embed.setColor(`#060103`)

    const embed1 = new MessageEmbed
    embed1.setTitle(`There is nothing playing in this server`)
    embed1.setColor(`#060103`)

    const embed3 = new MessageEmbed
    embed3.setTitle(`Only numbers can be use`)
    embed3.setColor(`#060103`)

    const embed4 = new MessageEmbed
    embed4.setTitle(`Volume can't be set over 150 or below 1`)
    embed4.setColor(`#060103`)



    const channel = message.member.voice.channel;
    if (!channel)return message.channel.send(embed)
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send(embed1)
    if (!serverQueue.connection) return message.channel.send(embed1)
    const embed2 = new MessageEmbed
    embed2.setTitle(`Current Volume ~ **${serverQueue.volume}**`)
    embed2.setColor(`#060103`)
    if (!arguments[0])return message.channel.send(embed2)
     if(isNaN(arguments[0])) return message.channel.send(embed3)
    if(parseInt(arguments[0]) > 150 ||(arguments[0]) < 0) return message.channel.send(embed4)
    serverQueue.volume = arguments[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(arguments[0] / 100);
    let xd = new MessageEmbed()
    .setTitle(`Current volume set to ~ **${arguments[0]/1}** / 100`)
    .setColor("#060103")
    return message.channel.send(xd);
  },
};
