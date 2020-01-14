const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const users = require('./routes/users')
const classify = require('./routes/classify')

const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 3001

connectDB()
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1/users', users)
app.use('/api/v1/classify', classify)

app.get('/', (req, res) => {
  res.send('Got the request')
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
