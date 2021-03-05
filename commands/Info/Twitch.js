const Discord = require('discord.js')

module.exports = {
    commands: "twitch",

callback : async (message, arguments) => {

   const args = arguments[0]

   if(!args) {
       const embed = new Discord.MessageEmbed
       embed.setTitle(`Please enter a twitch username`)
       embed.setColor("#060103")
       message.channel.send(embed)
       return
   }

   const embed= new Discord.MessageEmbed
   embed.setTitle(`${args}`)
   embed.setURL(`https://www.twitch.tv/${args}`)
   embed.setColor("#060103")
   message.channel.send(embed)

}
}