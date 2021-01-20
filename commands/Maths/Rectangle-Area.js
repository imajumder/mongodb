module.exports = {
  category: 'Maths',

    commands: ['recarea', 'rectanglearea'],
    cooldown: '10s',

    guildOnly: false,

    expectedArgs: '<number for length> <number for breadth>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ({ message, args, text, client, prefix, instance }) => {
      const num1 = +args[0]

      const num2 = +args[1]

      const num3 = num1 * num2
  
      message.reply(`The Area of a rectangle with Length = ${num1}, Breadth = ${num2} is ${num3}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }