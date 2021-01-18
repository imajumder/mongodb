module.exports = {
  commands: ['rob'],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '[mention]',
  
  callback: (message, client) => {
    let balance = 10000
  let taggedUser = message.mentions.users.first();
  let id = taggedUser.id
  let username = taggedUser.username
  let name = "<" + "@" + id + ">" 
  let money = Math.floor((Math.random() * 10000) + 100)
  let robreply = [`Hahahahahaha.. You paid ${money} coins to the person you stole from. You now have ${balance - money}`, `Nice.. You earned ${money} coins from ${name}. You now have ${balance + money}`]
  let selfname = [`Why are trying to rob yourself..`, `If you have lots of money better donate it to charity.`, `Search google for a better way to burn money..`, `Better give that money to me`]
  let botname = [`You wanna rob machines.. Shame on you.`, `Sadly that is a bot.. you can't rob them.`, `Try risking your life again.`, `Feels bad to be you huh....`]
  
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