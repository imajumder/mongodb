const { MessageEmbed } = require("discord.js");

module.exports = {

    commands: "loop",
  
  callback: async function (message) {

    const embed1 = new MessageEmbed
    embed1.setTitle(`Nothing is playing in this server`)
    embed1.setColor(`#060103`)

    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "#060103",
                    description: `Loop has been **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`
                }
            });
        };
    return message.channel.send(embed1)
  },
};
