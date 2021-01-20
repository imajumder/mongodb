module.exports = {
  category: 'Maths',

    commands: ['mult', 'multiply'],
    cooldown: '10s',
    guildOnly: false,

    description: 'Multiplies the 2 inputed numbers',
    expectedArgs: '[ number to be multiplied ] [ number to be multiplied ]',
    permissionError: 'You need send messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ({ message, args, text, client, prefix, instance }) => {
      const num1 = +args[0]
      const num2 = +args[1]
  
      message.reply(`The product is ${num1 * num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }