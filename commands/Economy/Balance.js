const economy = require('./../../Util/economy')

module.exports = {
  commands: ['bal', 'balance'],
  maxArgs: 1,
  expectedArgs: "<The target's @>",
  permissionError: 'You must have Send messages permission to use this command',
  permissions: 'SEND_MESSAGES',
  callback: async (message, arguments) => {

    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    let botping = [`Are you trying to mention a bot `, `You can't mention them kiddo `, `you seriouly thought i would accept that..`, `Nice try.....`, `Hey thats me...`]

    let selfid =  message.author.id

    let id = target.id

    let sameuser = [`No need to mention yourself just type "?bal"`, `If you have money to waste better donate it to charity`, `What is wrong with you kid `, `Nice try.....`]

    if(target.id === '781466481929224203') {
      let samebot = Math.floor(Math.random() * botping.length);
      message.reply(botping [samebot]);
    } 
 

    const guildId = message.guild.id
    const userId = target.id

    const coins = await economy.getCoins(guildId, userId)

    message.reply(`That user has ${coins} coins!`)
    
  },
}