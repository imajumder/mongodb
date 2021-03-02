const Discord = require('discord.js')


const mongo = require('../../Util/mongo')

const warnSchema = require('../../Schemas/Mod-Logs')

module.exports = {
    commands: "set-modlogs",

    callback: async (message, arguments, client) => {

        const guildId = message.guild.id

        let channelId = message.channel.id 

        if(!arguments[0]) channelId = message.channel.id

        if(arguments[0]) channelId = message.mentions.channels.first().id


        let channelIdname = message.channel.id 

        if(!arguments[0]) channelIdname = message.channel

        if(arguments[0]) channelIdname = message.mentions.channels.first()

        const embed = new Discord.MessageEmbed
        embed.setTitle(`\`\`\`${channelIdname.name}\`\`\` has been set as the Mod-Logs channel`)
        embed.setColor("#060103")

        message.channel.send(embed)
        
        await mongo().then(async (mongoose) => {
            try {
              await warnSchema.findOneAndUpdate(
                {
                  guildId,
                },
                {
                  guildId,
                  channelId,
                },
                {
                  upsert: true,
                }
              )
            } finally {
              mongoose.connection.close()
            }
          })

        },
      }
