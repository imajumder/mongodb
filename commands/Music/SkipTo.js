const { MessageEmbed } = require("discord.js");

module.exports = {

    commands: "skipto",

  callback: async function (message, arguments) {
    
    const embed = new MessageEmbed
        embed.setTitle(`You need to specify how many songs to skip through`)
        embed.setColor(`#060103`)
        embed.setFooter(`Generated for ${message.author.username}`)
        embed.setTimestamp()

        
    const embed1 = new MessageEmbed
    embed1.setTitle(`There are no songs in the queue to skip`)
    embed1.setColor(`#060103`)
    embed1.setFooter(`Generated for ${message.author.username}`)
    embed1.setTimestamp()


    if (!arguments.length || isNaN(arguments[0]))
      return message.channel.send(embed)
        

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(embed1)

    const embed2 = new MessageEmbed

    embed2.setTitle(`The queue is ${queue.songs.length} songs long.. You can't skip through ${arguments[0]} songs`)
    embed2.setColor(`#060103`)
    embed2.setFooter(`Generated for ${message.author.username}`)
    embed2.setTimestamp()

    if (arguments[0] > queue.songs.length)

    return message.channel.send(embed2)

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < arguments[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(arguments[0] - 2);
    }
     try{
    queue.connection.dispatcher.end();
      }catch (error) {
        queue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);

        const embed3 = new MessageEmbed
        embed3.setTitle(`Something went wrong.. The queue has been cleared :(`)
        embed3.setColor(`#060103`)
      

       return message.channel.send(embed3)
      }
    
    queue.textChannel.send({
                        embed: {
                            color: "#060103",
                            description: `skipped \`${arguments[0] - 1}\` songs successfully`
                        }
   
                   })
                   

  },
};
