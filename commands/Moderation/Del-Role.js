const { MessageEmbed } = require("discord.js");
module.exports = {
  
    commands: "roledel",

  callback: async (message, arguments) => {

    const embed = new Discord.MessageEmbed
      embed.setTitle(`You do not have the required permissions to use this command`)
      embed.setColor('#060103')

      const embed1 = new Discord.MessageEmbed
      embed1.setTitle(`Please provide a **user** to remove the role from`)
      embed1.setColor('#060103')

      const embed2 = new Discord.MessageEmbed
      embed2.setTitle(`Please provide a **role** to be removed from the user`)
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

    if(!rMember.roles.cache.has(role.id)) {
      let rolDEL_err = new MessageEmbed()
      .setColor(`#060103`)
      .setDescription(`**${rMember.displayName}** does not have the role **${role.name}**`);

      return message.channel.send(rolDEL_err)
    
    } else {

      const embed7 = new Discord.MessageEmbed
      embed7.setTitle(`Please increase my rank in the role hiearchy to use this command as I don't have permissions`)
      embed7.setColor('#060103')

      await rMember.roles.remove(role.id).catch(e => message.channel.send(embed7))
      
      let rolDEL = new MessageEmbed()
      .setColor(`#060103`)
      .setDescription(`**${rMember.displayName}** has been de-roled of the role **${role.name}**`)

      message.channel.send(rolDEL)
    
    }

  },
};