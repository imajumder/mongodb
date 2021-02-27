const { MessageEmbed } = require("discord.js");

module.exports = {

    commands: "skip",
  
  callback: async function (message) {

    const embed = new MessageEmbed
        embed.setTitle(`You need to be in a voice channel to play music`)
        embed.setColor(`#060103`)
        

        const embed1 = new MessageEmbed
        embed1.setTitle(`There is no song in the queue to skip`)
        embed1.setColor(`#060103`)
    

        const embed2 = new MessageEmbed
        embed2.setTitle(`Something went wrong.. The queue has been cleared :(`)
        embed2.setColor(`#060103`)
       

    const channel = message.member.voice.channel
    if (!channel)return message.channel.send(embed)
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return message.channel.send(embed1)
        if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setColor("#060103")
      .setTitle("Song has been skipped and resumed")
       
   return message.channel.send(xd).catch(err => console.log(err));
      
    }


       try{
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return message.channel.send(embed2)
      }
    message.react("✅")
  },
};
