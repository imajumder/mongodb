module.exports = {
  category: 'Maths',

    commands: ['sub', 'subtract'],
    cooldown: '10s',
    guildOnly: false,

    description: 'Subtracts the 2 inputed numbers',
    expectedArgs: '[ number to be subtracted from ] [ number to subtracted ]',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ({ message, args, text, client, prefix, instance }) => {
      const num1 = +args[0]
      const num2 = +args[1]
  
      message.reply(`The answer is ${num1 - num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }