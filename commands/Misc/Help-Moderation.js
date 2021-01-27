const  Discord = require('discord.js')

module.exports = {
  commands: ['help-moderation', 'h-moderation'],
  description: "Describes all of this bot's commands",
  callback: (message, arguments, text) => {

      const embed = new Discord.MessageEmbed
    embed.setTitle(`Rigurds Moderation Commands`)
    embed.setColor('#060103')
    embed.addFields(
        {name: `Kick [ Targeted User ]`, value: `Kicks The Targeted User`, inline:true},
        {name: `Ban [ Targeted User ]`, value: `Bans The Targeted User`, inline:true,},
        {name: `ClearChannel [ Targeted User ]`, value: `Clears a few messages`, inline:true,},
    )
    embed.setFooter(`Requested By ${message.author.username} | Rigurd`)
    embed.setTimestamp()
    message.channel.send(embed)
    
  }
}