module.exports = {
  category: 'Maths',

    commands: ['sqrlgt', 'squarelength'],
    cooldown: '10s',
    guildOnly: false,
    description: 'Finds the perimeter of the square',
    expectedArgs: '[ number for length of each side ]',
    permissionError: 'You need Send Messages permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: ({ message, args, text, client, prefix, instance }) => {
      const num1 = +args[0]

      const num2 = num1 * 4
  
      message.reply(`The Lenght of a Square with side of ${num1} is ${num2}`)
    },
    permissions: 'SEND_MESSAGES',
    requiredRoles: [],
  }