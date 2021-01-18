module.exports = {
    commands: ['trilgt', 'trianglelength'],
    expectedArgs: '<side> <side> <side>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 3,
    maxArgs: 3,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]

      const num2 = +arguments[1]

      const num3 = +arguments[2]

      const num4 = num1 + num2 + num3
  
      message.reply(`The Perimeter of Triangle with sides ${num1}, ${num2} and ${num3} is ${num4}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }