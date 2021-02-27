const { MessageEmbed } = require("discord.js");

module.exports = {
  
    commands: "queue",
  
  callback: async function (message) {

    const embed = new MessageEmbed
    embed.setTitle(`There is nothing playing in this server`)
    embed.setColor(`#060103`)
  

    const embed1 = new MessageEmbed
    embed1.setTitle(`I don't have Manage messages and Add reactions permissions`)
    embed1.setColor(`#060103`)
 
 
  const permissions = message.channel.permissionsFor(message.client.user);
    if (!permissions.has(["MANAGE_MESSAGES", "ADD_REACTIONS"]))
      return message.channel.send(embed1);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(embed)

    let currentPage = 0;
    const embeds = generateQueueEmbed(message, queue.songs);

    const queueEmbed = await message.channel.send(
      ` Page ${currentPage + 1} Out of ${embeds.length}`,
      embeds[currentPage]
    );

    try {
      await queueEmbed.react("⬅️");
      await queueEmbed.react("🛑");
      await queueEmbed.react("➡️");
    } catch (error) {
      console.error(error);
      message.channel.send(error.message).catch(console.error);
    }

    const filter = (reaction, user) =>
      ["⬅️", "🛑", "➡️"].includes(reaction.emoji.name) && message.author.id === user.id;
    const collector = queueEmbed.createReactionCollector(filter, { time: 60000 });

    collector.on("collect", async (reaction, user) => {
      try {
        if (reaction.emoji.name === "➡️") {
          if (currentPage < embeds.length - 1) {
            currentPage++;
            queueEmbed.edit(`**\`${currentPage + 1}\`**/**${embeds.length}**`, embeds[currentPage]);
          }
        } else if (reaction.emoji.name === "⬅️") {
          if (currentPage !== 0) {
            --currentPage;
            queueEmbed.edit(`**\`${currentPage + 1}\`**/**${embeds.length}**`, embeds[currentPage]);
          }
        } else {
          collector.stop();
          reaction.message.reactions.removeAll();
        }
        await reaction.users.remove(message.author.id);
      } catch (error) {
        console.error(error);
        return message.channel.send(error.message).catch(console.error);
      }
    });
  }
};

function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;

  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;

    const info = current.map((track) => `**\`${++j}\`** | [\`${track.title}\`](${track.url})`).join("\n");
  
    const serverQueue =message.client.queue.get(message.guild.id);
    const embed = new MessageEmbed()
     .setAuthor("Music Queue")
    .setThumbnail(message.guild.iconURL())
    .setColor("#060103")
    .setDescription(`${info}`)
    .addField("Now Playing", `[${queue[0].title}](${queue[0].url})`, true)
    .setFooter("Server Volume ~ "+serverQueue.volume)
     if(serverQueue.songs.length === 1)embed.setDescription(`No more songs to play... Add more`)

    embeds.push(embed);
  }

  return embeds;
 
};
