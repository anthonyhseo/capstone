const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

exports.test = (req, res) => {
  res.json({ msg: 'users route works' })
}

exports.registerUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (user) {
      return res.status(400).send('Username taken')
    }

    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    })

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser
          .save()
          .then(user => res.send(user))
          .catch(err => console.log(err))
      })
    })
  } catch (err) {
    console.log(err)
  }
}

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return res.status(400).json({ err: 'User not found' })
    }

    bcrypt.compare(req.body.password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          username: user.username,
          id: user.id
        }

        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          { expiresIn: '24h' },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            })
          }
        )
      } else {
        return res.status(400).json({ msg: 'failed' })
      }
    })
  } catch (err) {
    console.log(err)
  }
}
