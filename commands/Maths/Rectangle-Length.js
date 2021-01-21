module.exports = {
  category: 'Maths',
    commands: ['reclgt', 'rectanglelength'],
    cooldown: '10',
    guildOnly: false,


    expectedArgs: '<number for length> <number for breadth>',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: ( message, arguments) => {
      const num1 = +arguments[0]

      const num2 = +arguments[1]

      const num3 = num1 + num2

      const num4 = num3 * 2
  
      message.reply(`The Perimeter of a rectangle with Length = ${num1}, Breadth = ${num2} is ${num4}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }