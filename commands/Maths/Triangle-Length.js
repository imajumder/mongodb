module.exports = {
  category: 'Maths',

    commands: ['trilgt', 'trianglelength'],
    cooldown: '10s',
    guildOnly: false,


    expectedArgs: '<side> <side> <side>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 3,
    maxArgs: 3,
    callback: ({ message, args, text, client, prefix, instance }) => {
      const num1 = +args[0]

      const num2 = +args[1]

      const num3 = +args[2]

      const num4 = num1 + num2 + num3
  
      message.reply(`The Perimeter of Triangle with sides ${num1}, ${num2} and ${num3} is ${num4}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }