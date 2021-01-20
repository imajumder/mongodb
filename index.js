const WOKCommands = require('wokcommands')

const mongoose = require('mongoose')

require('dotenv').config()

const Discord = require('discord.js');

const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION'],
})



const config = require('./config.json')

const fs = require('fs')

const path = require('path')

client.setMaxListeners(50);

const mongo = require('./Util/mongo');

const cron = require('cron')

const connectToMongoDB = async () => {
  await mongo().then(mongoose => {
    try {
      console.log('Connected to mongoose')
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()


client.on('ready', () => {

  console.log('The client is ready!')

 
  setInterval(() => {
      client.user.setActivity(`${client.guilds.cache.size} Servers | ?help`, { type: 'WATCHING' })
  }, 60000); 
  
  const messagesPath = ''

  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

  const disabledDefaultCommands = [
    // 'help',
     //'command',
    // 'language',
     //'prefix',
     //'requiredrole'
  ]

  new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath,
    showWarns: true, 
    dbOptions
  })
  
    .setDefaultPrefix('?')
    .setColor(000000)
    .setBotOwner('614076042901979156')
    .setCategorySettings([
      {
        name: 'Fun',
        emoji: '🤪'
      },
      {
        name: 'Economy',
        emoji: '💳'
      },
      {
        name: 'Configuration',
        emoji: '🖥️',
      },
      {
        name: 'Maths',
        emoji: '🧮',
      },
      {
        name: 'Moderation',
        emoji: '👑',
      }
    ])
})

    
client.login(config.token)
