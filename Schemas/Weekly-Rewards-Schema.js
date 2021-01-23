const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const weeklyRewardsSchema = mongoose.Schema(
  {
    guildId: reqString,
    userId: reqString,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('weekly-rewards', weeklyRewardsSchema)