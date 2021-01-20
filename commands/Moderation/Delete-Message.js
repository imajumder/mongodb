module.exports = {
  category: 'Moderation',
  commands: ['cc', 'clearchannel'],
  guildOnly: true,

  cooldown: '15s',
  minArgs: 0,
  maxArgs: 0,
  expectedArgs: '',
  callback: ({ message, args, text, client, prefix, instance }) => {

          message.channel.bulkDelete(100).then(() => {
          message.channel.send("Deleted messages").then(message => message.delete(3000));
        })
      
   },
   permissions: 'MANAGE_MESSAGES',
   requiredRoles: [],
}