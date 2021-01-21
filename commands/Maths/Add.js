module.exports = {
  category: 'Maths',

    commands: ['add', 'addition'],
    cooldown: '10',
    guildOnly: false,

    expectedArgs: '<number to be added> <number to be added>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ( message, arguments) => {


      const num1 = +arguments[0]
      const num2 = +arguments[1]
  
      message.reply(`The sum is ${num1 + num2}.`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }