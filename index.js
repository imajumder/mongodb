const WOKCommands = require('wokcommands')
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

client.on('ready', async () => {
  console.log('The client is ready!')
 
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Servers | ?help`, { type: 'WATCHING' })
    }, 60000); 




})

client.on('ready', () => {
  // See the "Language Support" section of this documentation
  // An empty string = ignored
  const messagesPath = ''

  // Used to configure the database connection.
  // These are the default options but you can overwrite them
  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

  // Initialize WOKCommands with specific folders and MongoDB
  new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath,
    showWarns: true, // Show start up warnings
    dbOptions
  })
    // Set your MongoDB connection path
    .setMongoPath("mongodb+srv://Discordbot-Owner:BhXaZosCY6OYbHui@mongodb-discord.oejgy.mongodb.net/MongoDB-Discord?retryWrites=true&w=majority")
    // Set the default prefix for your bot, it is ! by default
    .setDefaultPrefix('?')
    // Set the embed color for your bot. The default help menu will use this. This hex value can be a string too
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
