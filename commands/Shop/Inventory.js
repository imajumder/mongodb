const economy = require('../../Util/economy')

const Discord = require('discord.js')


const Emerald = require('../../Util/Emerald')

const Ruby = require('../../Util/Ruby')

const Diamond = require('../../Util/Diamonds')

const Gold = require('../../Util/Golds')

const Sapphire = require('../../Util/Sapphire')

const CommonChest = require('../../Util/Common-Chest')

const UncommonChest = require('../../Util/Uncommon-Chest')

const RareChest = require('../../Util/Rare-Chest')

const EpicChest = require('../../Util/Epic-Chest')

const LegendaryChest = require('../../Util/Legendary-Chest')

module.exports = {
  commands: ['inventory', 'inv'],
  expectedArgs: "[ Mention ]",
  description: "Shows the users current balance",
  callback: async (message, arguments) => {

    const target = message.author


    const userId = message.author.id

    const Goldowned = await Gold.getGoldChest(userId)

    const emeraldowned = await Emerald.getEmeraldsChest(userId)

    const sapphireowned = await Sapphire.getSapphireChest(userId)

    const diamondowned = await Diamond.getDiamondsChest(userId)

    const rubyowned = await Ruby.getRubyChest(userId)

    const cchestowned = await CommonChest.getCommonChest(userId)

    const uchestowned = await UncommonChest.getUncommonChest(userId)

    const rchestowned = await RareChest.getRareChest(userId)

    const echest = await EpicChest.getEpicChest(userId)

    const lchest = await LegendaryChest.getLegendaryChest(userId)

    const embed = new Discord.MessageEmbed
    embed.setTitle(`${message.author.username}'s Inventory`)
    embed.setColor('#060103')
    embed.setThumbnail(target.displayAvatarURL())
    embed.setDescription(`Common Chest Owned ~ ${cchestowned}
    Uncommon Chest Owned ~ ${uchestowned}
    Rare Chest Owned ~ ${rchestowned}
    Epic Chest Owned ~ ${echest}
    Legendary Chest Owned ~ ${lchest}
    Emeralds Owned ~ ${emeraldowned}
    Rubies Owned ~ ${rubyowned}
    Sapphires Owned ~ ${sapphireowned}
    Gold Owned ~ ${Goldowned}
    Diamonds Owned ~ ${diamondowned}`)
    embed.setFooter(`${message.author.username}'s Inventory | Requested`)
    embed.setTimestamp()
    message.channel.send(embed)
    




  }
}