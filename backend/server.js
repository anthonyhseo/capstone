const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')

const users = require('./routes/users')
const classify = require('./routes/classify')
const image = require('./routes/image')
const hotel = require('./routes/hotel')

// S3 TESTING
const S3Upload = require('./routes/file-upload')

const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 3001

connectDB()
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/v1/users', users)
app.use('/api/v1/classify', classify)
app.use('/api/v1/image', image)
app.use('/api/v1/hotel', hotel)

// S3 TESTING
app.use('/api/v1/s3', S3Upload)

app.get('/', (req, res) => {
  res.send('Got the request')
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
