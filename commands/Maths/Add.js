const language = require('../language')

module.exports = {
  category: 'Maths',

    commands: ['add', 'addition'],
    cooldown: '10s',
    guildOnly: false,
    description: 'Adds the 2 inputed numbers',

    expectedArgs: '[ number to be added ] [ number to be added ]',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ({ message, args, text, client, prefix, instance }) => {

      const { guild } = message

      const num1 = +args[0]
      const num2 = +args[1]
  
      message.reply(`${language(guild, 'THE_SUM_IS')} ${num1 + num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }