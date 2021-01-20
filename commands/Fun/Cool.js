module.exports = {
    category: 'Fun',
    cooldown: '5s',
    guildOnly: true,

    commands: ['cool', 'howcool'],
    minArgs: 1,
    maxArgs: 1,
    description: 'Tells how cool the targeted user is',
    expectedArgs: '[mention]',
    callback: ({ message, args, text, client, prefix, instance }) => {
   
    const mention = args[0]

    const ment = message.mentions.users.first();

    message.channel.send(`${mention} is ${Math.floor(Math.random() * 100) + 1}% cool!`)

   },
   permissions: 'SEND_MESSAGES',
   requiredRoles: [],

}
