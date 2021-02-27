const { MessageEmbed } = require("discord.js");

module.exports = {
  
    commands: "stop",

  callback: async function ( message ) {

    const embed = new MessageEmbed
    embed.setTitle(`You need to play music in a channel to stop it`)
    embed.setColor(`#060103`)
    

    
    const embed1 = new MessageEmbed
    embed1.setTitle(`Nothing is being played to stop`)
    embed1.setColor(`#060103`)
  

    const embed2 = new MessageEmbed
    embed2.setTitle(`A error occured and the song has stopped.. The queue has been cleared`)
    embed2.setColor(`#060103`)
    

    const channel = message.member.voice.channel
    if (!channel)return message.channel.send(embed)
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return message.channel.send(embed1);
   if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     try{
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return message.channel.send(embed2)
      }
    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];
    message.react("✅")
  },
};