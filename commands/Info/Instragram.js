const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const request = require('request')

module.exports = {
  
        commands: "instragram",
    
    callback: async ( message, arguments) => {

        const embed1 = new MessageEmbed
        embed1.setTitle(`❌ Error Generated`)
        embed1.setDescription(`Couldn't find a person with that username`)
        embed1.setColor(`#060103`)
        embed1.setFooter(`Generated for ${message.author.username}`)

        const name = arguments.join(" ");

        if (!name) {

            const embed = new MessageEmbed
            embed.setTitle(`❌ Error Generated`)
            embed.setDescription(`Please enter a name`)
            embed.setColor(`#060103`)
            embed.setFooter(`Generated for ${message.author.username}`)

            
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
                .setDescription("Profile information")
                .addField("**Username**", `${account.username}`, true)
                .addField("**Full name**", `${account.full_name}`, true)
                .addField("**Private account**", `${account.is_private ? "Yes 🔐" : "No 🔓"}`, true)
                .addField("**Posts**", `${account.edge_owner_to_timeline_media.count}`, true)
                .addField("**Followers**", `${account.edge_followed_by.count}`, true)
                .addField("**Following**", `${account.edge_follow.count}`, true)
              
                .addField("**Biography**", `${account.biography.length == 0 ? "none" : account.biography}`, true)
    
            message.channel.send(embed);

              }catch (err) {

                const embed1 = new MessageEmbed
                embed1.setTitle(`❌ Error Generated`)
                embed1.setDescription(`Couldn't find a person with that username`)
                embed1.setColor(`#060103`)
                embed1.setFooter(`Generated for ${message.author.username}`)
                message.channel.send(embed1)
              }
          })

    }
}