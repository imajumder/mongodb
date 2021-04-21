module.exports = {
  
  commands: ['delmsg'],

  description: 'Deletes an random amount of messages',
  expectedArgs: '',
  callback: (message, arguments) => {


    const args = Number(arguments[0])

          message.channel.bulkDelete(args + 1).then(() => {
          message.channel.send("Deleted messages").then(message => message.delete(1200));
        })
      
   },
   permissions: 'BAN_MEMBERS',
   requiredRoles: [],
}