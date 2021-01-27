module.exports = {
    commands: ['delchannel', 'deletechannel'],
    description: "Describes all of this bot's commands",
    callback: (message, arguments, text) => {
        message.channel.delete()
    }
}