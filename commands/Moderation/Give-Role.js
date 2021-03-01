const Discord = require('discord.js')

module.exports = {
  
    commands: "giverole",
   
  callback: async ( message, arguments) => {

    const embed = new Discord.MessageEmbed
      embed.setTitle(`You do not have the required permissions to use this command`)
      embed.setColor('#060103')

      const embed1 = new Discord.MessageEmbed
      embed1.setTitle(`Please provide a **user** to add the role to`)
      embed1.setColor('#060103')

      const embed2 = new Discord.MessageEmbed
      embed2.setTitle(`Please provide a **role** to be added to the user`)
      embed2.setColor('#060103')

      const embed3 = new Discord.MessageEmbed
      embed3.setTitle(`I don't have the required permissions to run this command`)
      embed3.setColor('#060103')

    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send(embed)

    let rMember = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]);

    if(!rMember) return message.channel.send(embed1)
    
    let role = message.guild.roles.cache.find(r => r.name == arguments[1]) || message.guild.roles.cache.find(r => r.id == arguments[1]) || message.mentions.roles.first()
    
    if(!role) return message.channel.send(embed2) 
    

    if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send(embed3)

    if(rMember.roles.cache.has(role.id)) {

      const embed = new Discord.MessageEmbed
      embed.setTitle(`**${rMember.displayName}** already has the role **${role.name}**`)
      embed.setColor('#060103')
        
        
      return message.channel.send(embed)
    
    } else {

      const embed = new Discord.MessageEmbed
      embed.setTitle(`Please increase my rank in the role hiearchy to use this command as I don't have permissions`)
      embed.setColor('#060103')

      const embed1 = new Discord.MessageEmbed
      embed1.setTitle(`**${rMember.displayName}** has been added to the role **${role.name}**`)
      embed1.setColor('#060103')
        
      await rMember.roles.add(role.id).catch(e => message.channel.send(embed))
      
      message.channel.send(embed1)
    
    }

  },
};