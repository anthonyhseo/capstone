const express = require('express')
const router = express.Router()

const { test, registerUser } = require('../controllers/users')

router.route('/').get(test)

router.route('/register').post(registerUser)

module.exports = router
