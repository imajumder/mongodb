const mongo = require('../../Util/mongo')
const languageSchema = require('../../Schemas/Langugae-Schema')
const { languages } = require('../../Lang.json')
const { setLanguage } = require('../../Language')
const Discord = require('discord.js')

module.exports = {
  commands: ['set-lang', 'set-language'],
  callback: async (message, arguments) => {
    const { guild } = message
    

    if(!arguments[0]) {
try {
    const embed = new Discord.MessageEmbed
    embed.setTitle(`Please provide an language to set it as the language of this server`)
    embed.setColor("#060103")
    message.channel.send(embed)

} catch(err) {
    console.log(err)
}    } else {

        const targetLanguage = arguments[0].toLowerCase()

    if (!languages.includes(targetLanguage)) {
        try {
            const embed = new Discord.MessageEmbed
             embed.setTitle(`That language is not supported`)
             embed.setColor("#060103")
            
           message.reply(embed)
           return
        } catch (err){
            console.log(err)
        }
       }
    setLanguage(guild, targetLanguage)

    await mongo().then(async (mongoose) => {
      try {
        await languageSchema.findOneAndUpdate(
          {
            _id: guild.id,
          },
          {
            _id: guild.id,
            language: targetLanguage,
          },
          {
            upsert: true,
          }
        )
        const embed2 = new Discord.MessageEmbed
        embed2.setTitle(`${arguments[0]} has been set as the language`)
        embed2.setColor("#060103")

        message.channel.send(embed2)

      } finally {
        mongoose.connection.close()
      }
    })
}
  },
}