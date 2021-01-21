const Discord = require('discord.js');

const client = new Discord.Client;

const config = require('./config.json')

client.setMaxListeners(50);

const mongo = require('./Util/mongo');

const loadfeatures = require('./features/load-features')

const loadCommands = require('./commands/load-commands')


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


  loadfeatures(client)

  loadCommands(client)

})

    
client.login(config.token)
