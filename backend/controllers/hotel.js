const Hotel = require('../models/Hotel')

exports.getUserHotels = async (req, res) => {
  try {
    const result = await Hotel.find({ userid: req.user.id })
    console.log(result)
    res.send(result)
  } catch (err) {
    res.send({ msg: err })
  }
}

exports.getHotel = async (req, res) => {
  const { id } = req.params

  try {
    const result = await Hotel.find({ _id: id, userid: req.user.id })
    console.log(result)
    res.send(result)
  } catch (err) {
    res.send({ msg: err })
  }
}

exports.insertHotel = async (req, res) => {
  const hotel = new Hotel({
    hotel: req.body.hotel,
    userid: req.user.id
  })

  try {
    const result = await hotel.save()
    console.log(hotel)
    console.log(result)
    res.send(result)
  } catch (err) {
    res.send({ msg: err })
  }
}
