const Discord = require('discord.js')

module.exports = {

          commands: "rgnlist",
        
  callback: async (message, arguments) => {

    const embed = new Discord.MessageEmbed
    embed.setTitle(`Avaible Regions`)
    embed.setDescription(` \`\`\`
     'bz'  : "Brazil",
     'hk'  : "Hong Kong",
     'ind' : "India",
     'jp'  : "Japan",
     'rus' : "Russia",
     'sng' : "Singapore",
     'sa'  : "South Africa",
     'syd' : "Sydney",
     'usc' : "Us Central",
     'use' : "Us East",
     'uss' : "Us South",
     'usw' : "Us West",
     'eur' : "Europe"\`\`\`
   `)
   message.channel.send(embed)
  }
}