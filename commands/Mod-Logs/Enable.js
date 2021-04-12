const Discord = require('discord.js')

const ModLogsEnabled = require('../../Schemas/Mod-Logs-Schema')

const modutil = require('../../Util/modlogs-enabled')

module.exports = {
    commands: "module-modlogs",

    callback: async (message, arguments) => {

        const args = arguments[0]

        if(args === `false`) {

            const guildId = message.guild.id

            const enabled = 0

            const pay = await modutil.addCoins(guildId, enabled)

            console.log(pay)

            const embed = new Discord.MessageEmbed
            embed.setTitle(`Module **Mod-Logs** has been disabled successfully`)
            embed.setColor('#060103')
            message.channel.send(embed)
        }

        if(args === `true`) {
            
            const guildId = message.guild.id

            const enabled = 1

            const ifenabled = await modutil.addCoins(guildId, enabled)

            console.log(ifenabled)

            const embed = new Discord.MessageEmbed
            embed.setTitle(`Module **Mod-Logs** has been enabled successfully`)
            embed.setColor('#060103')
            message.channel.send(embed)

           

        }

    }
}