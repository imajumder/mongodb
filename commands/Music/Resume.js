const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: "resume",
  callback: async function (message) {

    const embed = new MessageEmbed
    embed.setTitle(`There is nothing paused in this server`)
    embed.setColor(`#060103`)
 

    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setColor("#060103")
      .setTitle("The song has been resumed")
      return message.channel.send(xd);
    }
    return message.channel.send(embed)
  },
};
