const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./config.json')

const fs = require('fs')

const path = require('path')

const CronJob = require('cron').CronJob

client.setMaxListeners(50);

const mongo = require('./Util/mongo');

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
  client.user.setActivity(' ?help ~ Rigurd.gg')

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')


})

client.login(config.token)
