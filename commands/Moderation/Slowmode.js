const Discord = require('discord.js')

module.exports = {

          commands: "slowmode",

callback: async (message, arguments) => {

    const embed = new Discord.MessageEmbed
    embed.setTitle(`Please provide a number to set the slowdown for this channel`)
    embed.setColor('#060103')

    const embed1 = new Discord.MessageEmbed
    embed1.setTitle(`That is not a valid number`)
    embed1.setColor('#060103')

    const embed2 = new Discord.MessageEmbed
    embed2.setTitle(`0 is not a valid argument`)
    embed2.setColor('#060103')

    const embed3 = new Discord.MessageEmbed
    embed3.setTitle(`Negative numbers cannot be given`)
    embed3.setColor('#060103')
  
    if (!arguments[0])
      return message.channel.send(embed)
      
    if (isNaN(arguments[0])) return message.channel.send(embed1);

    if(arguments[0] > 21600) {
        const embed = new Discord.MessageEmbed
        embed.setTitle(`You cannot set the slowmode timer to over 21600 seconds`)
    }

    if (arguments[0] < 0) return message.channel.send(embed3);


    
    message.channel.setRateLimitPerUser(arguments[0]);

    
    const embed4 = new Discord.MessageEmbed
    embed4.setTitle(`Slowmode of this channel has been set to **${arguments[0]}** seconds`)
    embed4.setColor('#060103')

    message.channel.send(embed4)
  },
};