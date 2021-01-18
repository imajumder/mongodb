module.exports = {
    commands: ['div', 'divide'],
    expectedArgs: '<dividend> <divisor>',
    permissionError: 'You need Send messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]
      const num2 = +arguments[1]
  
      message.reply(`The quotient is ${num1 / num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }