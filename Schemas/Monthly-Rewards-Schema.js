const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const mRewardsSchema = mongoose.Schema(
  {
    userId: reqString,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('monthly-rewards', mRewardsSchema)