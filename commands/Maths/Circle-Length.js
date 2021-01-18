module.exports = {
    commands: ['cirlgt', 'circlelength'],
    expectedArgs: '<number to be added> <number to be added>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]

      const num2 = num1 * 3.14 * 2
  
      message.reply(`The circumference of a circle with radius ${num1} is ${num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }