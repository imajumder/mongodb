const economy = require('./../../Util/economy')

module.exports = {
  category: 'Economy',
  commands: ['addbalance', 'addbal'],
  description: 'Adds a certain amount of coins to the mentioned users balance',
  guildOnly: true,
  init: (client, instance) => {
    instance.on('databaseConnected', (connection, state) => {
        console.log("State :", state)
    })
 },

  cooldown: '1m',
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<The target's @> <coin amount>",
  permissionError: 'You must be an administrator to use this command.',
  permissions: 'ADMINISTRATOR',
  callback: async ({ message, args, text, client, prefix, instance }) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add coins to.')
      return
    }

    const coins = args[1]
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