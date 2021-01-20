module.exports = {
  category: 'Maths',
    commands: ['cirarea', 'circlearea'],
    cooldown: '10s',
    guildOnly: false,

    description: 'Finds the area of the circle using the inputed radius',
    expectedArgs: '[ number to be used as radius ]',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: ({ message, args, text, client, prefix, instance }) => {
      const num1 = +args[0]

      const num2 = num1 * num1 * 3.14 
  
      message.reply(`The area of a circle with radius ${num1} is ${num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }