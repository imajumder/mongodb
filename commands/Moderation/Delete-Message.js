module.exports = {
  
  commands: ['cc', 'clearchannel'],

  description: 'Deletes an random amount of messages',
  cooldown: '30',


 
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: '',
  callback: (message) => {

          message.channel.bulkDelete(100).then(() => {
          message.channel.send("Deleted messages").then(message => message.delete(3000));
        })
      
   },
   permissions: 'BAN_MEMBERS',
   requiredRoles: [],
}