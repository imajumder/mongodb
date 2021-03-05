module.exports = (client) => {
    const channelId = '732883157103149067'
  
    const updateMembers = (guild) => {
      const channel = guild.channels.cache.get('817332424039071765')
      channel.setName(`『🧑』Members: ${guild.memberCount.toLocaleString()}`)
    }
  
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
  
    const guild = client.guilds.cache.get('780072798261084172')
    updateMembers(guild)
  }