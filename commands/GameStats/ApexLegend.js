const Discord = require('discord.js');
const request = require('request');

module.exports = {
    commands: "apex",

    callback: async (message, arguments) => {
        const options = {
            method: 'GET',
            url: `https://public-api.tracker.gg/apex/v1/standard/profile/5/Kroneful`,
            headers: {
                'TRN-Api-Key': 'b2616411-68a1-43e7-9f9e-24e2455680e3',
            }
          };

          request(options, function (error, response, body) {
              
            try {

                const re = response.toJSON() 
    
                const stats = response.body
           
               const statsss = JSON.parse(stats)

               const kills = statsss.data.children.stats.value.displayValue

               const legend = statsss.data.children.metadata.legend_name

               const level = statsss.data.metadata.level

               const username = statsss.data.metadata.platformUserHandle

               const rankname = statsss.data.metadata.rankName

               const embed4 = new Discord.MessageEmbed
                      embed4.setThumbnail(imagess)
                      embed4.setTitle(`Stats for ${username} | Platform ~`)
                      embed4.addFields({
                          name: `Platform`, value: `hi`, inline: true,
                      },
                      {
                          name: `Username`, value: `${username}`, inline: true,
                      },
                      {
                          name: `Kills`, value: `${kills} Kills`,inline: true,
                      },
                      {
                        name: `Ran`, value: `${kdratio}  K/D Ratio`, inline: true,
                    },
                      {
                          name: `Wins`, value: `${wins} Wins`, inline: true,
                      },
                      
                      {
                          name: `Score`, value: `${score} Points`, inline: true,
                      },
                      {
                          name: `Top 25`, value: `${new25} Times`, inline: true,
                      },
                      {
                          name: `Win Ratio`, value: `${winration}`, inline: true,
                      },
        
                      {
                        name: `Time Played`, value: `${timeplayed}`, inline:true,
                    },)
                    message.channel.send(embed4)           
            
            }
            catch(err) {
                   const embed = new Discord.MessageEmbed
                        embed.setTitle(`Invalid user or platform. Try again`)
                        embed.setColor("#060103")
                        message.channel.send(embed)
               }
           
           });
    }
}