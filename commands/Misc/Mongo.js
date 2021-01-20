module.exports = {
    category: 'Configuration',
    commands: 'mongo',
    guildOnly: false,
    description: 'This is a test',
    init: (client, instance) => {
       instance.on('databaseConnected', (connection, state) => {
           console.log("State :", state)
       })
    },
    cooldown: '10s',
    callback: ({ message, args, text, client, prefix, instance }) => {
      message.reply('Calculating ping...').then((resultMessage) => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp
  
        resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
      })
    },
  }