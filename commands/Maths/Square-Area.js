module.exports = {
  category: 'Maths',

    commands: ['sqrarea', 'squarearea'],
    cooldown: '10',
    guildOnly: false,

    expectedArgs: '<number for length of each side>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: ( message, arguments) => {
      const num1 = +arguments[0]

      const num2 = num1 * num1
  
      message.reply(`The Area of a Square with side of ${num1} is ${num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }