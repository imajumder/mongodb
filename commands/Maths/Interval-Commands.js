module.exports = {
    category: 'Maths',
  
      commands: ['a', 'addit'],
      cooldown: '10s',
      guildOnly: false,
  
      expectedArgs: '<number to be added> <number to be added>',
      permissionError: 'You need Send Messages permissions to run this command',
      minArgs: 2,
      maxArgs: 2,
      callback: ({ message, args, text, client, prefix, instance }) => {
        


        
      },
      permissions: 'SEND_MESSAGES',
      requiredRoles: [],
    }