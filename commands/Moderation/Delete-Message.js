module.exports = {
  commands: ['cc', 'clearchannel'],
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: '',
  callback: (message, arguments, text) => {

          message.channel.bulkDelete(100).then(() => {
          message.channel.send("Deleted messages").then(message => message.delete(3000));
        })
      
   },
   permissions: 'MANAGE_MESSAGES',
   requiredRoles: [],
}