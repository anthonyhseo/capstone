const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const createS3Bucket = require( '../services/s3-bucket-creation')

exports.test = (req, res) => {
  res.json({ msg: 'users route works' })
}

exports.registerUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (user) {
      return res.status(400).send('Username taken')
    }

    // Create S3 bucket with username 
    // Should this be an await function?
    await createS3Bucket(req.body.username)

    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    })

    bcrypt.genSalt(10, (saltErr, salt) => {
      bcrypt.hash(newUser.password, salt, async (hashErr, hash) => {
        if (hashErr) throw hashErr
        newUser.password = hash
        try {
          const user = await newUser.save()
          res.send(user)
        } catch (error) {
          console.log(error)
        }
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
      return res.status(400).json({ success: false, err: 'User not found' })
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
            res.status(200).json({
              success: true,
              token: `Bearer ${token}`
            })
          }
        )
      } else {
        return res.status(400).json({ success: false, msg: 'Password incorrect' })
      }
    })
  } catch (err) {
    console.log(err)
  }
}
