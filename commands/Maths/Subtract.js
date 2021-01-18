module.exports = {
    commands: ['sub', 'subtract'],
    expectedArgs: '<number to be subtracted from> <number to subtracted>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]
      const num2 = +arguments[1]
  
      message.reply(`The answer is ${num1 - num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }