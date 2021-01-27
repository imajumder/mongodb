const  Discord = require('discord.js')

module.exports = {
  commands: ['help', 'h', 'support'],
  description: "Describes all of this bot's commands",
  callback: (message, arguments, text) => {

      const embed = new Discord.MessageEmbed
    embed.setTitle(`Rigurds Help Menu`)
    embed.setColor('#060103')
    embed.setDescription("  Type ?help-[ Category ] for more info\n```Moderation```     ```Fun```     ```Economy``` ```Misc```          ```Maths```   ```Configuration```")
    embed.setFooter(`Requested By ${message.author.username} | Rigurd`)
    embed.setTimestamp()
    message.channel.send(embed)
    
  }
}