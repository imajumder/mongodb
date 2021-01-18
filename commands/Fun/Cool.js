module.exports = {
    commands: ['cool', 'howcool', 'Cool', 'Howcool', 'HowCool', 'howCool', 'HOWCOOL', 'HOWcool', 'howCOOl', 'COOL'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<mention>',
    callback: (message, arguments, text) => {
   
    const mention = arguments[0]

    const ment = message.mentions.users.first();

    message.channel.send(`${mention} is ${Math.floor(Math.random() * 100) + 1}% cool!`)

   },
   permissions: 'SEND_MESSAGES',
   requiredRoles: [],

}
