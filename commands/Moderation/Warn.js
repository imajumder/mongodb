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

         if(!message.member.guild.me.hasPermission(`KICK_MEMBERS`) || !message.member.guild.me.hasPermission(`BAN_MEMBERS`)){
            const embed5 = new Discord.MessageEmbed
            embed5.setTitle(`I don't have the required permissions to run this command`)
            embed5.setColor('#060103')
            message.reply(embed5)
         }

         const embed10 = new Discord.MessageEmbed
         embed10.setTitle(`Warned ${target} | They now have ${warningsowned} Warnings`)
         message.channel.send(embed10)

  },
  permissions: 'KICK_MEMBERS',
}
    