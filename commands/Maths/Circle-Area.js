module.exports = {
    commands: ['cirarea', 'circlearea'],
    expectedArgs: '<number to be added> <number to be added>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]

      const num2 = num1 * num1 * 3.14 
  
      message.reply(`The area of a circle with radius ${num1} is ${num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }