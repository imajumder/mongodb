const economy = require("../../Util/economy");

module.exports = {
  category: 'Fun',
  cooldown: '15s',
  guildOnly: true,

  commands: ['rob'],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '[mention]',
  
  callback: async ({ message, args, text, client, prefix, instance }) => {

    let taggedUser = message.mentions.users.first();
    let bal = 100
  
  let id = taggedUser.id
  let username = taggedUser.username
  let name = "<" + "@" + id + ">" 
  const coins = Math.floor((Math.random() * 100) + 10)
  let robreply = [`Hahahahahaha.. You paid ${coins} coins to the person you stole from.`, `Nice.. You earned ${coins} coins from ${name}.`]
  let selfname = [`Why are trying to rob yourself..`, `If you have lots of money better donate it to charity.`, `Search google for a better way to burn money..`, `Better give that money to me`]
  let botname = [`You wanna rob machines.. Shame on you.`, `Sadly that is a bot.. you can't rob them.`, `Try risking your life again.`, `Feels bad to be you huh....`]
  
  let coin2 = coins * 2


    if (id === message.author.id) {
    const Respo = Math.floor(Math.random() * selfname.length);
    message.reply(selfname[Respo]);    
   }else if (id === '781466481929224203') {
    const Respons = Math.floor(Math.random() * botname.length);
    message.reply(botname[Respons]);    
   }else  {
    const Response = Math.floor(Math.random() * robreply.length);
        message.channel.send(robreply[Response]);   
        
   }

  },
}