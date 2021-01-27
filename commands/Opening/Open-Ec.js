const economy = require('../../Util/economy')

const Discord = require('discord.js')


const Emerald = require('../../Util/Emerald')

const Ruby = require('../../Util/Ruby')

const Diamond = require('../../Util/Diamonds')

const commonchest = require('../../Util/Epic-Chest')

const Gold = require('../../Util/Golds')

const Sapphire = require('../../Util/Sapphire')

module.exports = {
  commands: ['open-epicchest', 'open-ec'],
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

    
    const chestowned = await commonchest.getEpicChest(userId)
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

      const commonchests = await commonchest.addEpicChest(
        userId,
        chestsToGive * -1,
      )


        const random1 = Math.floor((Math.random() * 70) + 40) * chestsToGive
        const random2 = Math.floor((Math.random() * 80) + 40) * chestsToGive
        const new1 = await Emerald.addEmeraldsChest(userId, random1)  
        const new2 = await Ruby.addRubyChest(userId, random2) 

        const embed = new Discord.MessageEmbed
        embed.setTitle(`${chestsToGive} Epic Chests Successfully Opened`)
        embed.setColor('#060103')
        embed.setDescription(`Emeralds Obtainded ~ ${random1}
        Rubies Obtained ~ ${random2}`)
        embed.setFooter(`Generated For ${message.author.username}`)
        embed.setTimestamp()

        message.channel.send(embed)
        return
    }
    if(random === 2) {

      const commonchests = await commonchest.addEpicChest(
        userId,
        chestsToGive * -1,
      )


      const random1 = Math.floor((Math.random() * 70) + 40)* chestsToGive
      const random2 = Math.floor((Math.random() * 70) + 40)* chestsToGive
      const random3 = Math.floor((Math.random() * 70) + 40)* chestsToGive
      const random4 = Math.floor((Math.random() * 50) + 30)* chestsToGive
      const new1 = await Ruby.addRubyChest(userId, random2)
      const new2 = await Gold.addGoldChest(userId,random3)
      const new3 = await Emerald.addEmeraldsChest(userId, random1)
      const new4 = await Diamond.addDiamondsChest(userId, random4)

      const embed = new Discord.MessageEmbed
        embed.setTitle(`${chestsToGive} Epic Chests Successfully Opened`)
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

      const commonchests = await commonchest.addEpicChest(
        userId,
        chestsToGive * -1,
      )
      
      const random1 = Math.floor((Math.random() * 70) + 40)* chestsToGive
      const random2 = Math.floor((Math.random() * 70) + 40)* chestsToGive
      const random3 = Math.floor((Math.random() * 50) + 35)* chestsToGive
      const new1 = await Emerald.addEmeraldsChest(userId, random1)
      const new2 = await Sapphire.addSapphireChest(userId, random2)
      const new3 = await Diamond.addDiamondsChest(userId, random3)

      const embed = new Discord.MessageEmbed
      embed.setTitle(`${chestsToGive} Epic Chests Successfully Opened`)
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

      const commonchests = await commonchest.addEpicChest(
        userId,
        chestsToGive * -1,
      )

      const random1 = Math.floor((Math.random() * 90) + 60)* chestsToGive
      const random2 = Math.floor((Math.random() * 100) + 50)* chestsToGive
      const new1 = await Diamond.addDiamondsChest(userId, random2)
      const new2 = await Gold.addGoldChest(userId, random1)

      const embed = new Discord.MessageEmbed
        embed.setTitle(`${chestsToGive} Epic Chests Successfully Opened`)
        embed.setColor('#060103')
        embed.setDescription(`Gold Obtainded ~ ${random1}
        Diamonds Obtained ~ ${random3}`)
        embed.setFooter(`Generated For ${message.author.username}`)
        embed.setTimestamp()

        message.channel.send(embed)
      return
    }
    if(random === 5){
      const commonchests = await commonchest.addEpicChest(
        userId,
        chestsToGive * -1,
      )

      const random1 = Math.floor((Math.random() * 70) + 40)* chestsToGive
      const random2 = Math.floor((Math.random() * 70) + 40)* chestsToGive
      const random3 = Math.floor((Math.random() * 75) + 45)* chestsToGive
      const new1 = await Sapphire.addSapphireChest(userId, random1)
      const new2 = await Emerald.addEmeraldsChest(userId, random2)
      const new3 = await Ruby.addRubyChest(userId, random3)


     const embed = new Discord.MessageEmbed
        embed.setTitle(`${chestsToGive} Epic Chests Successfully Opened`)
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