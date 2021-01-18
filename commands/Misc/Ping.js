module.exports = {
  commands: ['ping'],
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: '',
  callback: (message, arguments, text) => {
  
        message.channel.send('Pong')
          
    },
}