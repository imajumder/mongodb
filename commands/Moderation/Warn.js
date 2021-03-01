const Discord = require('discord.js')

const warningscheck = require('../../Util/Warnings')

module.exports = {
 
    commands: ['warn'],

    description: 'Kicks the targeted user',


    callback: async (message, client, arguments) => {
        
        let target = message.mentions.users.first()


        if(target=== message.author) {
      
            const embed3 = new Discord.MessageEmbed
            embed3.setTitle('You cannot warn yourself')
            embed3.setColor('#060103')
            message.channel.send(embed3)
            return
          }


          const warnings = 1

         const userId = target.id

         const guildId = message.guild.id

         const warningsowned = await warningscheck.addWarnings(userId, guildId, warnings)

         if(!message.member.hasPermission('ADMINISTRATOR') || !message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('KICK_MEMBERS') || !message.member.hasPermission('BAN_MEMBERS')){
            const embed = new Discord.MessageEmbed
        embed.setTitle(`You do not have the required permissions to run this command`)
        embed.setColor('#060103')
        message.channel.send(embed)
        }

         const embed10 = new Discord.MessageEmbed
         embed10.setTitle(`Warned ${target.username} | They now have ${warningsowned} Warnings`)
         message.channel.send(embed10)

  },
  permissions: 'KICK_MEMBERS',
}
    