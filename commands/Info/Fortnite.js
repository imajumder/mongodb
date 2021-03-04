const Discord = require('discord.js');
const imagess = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OJYQh8MtzaRzVBHrMssUlqrzpyTVHoJjdA&usqp=CAU`
const request = require('request');

module.exports = {
    commands: "fortnite",

    callback: async (message, arguments) => {

        let platform = arguments[1]

         const username = arguments[0]


        const embed1 = new Discord.MessageEmbed
        embed1.setTitle(`Please provide a platform the user plays in`)
        embed1.setDescription(`Avaible Platforms
        \`\`\`psn\`\`\` ~ Playstation Network
        \`\`\`xbl\`\`\` ~ Xbox Live Network
        \`\`\`battle\`\`\` ~  Battle.net Network
        `)
        embed1.setColor(`#060103`)

        const embed3 = new Discord.MessageEmbed
        embed3.setTitle(`Please provide a user to check stats for`)
        embed3.setColor("#060103")

        if(!arguments[0]) {
            message.channel.send(embed3)
            return
        }
        

        else if(!arguments[1]) {
            message.channel.send(embed1)
            return
        }

        let platforms = `Not Known`


if(arguments[1] === `pc`) platforms = `kbm`
if(arguments[1] === `console`) platforms = `gamepad`
if(arguments[1] === `mobile`) platforms = `touch`


if(platforms === `kbm`) platform = `PC`

if(platforms === `gamepad`) platform = `XBOX | PS | SWITCH`

if(platforms === `mobile`) platform = `IOS | ANDROID`



const options = {
  method: 'GET',
  url: `https://api.fortnitetracker.com/v1/profile/${platforms}/${username}`,
  headers: {
    'TRN-Api-Key': 'b2616411-68a1-43e7-9f9e-24e2455680e3',
  }
};

request(options, function (error, response, body) {
	
    try {
        const re = response.toJSON() 
    
         const stats = response.body
    
        const statsss = JSON.parse(stats)

        const kills = statsss.stats.p2.kills.displayValue

        const epicuser = statsss.epicUserHandle

        const score = statsss.stats.p2.score.displayValue

        const wins = statsss.stats.p2.top1.displayValue

        const new25 = statsss.stats.p2.top25.displayValue

        const kdratio = statsss.stats.p2.kd.displayValue

        const matchess = statsss.stats.p2.matches.displayValue

        const timeplayed = statsss.stats.p2.minutesPlayed.displayValue

        const winration = statsss.stats.p2.winRatio.displayValue

        const embed4 = new Discord.MessageEmbed
                      embed4.setThumbnail(imagess)
                      embed4.setTitle(`Stats for ${epicuser} | Platform ~ ${platform}`)
                      embed4.addFields({
                          name: `Platform`, value: `${platform}`, inline: true,
                      },
                      {
                          name: `Username`, value: `${epicuser}`, inline: true,
                      },
                      {
                          name: `Kills`, value: `${kills} Kills`,inline: true,
                      },
                      {
                          name: `Games Played`, value: `${matchess} Games Played`, inline: true,
                      },
                      {
                        name: `K / D Ratio`, value: `${kdratio}  K/D Ratio`, inline: true,
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

    } catch(err) {
       console.log(err)
    }

});

        
    }
}