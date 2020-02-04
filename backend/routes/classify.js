const express = require('express')
const router = express.Router()
const passport = require('passport')

const {
  test,
  testAuth,
  home,
  classify,
  authClassify,
  getClassifications,
  upload
} = require('../controllers/classify')

router.route('/').get(home)
router.route('/test').get(test)

router.get(
  '/testauth',
  passport.authenticate('jwt', { session: false }),
  testAuth
)

router.post('/', upload.single('myFile'), classify)

router.post(
  '/authClassify',
  passport.authenticate('jwt', { session: false }),
  upload.single('myFile'),
  authClassify
)

router.get(
  '/getClassifications',
  passport.authenticate('jwt', { session: false }),
  getClassifications
)

module.exports = router
