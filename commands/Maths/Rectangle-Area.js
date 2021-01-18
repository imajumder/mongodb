module.exports = {
    commands: ['recarea', 'rectanglearea'],
    expectedArgs: '<number for length> <number for breadth>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]

      const num2 = +arguments[1]

      const num3 = num1 * num2
  
      message.reply(`The Area of a rectangle with Length = ${num1}, Breadth = ${num2} is ${num3}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }