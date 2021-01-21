module.exports = {
    commands: ['cool', 'howcool'],
    cooldown: '5',
    minArgs: 1,
    maxArgs: 1,
    description: 'Tells how cool the targeted user is',
    expectedArgs: '[mention]',
    callback: ( message, arguments) => {
   
    const mention = arguments[0]

    const ment = message.mentions.users.first();

    message.channel.send(`${mention} is ${Math.floor(Math.random() * 100) + 1}% cool!`)

   },
   permissions: 'SEND_MESSAGES',
   requiredRoles: [],

}
