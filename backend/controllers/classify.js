const multer = require('multer')
const path = require('path')
const imageClassification = require('../classify')

const Classification = require('../models/Classification')

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname))
  }
})

exports.upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }
})


exports.dummy = () => {
  console.log('hello world')
}

exports.home = (req, res) => {
  res.send('This is from the classify')
}

exports.test = (req, res) => {
  res.send('this works')
}

exports.testAuth = (req, res) => {
  console.log(req.user)
  res.send('authentication works')
}

exports.classify = async (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  try {
    const result = await imageClassification(
      `./public/uploads/${file.filename}`
    )
    console.log(result)
    res.send(result)
  } catch (err) {
    res.send({ msg: 'Could not classify image', msg: err })
  }
}

exports.authClassify = async (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  try {
    const result = await imageClassification(
      `./public/uploads/${file.filename}`
    )
    console.log(result)

    const classification = new Classification({
      user: req.user._id,
      imageUrl: req.body.s3URL,
      classification: result
    })

    const classify = await classification.save()

    res.send(classify)
  } catch (err) {
    res.send({ msg: 'Could not classify image', msg: err })
  }
}

exports.getClassifications = async (req, res) => {
  const items = await Classification.find({user: req.user._id})
  console.log("inside getClassifications")
  res.send(items)
}
