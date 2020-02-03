const express = require('express')
const router = express.Router()

const path = require('path')

router.get('/', (req, res) => {
  res.send('hello from image')
})

router.get('/:id', (req, res) => {
  console.log(path.join(__dirname, '../public/uploads/IMAGE-1579567989014.jpg'))

  const img = `${path.join(__dirname, '../public/uploads/')}${req.params.id}`
  res.sendFile(img)
  // res.send(req.params.id)
})

module.exports = router
