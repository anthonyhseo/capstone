const express = require('express')
const router = express.Router()
const passport = require('passport')

const { insertHotel, getUserHotels, getHotel } = require('../controllers/hotel')

router.get('/', passport.authenticate('jwt', { session: false }), getUserHotels)
router.get('/:id', passport.authenticate('jwt', { session: false }), getHotel)
router.post('/', passport.authenticate('jwt', { session: false }), insertHotel)

module.exports = router
