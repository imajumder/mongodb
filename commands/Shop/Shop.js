const Discord = require('discord.js')

module.exports = {
    commands: ['shop'],
    expectedArgs: "[ Mention ]",
    description: "Shows the users current balance",
    callback: async (message, arguments) => {
        
        const embed = new Discord.MessageEmbed
        embed.setTitle(`Chest Shop`)
        embed.setColor('#060103')
        embed.setDescription(`Prices of all the chests which can be used to receive wonderful rewards`)
        embed.addFields({
            name: 'Common Chest',
            value: "750"
        },
        {
            name: "Uncommon Chest",
            value: '1250',
        },
        {
            name: 'Rare Chest',
            value: '1700',
        },
        {
            name: 'Epic Chest',
            value: '2200'
        },
        {
            name: 'Legendary Chest',
            value: '3250'
        })
        embed.setFooter(`Requested by ${message.author.username}`)
        embed.setTimestamp()
        message.channel.send(embed)

    }
}