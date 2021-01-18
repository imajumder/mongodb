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
        [cm, cleanmeme] ~ Post a clean meme from reddit
        [q, quote] ~ Sends a random quote
        ban [Mention] ~ Bans a member {only avaible to those with required permissions}
        kick [Mention] ~ Kicks a member {only avaible to those with required permissions}
        cool [Mention] ~ Tells how cool you are randomly
        [cc, clearchannel] ~ Deletes a messages {Mods}
        [bal, balance] [Mention (Optional) ] ~ Shows your current amount of money
        [addbal, addbalance] ~ adds a certain amount to your balance {Administrator}
        [pay] [Mention] ~ Pays a certain amount to mention {Note : Deducted money from your balance}
        [mh, math help] ~ Shows all the Maths-involved commands`)

      
   },
   permissions: 'SEND_MESSAGES',
   requiredRoles: [],
}