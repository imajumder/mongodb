const { MessageEmbed } = require("discord.js");

module.exports = {
  
    commands: "remove",
    

  callback: async function (message, arguments) {


    const embed1 = new MessageEmbed
    embed1.setTitle(`Nothing is playing in this server`)
    embed1.setColor(`#060103`)

    const embed3 = new MessageEmbed
    embed1.setTitle(`There is no queue`)
    embed1.setColor(`#060103`)


    const embed2 = new MessageEmbed
    embed1.setTitle(`Give an the queue header for the song to remove it`)
    embed1.setColor(`#060103`)

    const embed6 = new MessageEmbed
        embed6.setTitle(`Something went wrong.. The queue has been cleared :(`)
        embed6.setColor(`#060103`)

   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(embed1)
    if (!arguments.length) return message.channel.send(embed2)
    if (isNaN(arguments[0])) return message.channel.send(embed2)
    if (queue.songs.length == 1) return message.channel.send(embed3)

    const embed4 = new MessageEmbed
   
    embed4.setTitle(`The queue has only ${queue.songs.length} songs`)
    embed4.setColor(`#060103`)


    if (arguments[0] > queue.songs.length)

      return message.channel.send(embed4)
try{
    const song = queue.songs.splice(arguments[0] - 1, 1); 

    const embed5 = new MessageEmbed
    embed5.setTitle(`Removed **\`${song[0].title}\`** from the queue`)
    embed5.setColor(`#060103`)


    message.channel.send(embed5)
} catch (error) {
        return message.channel.send(embed6)
      }
  },
};
