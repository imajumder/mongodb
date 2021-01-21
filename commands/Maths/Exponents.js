module.exports = {
  category: 'Maths',

    commands: ['expnum', 'exponent'],
    cooldown: '10',
    guildOnly: false,


    expectedArgs: '<base> <exponent>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ( message, arguments) => {
      const num1 = +arguments[0]

      const num2 = +arguments[1]
  
      message.reply(`The value of ${num1} raised to the power of ${num2} is ` + Math.pow(num1, num2))
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }