const Discord = require('discord.js');
const { isGame } = require('imdb-api/lib/interfaces');

const API = require('call-of-duty-api')();

const request = require('request');

const imagess = `https://t3.ftcdn.net/jpg/03/11/35/74/360_F_311357490_YCT9QqCU9IHaG89VMyTzz7su1ERkbuLz.jpg`


module.exports = {
    commands: 'cod',

    callback: async (message, arguments) => {

        const username = `ishanmajumder666@gmail.com`

        const password = `Raju@2020`

        const gamertag = arguments[0]

        let platform = arguments[1]

        const embed1 = new Discord.MessageEmbed
        embed1.setTitle(`Please provide a platform the user plays in`)
        embed1.setDescription(`Avaible Platforms
        \`\`\`ps ~ Playstation Network\`\`\`
        \`\`\`xbox ~ Xbox Live Network\`\`\`
        \`\`\`battle ~  Battle.net Network\`\`\`
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

    
                  if(platform === `psn`) platforms = `Playstation Network`
    
                  if(platform === `xbl`) platforms = `Xbox Live Network`
    
                  if(platform === `battle`) platforms = `Battle.net Network`

        if(arguments[1] === `ps`) platforms = `psn`
        if(arguments[1] === `xbox`) platforms = `xbl`
        if(arguments[1] === `battle`) platforms = `battle`


        if(platforms === `psn`) platform = `Playstation`

        if(platforms === `xbl`) platform = `Xbox`

        if(platforms === `battle`) platform = `Battle.Net`

        if(arguments[1] === `steam`) platforms = `Steam`
                  

        try {
            await API.login(username, password);
         } catch(Error) {
         }
         try {
            let data = await API.MWBattleData(gamertag, platforms);

                      const statsss = data
    
                      const kills = statsss.br.kills 
    
                      const wins = statsss.br.wins 
    
                      const kdratio = statsss.br.kdRatio.toFixed(1) 
    
                      const games = statsss.br.gamesPlayed 
    
                      const death = statsss.br.deaths 
    
                      const revivies = statsss.br.revives 
    
                      const top5 = statsss.br.topFive 
    
                      const contracts = statsss.br.contracts 
    
                      const cash = statsss.br.cash 
    
                      const knockdowns = statsss.br.downs 

                      const embed4 = new Discord.MessageEmbed
                      embed4.setThumbnail(imagess)
                      embed4.setTitle(`Stats for ${gamertag} | Platform ~ ${platform}`)
                      embed4.addFields({
                          name: `Platform`, value: `${platform}`, inline: true,
                      },
                      {
                          name: `Username`, value: `${gamertag}`, inline: true,
                      },
                      {
                          name: `Kills`, value: `${kills} Kills`,inline: true,
                      },
                      {
                          name: `Games Played`, value: `${games} Games Played`, inline: true,
                      },
                      {
                          name: `Wins`, value: `${wins} Wins`, inline: true,
                      },
                      {
                          name: `K / D Ratio`, value: `${kdratio}  K/D Ratio`, inline: true,
                      },
                      {
                          name: `Deaths`, value: `${death} Deaths`, inline: true,
                      },
                      {
                          name: `Knockdowns`, value: `${knockdowns} Knockdowns`, inline: true,
                      },
                      {
                          name: `Revives`, value: `${revivies} Revives`, inline: true,
                      },
        
                      {
                        name: `Contracts`, value: `${contracts} Contracts Completed`, inline:true,
                    },
                    {
                        name: `Top 5`, value: `${top5} Times`, inline: true,
                    },
                    {
                        name: `Cash`, value: `${cash} Cash`, inline: true,
                    },)
                    embed4.setTimestamp()
                    message.channel.send(embed4)

         } catch(Error) {
             const embed = new Discord.MessageEmbed
             embed.setTitle(`Invalid user or platform. Try again`)
             embed.setColor("#060103")
             message.channel.send(embed)
         }
         
    }
}