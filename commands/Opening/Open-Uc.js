const economy = require('../../Util/economy')

const Discord = require('discord.js')


const Emerald = require('../../Util/Emerald')

const Ruby = require('../../Util/Ruby')

const Diamond = require('../../Util/Diamonds')

const commonchest = require('../../Util/Uncommon-Chest')

const Gold = require('../../Util/Golds')

const Sapphire = require('../../Util/Sapphire')

module.exports = {
  commands: ['open-uncommonchest', 'open-uc'],
  expectedArgs: "[ Mention ]",
  description: "Shows the users current balance",
  callback: async (message, arguments) => {

    const chestsToGive = arguments[0]

    const userId = message.author.id

    if (isNaN(chestsToGive)) {
      const embed4 = new Discord.MessageEmbed
      embed4.setTitle('❌ Error Generated')
      embed4.setColor('#060103')
      embed4.setDescription(`An amount to open has not been specified..`)
      embed4.setFooter(`Generated For ${message.author.username}`)
      embed4.setTimestamp
      message.reply(embed4)
      return
    }

    
    if (chestsToGive === '0') {
      const embed4 = new Discord.MessageEmbed
      embed4.setTitle('❌ Error Generated')
      embed4.setColor('#060103')
      embed4.setDescription(`0 isn't an valid amount try entering 1`)
      embed4.setFooter(`Generated For ${message.author.username}`)
      embed4.setTimestamp()
      message.reply(embed4)
      return
    }

    
    const chestowned = await commonchest.getUncommonChest(userId)
    if(chestsToGive > chestowned) {
      const embed4 = new Discord.MessageEmbed
      embed4.setTitle('❌ Error Generated')
      embed4.setColor('#060103')
      embed4.setDescription(`You do not have enough chests to open.`)
      embed4.setFooter(`Generated For ${message.author.username}`)
      embed4.setTimestamp()
      message.reply(embed4)
      return
    }
    

      const random = Math.floor((Math.random() * 5) + 1)

  


    if(random === 1){

      const commonchests = await commonchest.addUncommonChest(
        userId,
        chestsToGive * -1,
      )


        const random1 = Math.floor((Math.random() * 25) + 10) * chestsToGive
        const random2 = Math.floor((Math.random() * 20) + 10) * chestsToGive
        const new1 = await Emerald.addEmeraldsChest(userId, random1)  
        const new2 = await Ruby.addRubyChest(userId, random2) 

        const embed = new Discord.MessageEmbed
        embed.setTitle(`${chestsToGive} Uncommon Chests Successfully Opened`)
        embed.setColor('#060103')
        embed.setDescription(`Emeralds Obtainded ~ ${random1}
        Rubies Obtained ~ ${random2}`)
        embed.setFooter(`Generated For ${message.author.username}`)
        embed.setTimestamp()

        message.channel.send(embed)
        return
    }
    if(random === 2) {

      const commonchests = await commonchest.addUncommonChest(
        userId,
        chestsToGive * -1,
      )


      const random1 = Math.floor((Math.random() * 18) + 5)* chestsToGive
      const random2 = Math.floor((Math.random() * 15) + 5)* chestsToGive
      const random3 = Math.floor((Math.random() * 19) + 5)* chestsToGive
      const random4 = Math.floor((Math.random() * 7) + 2)* chestsToGive
      const new1 = await Ruby.addRubyChest(userId, random2)
      const new2 = await Gold.addGoldChest(userId,random3)
      const new3 = await Emerald.addEmeraldsChest(userId, random1)
      const new4 = await Diamond.addDiamondsChest(userId, random4)

      const embed = new Discord.MessageEmbed
        embed.setTitle(`${chestsToGive} Uncommon Chests Successfully Opened`)
        embed.setColor('#060103')
        embed.setDescription(`Emeralds Obtainded ~ ${random1}
        Rubies Obtained ~ ${random2}
        Gold Obtained ~ ${random3}
        Diamonds Obtained ~ ${random4}`)
        embed.setFooter(`Generated For ${message.author.username}`)
        embed.setTimestamp()

        message.channel.send(embed)
      return
    }
    if(random === 3) {

      const commonchests = await commonchest.addUncommonChest(
        userId,
        chestsToGive * -1,
      )
      
      const random1 = Math.floor((Math.random() * 15) + 2)* chestsToGive
      const random2 = Math.floor((Math.random() * 14) + 3)* chestsToGive
      const random3 = Math.floor((Math.random() * 7) + 2)* chestsToGive
      const new1 = await Emerald.addEmeraldsChest(userId, random1)
      const new2 = await Sapphire.addSapphireChest(userId, random2)
      const new3 = await Diamond.addDiamondsChest(userId, random3)

      const embed = new Discord.MessageEmbed
      embed.setTitle(`${chestsToGive} Uncommon Chests Successfully Opened`)
      embed.setColor('#060103')
      embed.setDescription(`Emeralds Obtainded ~ ${random1}
      Sapphires Obtained ~ ${random2}
      Diamonds Obtained ~ ${random3}`)
      embed.setFooter(`Generated For ${message.author.username}`)
      embed.setTimestamp()

      message.channel.send(embed)
      return
    }
    if(random === 4) {

      const commonchests = await commonchest.addUncommonChest(
        userId,
        chestsToGive * -1,
      )

      const random1 = Math.floor((Math.random() * 30) + 15)* chestsToGive
      const random2 = Math.floor((Math.random() * 25) + 15)* chestsToGive
      const new1 = await Diamond.addDiamondsChest(userId, random2)
      const new2 = await Gold.addGoldChest(userId, random1)

      const embed = new Discord.MessageEmbed
        embed.setTitle(`${chestsToGive} Uncommon Chests Successfully Opened`)
        embed.setColor('#060103')
        embed.setDescription(`Gold Obtainded ~ ${random1}
        Diamonds Obtained ~ ${random3}`)
        embed.setFooter(`Generated For ${message.author.username}`)
        embed.setTimestamp()

        message.channel.send(embed)
      return
    }
    if(random === 5){
      const commonchests = await commonchest.addUncommonChest(
        userId,
        chestsToGive * -1,
      )

      const random1 = Math.floor((Math.random() * 13) + 4)* chestsToGive
      const random2 = Math.floor((Math.random() * 17) + 5)* chestsToGive
      const random3 = Math.floor((Math.random() * 15) + 3)* chestsToGive
      const new1 = await Sapphire.addSapphireChest(userId, random1)
      const new2 = await Emerald.addEmeraldsChest(userId, random2)
      const new3 = await Ruby.addRubyChest(userId, random3)


     const embed = new Discord.MessageEmbed
        embed.setTitle(`${chestsToGive} Uncommon Chests Successfully Opened`)
        embed.setColor('#060103')
        embed.setDescription(`Sapphires Obtainded ~ ${random1}
        Emeralds Obtained ~ ${random2}
        Rubies Obtained ~ ${random3}`)
        embed.setFooter(`Generated For ${message.author.username}`)
        embed.setTimestamp()

        message.channel.send(embed)
      return
    }
  }
}