const  Discord = require('discord.js')

module.exports = {
  commands: ['help', 'h', 'support'],
  description: "Describes all of this bot's commands",
  callback: (message, arguments, text) => {

     message.author.send(`Hey there.. Thanks for using Rigurd, You can also check out the list of commands supported by me on this site http://rigurd.rf.gd
     You can use this link to join the Rigurd Support Server https://discord.gg/k6CzQtZYjf`)
  }
}