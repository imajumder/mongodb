const mongo = require('../../Util/mongo')
const verificationSchema = require('../../Schemas/verfication-schema')
const { fetch } = require('../../features/features/verification-channels')

module.exports = {
    commands: ['setverification'],
    expectedArgs: "[ Mention ]",
    description: "Shows the users current balance",
    callback: async (message, arguments) => {
    const seconds = 3

    if (arguments.length !== 2) {
      message
        .reply('You must provide an emoji to react with and a role ID')
        .then((message) => {
          message.delete({
            timeout: 1000 * seconds,
          })
        })

      message.delete()
      return
    }

    const { guild, channel } = message

    let emoji = arguments[0]
    if (emoji.includes(':')) {
      const split = emoji.split(':')
      const emojiName = split[1]

      emoji = guild.emojis.cache.find((emoji) => {
        return emoji.name === emojiName
      })
    }

    const roleId = arguments[1]

    const role = guild.roles.cache.get(roleId)

    if (!role) {
      message.reply('That role does not exist').then((message) => {
        message.delete({
          timeout: 1000 * seconds,
        })
      })

      message.delete()
      return
    }

    message.delete().then(() => {
      channel.messages.fetch({ limit: 1 }).then(async (results) => {
        const firstMessage = results.first()

        if (!firstMessage) {
          channel.send('There is no message to react to').then((message) => {
            message.delete({
              timeout: 1000 * seconds,
            })
          })

          return
        }

        firstMessage.react(emoji)

        await mongo().then(async (mongoose) => {
          try {
            await verificationSchema.findOneAndUpdate(
              {
                _id: guild.id,
              },
              {
                _id: guild.id,
                channelId: channel.id,
                roleId,
              },
              {}
            )
          } finally {
            mongoose.connection.close()
          }
        })

        await fetch()
      })
    })
  }
}