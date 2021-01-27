

module.exports =  {
    commands: ['startgiv'],
    permissions: 'ADMINISTRATOR',
    callback: (message, arguments) => {

    message.delete().then(() => {
      const { guild, channel } = message

      channel.messages.fetch({ limit: 1 }).then((messages) => {
        message = messages.first()

        if (!message) {
          channel.send('There are no messages!')
          return
        }

        if (arguments.includes(':')) {
          const split = arguments.split(':')
          const emojiName = split[1]
          arguments = guild.emojis.cache.find((emoji) => {
            return emoji.name === emojiName
          })
        }

        message.react(arguments)
      })
    })
}
}

