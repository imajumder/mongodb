const mongo = require('./mongo')

const RubySchema = require('../Schemas/Ruby-Schema')

const RubyCache = {}


module.exports = (client) => {}

module.exports.addRubyChest = async ( userId, ruby) => {
  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await RubySchema.findOneAndUpdate(
        {
          
          userId,
        },
        {
         
          userId,
          $inc: {
            ruby,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      

      RubyCache[`${userId}`] = result.ruby

      return result.ruby
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.getRubyChest = async (userId) => {
  const cachedValue = RubyCache[`${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  return await mongo().then(async (mongoose) => {
    try {
      

      const result = await RubySchema.findOne({
        userId,
      })

      let ruby = 0
      if (result) {
        ruby = result.ruby
      } else {
       
        await new RubySchema({
         
          userId,
          ruby,
        }).save()
      }

      RubyCache[`${userId}`] = ruby

      return ruby
    } finally {
      mongoose.connection.close()
    }
  })
}


