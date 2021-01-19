const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./config.json')

const fs = require('fs')

const path = require('path')

client.setMaxListeners(50);

const mongo = require('./Util/mongo');

const cron = require('cron')

const loadCommands = require('./commands/load-commands')
const commandBase = require('./commands/command-base')
const loadfeatures = require('./features/load-features')

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
  client.user.setActivity("|| ?help || Rigurd.gg ||")

  loadCommands(client)
})

client.login(config.token)
