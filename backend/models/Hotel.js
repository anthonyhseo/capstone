const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HotelSchema = new Schema({
  hotel: {
    type: String,
    required: true
  },
  userid: {
    type: Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Hotel = mongoose.model('hotels', HotelSchema)
