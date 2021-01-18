module.exports = {
  commands: ['help', 'h', 'support', 'Help', 'HELP', 'Support', 'commands', 'Commands', 'Command','command'],
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: '',
  
  callback: (message, text) => {
    
        message.channel.send(` Here are my supported commands (Till now)
        [h, help] ~ Shows the commands
        kill [Mention] ~ Shows a killed statement directed towards the mentioned user
        rob [Mention] ~ Robs the mentioned user of a random amount
        [q, quote] ~ Sends a random quote
        ban [Mention] ~ Bans a member {only avaible to those with required permissions}
        kick [Mention] ~ Kicks a member {only avaible to those with required permissions}
        cool [Mention] ~ Tells how cool you are randomly
        [cc, clearchannel] ~ Deletes a messages
        [mh, math help] ~ Shows all the Maths-involved commands`)

      
   },
   permissions: 'SEND_MESSAGES',
   requiredRoles: [],
}