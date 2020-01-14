const express = require('express')
const router = express.Router()

const multer = require('multer')

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }
})

router.get('/', (req, res) => {
  res.send('This is from the classify')
})

router.post('/', upload.single('myFile'), async (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }

  const result = await imageClassification(`./public/uploads/${file.filename}`)
  console.log(result)
  res.send(result)
})

module.exports = router
