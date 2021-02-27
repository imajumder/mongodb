const { MessageEmbed } = require("discord.js");

module.exports = {

      commands: "pause",

  callback: async function (message, arguments) {

    const embed = new MessageEmbed
    embed.setTitle(`Some error occured and the queue has been cleared`)
    embed.setColor(`#060103`)
  

    
    const embed1 = new MessageEmbed
    embed1.setTitle(`Nothing is playing in this server`)
    embed1.setColor(`#060103`)
 


    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return message.channel.send(embed)
      }	    
      let xd = new MessageEmbed()
      .setColor("#060103")
      .setTitle(`Current song has been paused`)
      return message.channel.send(xd);
    }
    return message.channel.send(embed1)
  },
};
