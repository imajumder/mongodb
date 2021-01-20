module.exports = {
  category: 'Maths',

    commands: ['div', 'divide'],
    cooldown: '10s',
    guildOnly: false,


    expectedArgs: '<dividend> <divisor>',
    permissionError: 'You need Send messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ({ message, args, text, client, prefix, instance }) => {
      const num1 = +args[0]
      const num2 = +args[1]
  
      message.reply(`The quotient is ${num1 / num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }