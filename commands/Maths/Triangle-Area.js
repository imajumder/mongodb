module.exports = {
  category: 'Maths',

    commands: ['triarea', 'trianglearea'],
    cooldown: '10s',
    guildOnly: false,


    expectedArgs: '<height> <base>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ({ message, args, text, client, prefix, instance }) => {
      const num1 = +args[0]

      const num2 = +args[1]

      const num4 = num1 * num2

      const num3 = num4 / 2
  
      message.reply(`The Area of Triangle with height ${num1} and base ${num2} is ${num3}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }