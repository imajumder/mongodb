const wiki = require("wikijs").default();
const { MessageEmbed } = require('discord.js');
const { callback } = require("./Channel-Info");

module.exports = {
    
        commands: "wiki",

    callback: async (message, arguments) => {

        if (!arguments[0]) return message.channel.send("**Enter A Query!**")

        let m = await message.channel.send({
            embed: {
                color: "#060103",
                title: `Searching Your Query`,
                description: `Please be patient..`,
            },
        });
        let result;
        const search = await wiki.search(arguments.join(' '));
        if (!search.results.length) {
            return m.edit({
                embed: {
                    color: "#060103",
                    title: "❌ Error Generated",
                    description: "Wikipedia has no idea on what you said",
                    footer: {
                        text: `Generated For ${message.author.username}`,
                    },
                },
            });
        }
        result = await wiki.page(search.results[0]);
        try {
            let description = await result.summary();
            if (description.length > 8192) {
                const FirstEmbed = new MessageEmbed()
                    .setAuthor(result.raw.title)
                    .setColor("#060103")
                    .setDescription(`${description.substring(0, 1950)}...\n  ❌ Error Generated - Looks like you have a long book to learn  click [**here**](${result.raw.fullurl}) to read it`);
                return m.edit(FirstEmbed);
            } if (description.length < 2048) {
                const SecondEmbed = new MessageEmbed()
                    .setAuthor(result.raw.title)
                    .setColor("#060103")
                    .setDescription(`${description.slice(0, 2048)}`)
                return m.edit('', SecondEmbed)
            } if (description.length > 2048) {
                const ThirdEmbed = new MessageEmbed()
                    .setAuthor(result.raw.title)
                    .setColor("#060103")
                    .setDescription(description.slice(0, 2048))
                const FourthEmbed = new MessageEmbed()
                    .setColor("#060103")
                    .setDescription(description.slice(2048, 4096))
                m.edit('', ThirdEmbed)
                message.channel.send('', FourthEmbed)
            } if (description.length > 4096 && description.length < 6144) {
                const FifthEmbed = new MessageEmbed()
                    .setAuthor(result.raw.title)
                    .setColor("#060103")
                    .setDescription(description.slice(0, 2048))
                const SixthEmbed = new MessageEmbed()
                    .setColor("#060103")
                    .setDescription(description.slice(2048, 4096))
                const SeventhEmbed = new MessageEmbed()
                    .setColor("#060103")
                    .setDescription(description.slice(4096, description.length))
                await m.edit('', FifthEmbed)
                message.channel.send(SixthEmbed)
                message.channel.send(SeventhEmbed)
            } if (description.length > 6144 && description.length < 8192) {
                const EightEmbed = new MessageEmbed()
                    .setColor('#060103')
                    .setDescription(description.slice(0, 2048));
                const NinthEmbed = new MessageEmbed()
                    .setColor('#060103')
                    .setDescription(description.slice(2048, 4096));
                const TenthEmbed = new MessageEmbed()
                    .setColor("#060103")
                    .setDescription(description.slice(4096, 6144));
                const EleventhEmbed = new MessageEmbed()
                    .setColor("#060103")
                    .setDescription(description.slice(6144, description.length))
                await m.edit('', EightEmbed);
                message.channel.send(NinthEmbed);
                message.channel.send(TenthEmbed);
                message.channel.send(EleventhEmbed);
            }
        } catch (e){
            return m.edit("Some error occured try again later...")
        }
    }
};