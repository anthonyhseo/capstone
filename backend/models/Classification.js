const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClassificationSchema = new Schema({
  classification: [
    {
      _id: false,
      className: {
        type: String
      },
      probability: {
        type: Number
      }
    }
  ],
  imageUrl: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId
  }
})

module.exports = Classification = mongoose.model(
  'classifications',
  ClassificationSchema
)
