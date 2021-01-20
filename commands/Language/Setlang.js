const mongo = require('./../../Util/mongo')
const languageSchema = require('./../../Schemas/language-schema')
const { languages } = require('./../../Util/Lang.json')
const { setLanguage } = require('./../../Util/Language')

module.exports = {
  commands: ['lang', 'language'],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<Language>',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {
    const { guild } = message

    const targetLanguage = arguments[0].toLowerCase()
    if (!languages.includes(targetLanguage)) {
      message.reply('That language is not supported.')
      return
    }

    setLanguage(guild, targetLanguage)

    await mongo().then(async (mongoose) => {
      try {
        await languageSchema.findOneAndUpdate(
          {
            _id: guild.id,
          },
          {
            _id: guild.id,
            language: targetLanguage,
          },
          {
            upsert: true,
          }
        )

        message.reply('Language has been set!').then((message) => {
          const seconds = 3
          message.delete({
            timeout: 1000 * seconds,
          })
        })
      } finally {
        mongoose.connection.close()
      }
    })
  },
}