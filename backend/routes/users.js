const express = require('express')
const router = express.Router()

const { test, registerUser, loginUser } = require('../controllers/users')

router.route('/').get(test)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

module.exports = router
