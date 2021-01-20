module.exports = {
  category: 'Configuration',
  commands: 'ping',
  guildOnly: false,
  description: 'Shows the bot\'s ping / latency',
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })
  },
}