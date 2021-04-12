const Discord = require('discord.js')

module.exports = {
    commands: 'addmodrole',

    callback: async (message, arguments) => {

        if(!message.member.hasPermission(["MANAGE_NICKNAMES"])) {
            try {
                const embed = new Discord.MessageEmbed
                embed.setTitle(`You do not have the required permissions to use this command`)
                embed.setColor("#060103")
                message.channel.send(embed)
            } catch (err) {
                console.log(err)
            }
        }

        if(!message.guild.me.hasPermission(["MANAGE_NICKNAMES"])) {
            try {
                const embed = new Discord.MessageEmbed
                embed.setTitle(`I don't have the required permissions to run this command`)
                embed.setColor("#060103")
                message.channel.send(embed)
            } catch (err) {
                console.log(err)
            }
        }


        if(!arguments[0]) {
            try {
                const embed = new Discord.MessageEmbed
                embed.setTitle(`Please provide a name to set it as the Bot's name`)
                embed.setColor(`#060103`)
                message.channel.send(embed)
            } catch (err) {
                console.log(err)
            }
        } else {

            let args1 = arguments[0]

            let args2 = arguments[1]

            let args3 = arguments[2]
            
            let args4 = arguments[3]

            let args5 = arguments[4]

            let args6 = arguments[5]

            let args7 = arguments[6]

            let args8 = arguments[7]

            let args9 = arguments[8]

            let args10 = arguments[9]


            let totalarguments = `${args1} ${args2} ${args3}`

            if(arguments.length === 1) totalarguments = `${args1}`

            if(arguments.length === 2) totalarguments = `${args1} ${args2}`

            if(arguments.length === 3) totalarguments = `${args1} ${args2} ${args3}`

            if(arguments.length === 4) totalarguments = `${args1} ${args2} ${args3} ${args4}`

            if(arguments.length === 5) totalarguments = `${args1} ${args2} ${args3} ${args4} ${args5}`
            
            if(arguments.length === 6) totalarguments = `${args1} ${args2} ${args3} ${args4} ${args5} ${args6}`

            if(arguments.length === 7) totalarguments = `${args1} ${args2} ${args3} ${args4} ${args5} ${args6} ${args7}`

            if(arguments.length === 8) totalarguments = `${args1} ${args2} ${args3} ${args4} ${args5} ${args6} ${args7} ${args8}`

            if(arguments.length === 9) totalarguments = `${args1} ${args2} ${args3} ${args4} ${args5} ${args6} ${args7} ${args8} ${args9}`

            if(arguments.length === 10) totalarguments = `${args1} ${args2} ${args3} ${args4} ${args5} ${args6} ${args7} ${args8} ${args9} ${args10}`

            if(totalarguments.length > 50) {
                try {
                    const embed = new Discord.MessageEmbed
                    embed.setTitle(`Please reduce the length of the name`)
                    embed.setColor(`#060103`)
                    message.channel.send(embed)
                } catch (err) {
                    console.log(err)
                }
            } else {
                
                message.guild.roles.create({
                    data: {
                      name: `${totalarguments}`,
                      permissions: [
                        'MANAGE_CHANNELS',
                        'KICK_MEMBERS',
                        'BAN_MEMBERS',
                        'ADD_REACTIONS',
                        'PRIORITY_SPEAKER',
                        'STREAM',
                        'VIEW_CHANNEL',
                        'SEND_MESSAGES',
                        'SEND_TTS_MESSAGES',
                        'MANAGE_MESSAGES',
                        'EMBED_LINKS',
                        'ATTACH_FILES',
                        'READ_MESSAGE_HISTORY',
                        'MENTION_EVERYONE',
                        'USE_EXTERNAL_EMOJIS',
                        'CONNECT',
    'SPEAK',
    'MUTE_MEMBERS',
    'DEAFEN_MEMBERS',
    'MOVE_MEMBERS',
    'CHANGE_NICKNAME',
    'MANAGE_NICKNAMES',
    'MANAGE_ROLES',
    'MANAGE_WEBHOOKS',
    'MANAGE_EMOJIS',
    'CREATE_INSTANT_INVITE',
    'USE_VAD',



    
                      ]
                    }
                  })

                  const embed1 = new Discord.MessageEmbed
                  embed1.setTitle(`Please increase my rank in the role hiearchy to use this command as I don't have permissions`)
                  embed1.setColor('#060103')                
    
                const embed = new Discord.MessageEmbed
                embed.setTitle(`A moderator role has been created`)
                embed.setColor("#060103")
                message.channel.send(embed)
            }

    }
  }
}