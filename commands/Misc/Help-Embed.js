const Discord = require('discord.js')
module.exports = {
    commands: ['help', 'h', 'support', 'Help', 'HELP', 'Support', 'commands', 'Commands', 'Command','command'],
    minArgs: 0,
    maxArgs: 1,
    expectedArgs: '',
    
    callback: (message, text, client) => {

        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: 'Rigurd commands support',
              icon_url: 'https://images.designtrends.com/wp-content/uploads/2016/02/24095354/Cool-Shipping-Company-Isometric-Logo.jpg',
            },
            title: "Support for Rigurd",
            url: "http://discord.gg/2euNa4bjPc",
            description: `All the commands supported by Rigurr.gg. Type \'?help [command] to get more info about the command`,
            fields: [{
                name: "clearchannel [ Aliases : cc ]",
                value: "Deletes messages [ Avaible to those with permissions ]"
              },
              {
                name: "quote [ Aliases : q ]",
                value: "ends a random quote to enlighten your mood"
              },
              {
                name: "meme [ Aliases : m ]",
                value: "Send a random meme from r/memes"
              },
              {
                name: "ban [ Mentioned User ]",
                value: "Bans the mentioned user [ Avaible to those with permissions ]"
              },
              {
                name: "kick [ Mentioned user]",
                value: "Kicks the mentioned user [ Avaible to those with permissions ]"
              },
              {
                name: "howcool [ Aliases : cool ]  [ Mentioned user ]",
                value: "Tells how cool you are [ NOT RANDOMLY ]"
              },
              {
                name: "kill [ Mentioned user ]",
                value: "Kills the mentioned user..."
              },
              {
                name: "rob [ Mentioned user ]",
                value: "Robs the person of a random amount [ Under progress ]"
              },
              {
                name: "bal [ Aliases : balance ] [ Mention ( Optional ) ]",
                value: "Tell yours or the mentioned users balance"
              },
              {
                name: "addbal [ Aliases : addbalance ] [ Mentioned user ] [ Administrator ]",
                value: "Adds a certain amount of coins to the mentioned users balance without deducting any from yours"
              },
              {
                name: "pay [ Mentioned user ] [ Note : Deducted money from your balance ]",
                value: "Pays the mentioned user a certain amount"
              },
              {
                name: "mathhelp [ Aliases : mh ]",
                value: "Shows all math commands"
              },
              {
                name: "setprefix [ Administrator ]",
                value: "Changes the prefix for this bot"
              },
              {
                name: "ping",
                value: "Shows the bot's ping/latency"
              },

            ],
            timestamp: new Date(),
            footer: {
              icon_url: 'https://images.designtrends.com/wp-content/uploads/2016/02/24095354/Cool-Shipping-Company-Isometric-Logo.jpg',
              text: "© Rigurd"
            }
          }
        });
   
    },
    permissions: 'SEND_MESSAGES',
   requiredRoles: [],
}