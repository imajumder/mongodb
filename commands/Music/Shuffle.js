const { MessageEmbed } = require("discord.js");

module.exports = {
  
    commands: "shuffle",
  
  callback: async function ( message ) {

    
    const embed = new MessageEmbed
        embed.setTitle(`There are no songs in the queue to shuffle`)
        embed.setColor(`#060103`)
       

        const embed3 = new MessageEmbed
        embed3.setTitle(`Something went wrong.. The queue has been cleared :(`)
        embed3.setColor(`#060103`)
      
      
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send(embed)
try{
    let songs = serverQueue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    serverQueue.songs = songs;
    message.client.queue.set(message.guild.id, serverQueue);
    const embed2 = new MessageEmbed
    embed2.setTitle(`Songs in the queue have been shuffled successfully`)
    embed2.setColor(`#060103`)
   
    message.channel.send(embed2)
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return message.channel.send(embed3)
     }
  },
};
