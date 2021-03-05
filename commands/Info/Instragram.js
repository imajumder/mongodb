const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const request = require('request')
const language = require('../../Language')


module.exports = {
  
        commands: "instragram",
    
    callback: async ( message, arguments) => {

      const { guild } = message


        const embed1 = new MessageEmbed
        embed1.setTitle(`${language(guild, 'INSTRAGRAM1')}`)
        embed1.setColor(`#060103`)

        const name = arguments.join(" ");

        if (!name) {

            const embed = new MessageEmbed
            embed.setTitle(`${language(guild, 'INSTRAGRAM2')}`)
            embed.setColor(`#060103`)

            
            return message.channel.send(embed)
        }

        const url = `https://instagram.com/${name}/?__a=1`;

        const options = {
            method: 'GET',
            url: url,
            headers: {
            }
          };
          
          request(options, function (error, response, body) {
              try {

                const res = response.toJSON()

                const sta = res.body

                const stats = JSON.parse(sta)

                const account = stats.graphql.user

                const embed = new MessageEmbed()
                .setColor("#060103")
                .setTitle(account.full_name)
                .setURL(`https://instagram.com/${name}`)
                .setThumbnail(account.profile_pic_url_hd)
                .setDescription(`${language(guild, 'INSTRAGRAM3')}`)
                .addField(`**${languag(guild, 'INSTRAGRAM4')}**`, `${account.username}`, true)
                .addField(`**${language(guild, 'INSTRAGRAM5')}**`, `${account.full_name}`, true)
                .addField(`${language(guild, 'INSTRAGRAM6')}`, `${account.is_private ? `${language(guild, 'INSTRAGRAM11')}` : `${language(guild, 'INSTRAGRAM12')}`}`, true)
                .addField(`${language(guild, 'INSTRAGRAM7')}`, `${account.edge_owner_to_timeline_media.count}`, true)
                .addField(`${language(guild, 'INSTRAGRAM8')}`, `${account.edge_followed_by.count}`, true)
                .addField(`${language(guild, 'INSTRAGRAM9')}`, `${account.edge_follow.count}`, true)
              
                .addField(`${language(guild, 'INSTRAGRAM10')}`, `${account.biography.length == 0 ? `${language(guild, 'INSTRAGRAM13')}` : account.biography}`, true)
    
            message.channel.send(embed);

              }catch (err) {

                const embed1 = new MessageEmbed
                embed1.setTitle(`${language(guild, 'INSTRAGRAM1')}`)
                embed1.setColor(`#060103`)
                message.channel.send(embed1)
              }
          })

    }
}