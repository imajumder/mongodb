const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { news_API } = require('../../config');

module.exports = {
   
        commands: 'news',
      
    
    callback: async (message, arguments) => {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=5&apiKey=${news_API}`
            );
            const json = await response.json();
            const articleArr = json.articles;
            let processArticle = article => {
                const embed = new MessageEmbed()
                    .setColor('#060103')
                    .setTitle(article.title)
                    .setAuthor(article.author)
                    .setDescription(article.description)
                    .setThumbnail(article.urlToImage)
                    .setTimestamp(article.publishedAt)
                    .setFooter(`Generated for ${message.author.username} Published At`);
                return embed;
            };
            async function processArray(array) {
                for (const article of array) {
                    const msg = await processArticle(article);
                    message.channel.send(msg);
                }
            }
            await processArray(articleArr);
        } catch (e) {

            const embed = new MessageEmbed()
            .setTitle(`❌ Error Generated`)
            .setDescription(`A error occured in recieving the news.. Please try later`)
            .setColor(`#060103`)
            .setFooter(`Generated for ${message.author.username}`)
            message.channel.send(embed);
        }
    }
};