const urban = require('relevant-urban');
const { MessageEmbed } = require('discord.js');

module.exports = {
    
        commands: "urban",
       
    callback: async (message, arguments) => {


    const embed = new MessageEmbed
    embed.setTitle(`❌ Error Generated`)
    embed.setDescription(`Please enter something to search`)
    embed.setColor(`#060103`)
    embed.setFooter(`Generated for ${message.author.username}`)
    embed.setTimestamp()

    const embed1 = new MessageEmbed
    embed1.setTitle(`❌ Error Generated`)
    embed1.setDescription(`Looks like I couldn't find anything.`)
    embed1.setColor(`#060103`)
    embed1.setFooter(`Generated for ${message.author.username}`)
    embed1.setTimestamp()

        if(!arguments[0])
        
        return message.channel.send(embed);

        let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
        try {
            let res = await urban(arguments.join(' '))
                if (!res) return message.channel.send(embed1);
                let { word, urbanURL, definition, example, thumbsUp, thumbsDown, author } = res;

                let embed = new MessageEmbed()
                    .setColor("#060103")
                    .setAuthor(`Word - ${word}`)
                    .setThumbnail(image)
                    .setDescription(`**Defintion:**\n*${definition || "No definition"}*\n\n**Example:**\n*${example || "No Example"}*`)
                    .addField('**Rating:**', `**\`Upvotes: ${thumbsUp} | Downvotes: ${thumbsDown}\`**`)
                    .addField("**Link**",  `[link to ${word}](${urbanURL})`)
                    .addField("**Author:**", `${author || "unknown"}`)
                    .setTimestamp()

                message.channel.send(embed)
            
        } catch (e) {


            
            return message.channel.send(embed1)
        }
    }
}