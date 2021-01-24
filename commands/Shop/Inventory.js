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


    const userId = message.author.id

    const Goldowned = await Gold.getGoldChest(userId)

    const emeraldowned = await Emerald.getEmeraldsChest(userId)

    const sapphireowned = await Sapphire.getSapphireChest(userId)

    const diamondowned = await Diamond.getDiamondsChest(userId)

    const rubyowned = await Ruby.getRubyChest(userId)

    const cchestowned = await CommonChest.getCommonChest(userId)





  }
}