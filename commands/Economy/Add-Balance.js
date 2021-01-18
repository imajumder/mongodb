const economy = require('./../../Util/economy')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<The target's @> <coin amount>",
  permissionError: 'You must be an administrator to use this command.',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {
    const mention = message.mentions.users.first()

    let botping = [`Are you trying to mention a bot `, `You can't mention them kiddo `, `you seriouly thought i would accept that..`, `Nice try.....`, `Hey thats me...`]

    let selfid =  message.author.id

    let id = mention.id

    let sameuser = [`Hey thats illegal`, `Get a life !`, `What is wrong with you kid `, `Nice try.....`]

    if(target.id === '781466481929224203') {
      let samebot = Math.floor(Math.random() * botping.length);
      message.reply(botping [samebot]);
    } 

    if (id === selfid) {
      let same = Math.floor(Math.random() * sameuser.length);
    message.reply(sameuser [same]);
    }


    if (!mention) {
      message.reply('Please tag a user to add coins to.')
      return
    }

    const coins = arguments[1]
    if (isNaN(coins)) {
      message.reply('Please provide a valid numnber of coins.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    message.reply(
      `You have given <@${userId}> ${coins} coin(s). They now have ${newCoins} coin(s)!`
    )
  },
}