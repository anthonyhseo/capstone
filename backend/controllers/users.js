const bcrypt = require('bcryptjs')

const User = require('../models/User')

exports.test = (req, res) => {
  res.json({ msg: 'users route works' })
}

exports.registerUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (user) {
      return res.status(400).send('Found user')
    }

    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    })

    newUser
      .save()
      .then(user => res.send(user))
      .catch(err => console.log(err))
  } catch (err) {
    console.log(err)
  }
}
