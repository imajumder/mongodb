const Discord = require('discord.js')

module.exports = {

          commands: "setregion",
        
  callback: async (message, arguments) => {

    const embed1 = new Discord.MessageEmbed
    embed1.setTitle(`You do not have the required permissions to use this command`)
    embed1.setColor("#060103")
  
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(embed1)

    let serverRegion = arguments.slice(0).join(' ')

    const embed = new Discord.MessageEmbed
    embed.setTitle(`Please provide what region you want to set this server too. Use \`\`\`rgnlist\`\`\` for the list of avaible regions`)
    embed.setColor("#060103")

    if(!serverRegion) return message.channel.send(embed);    

    
    var availableRegions = ['bz', 'hk', 'jp', 'rus', 'sng', 'sa', 'syd', 'ind', 'usc', 'use', 'usw', 'uss', 'eur']

    if(availableRegions.includes(serverRegion)) {
      try {
        const serverAliases = {
          'bz' : "brazil",
          'hk' : "hongkong",
           'ind' : "india",
          'jp' : "japan",
           'rus' : "russia",
           'sng' : "singapore",
          'sa' : "southafrica",
           'syd' : "sydney",
           'usc' : "us-central",
           'use' : "us-east",
           'uss' : "us-south",
           'usw' : "us-west",
           'eur' : "europe"
         }
        await message.guild.setRegion(serverAliases[serverRegion])
        const embed2 = new Discord.MessageEmbed
        embed2.setTitle(`Server region has been changed to ${serverAliases[serverRegion]} successfully`) 
        embed2.setColor("060103")
        message.channel.send(embed2)
        
      }

      catch(error) {
        const embed3 = new Discord.MessageEmbed
        embed3.setTitle(`Something went wrong... Try again :(`) 
        embed3.setColor("060103")
        message.channel.send(embed3)
      }
    }

    else {

      const emed = new Discord.MessageEmbed
      emed.setTitle(`Please provide a valid region. Use \`\`\`rgnlist\`\`\` to view all avaible regions`)
      emed.setColor("#060103")
      return message.channel.send(emed)
    }

  },
};