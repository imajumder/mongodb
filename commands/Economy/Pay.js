const economy = require('./../../Util/economy')

module.exports = {
  category: 'Economy',
  guildOnly: true,

  commands: 'pay',
  cooldown: '30s',
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<Target user's @> <Amount of coins>",
  callback: async ({ message, args, text, client, prefix, instance }) => {
    const { guild, member } = message

    const target = message.mentions.users.first()

    let botping = [`Are you trying to mention a bot `, `You can't mention them kiddo `, `you seriouly thought i would accept that..`, `Nice try.....`, `Hey thats me...`]

    let selfid =  message.author.id

    let id = target.id

    let sameuser = [`You wanna pay yourself ??`, `If you have money to waste better donate it to charity`, `What is wrong with you kid `, `Nice try.....`]

    if(target.id === '781466481929224203') {
      let samebot = Math.floor(Math.random() * botping.length);
      message.reply(botping [samebot]);
    } 

    if (id === selfid) {
      let same = Math.floor(Math.random() * sameuser.length);
    message.reply(sameuser [same]);
    }

    if (!target) {
      message.reply('Please specify someone to give coins to.')
      return
    }

    const coinsToGive = args[1]
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of coins to give.')
      return
    }

    const coinsOwned = await economy.getCoins(guild.id, member.id)
    if (coinsOwned < coinsToGive) {
      message.reply(`You do not have ${coinsToGive} coins!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)

    message.reply(
      `You have given <@${target.id}> ${coinsToGive} coins! They now have ${newBalance} coins and you have ${remainingCoins} coins!`
    )
  },
}