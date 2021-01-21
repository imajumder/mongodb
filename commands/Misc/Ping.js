module.exports = {
  commands: 'ping',
  cooldown: '5',

  description: 'Shows the bot\'s ping / latency',
  callback: (message) => {
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })
  },
}