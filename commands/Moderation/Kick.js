const Discord = require('discord.js')
module.exports = {
 
    commands: ['kick'],
    

    description: 'Kicks the targeted user',
    cooldown: '30',

    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '[Mention]',
    callback: async (message) => {
    

        const { member, mentions } = message

        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('KICK_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (target) {
            try {
              const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`${tag} That user has kicked`)
            } catch (err) {

              const embed = new Discord.MessageEmbed
              embed.setTitle(`Please increase my rank in the role hiearchy to kick that user`)
              embed.setColor('#060103')
              message.channel.send(embed)
            }
          } else {
            message.channel.send(`${tag} Please specify someone to kick.`)
          }
        } else {
          message.channel.send(
            `${tag} You do not have permission to use this command.`
          )
        }
      
  },
   requiredRoles: [],
}