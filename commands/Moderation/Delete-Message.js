module.exports = {
  
  commands: ['delmsg'],

  description: 'Deletes an random amount of messages',
  expectedArgs: '',
  callback: (message, arguments) => {


    const args = arguments[0]

          message.channel.bulkDelete(args + 1).then(() => {
          message.channel.send("Deleted messages").then(message => message.delete(3000));
        })
      
   },
   permissions: 'BAN_MEMBERS',
   requiredRoles: [],
}