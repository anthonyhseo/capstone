const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('users')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET_OR_KEY

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        console.log(jwt_payload)
        const user = await User.findById(jwt_payload.id)
        console.log(`hello ${user.username}`)
        if (user) {
          return done(null, user)
        }
        return done(null, false)
      } catch (err) {
        console.log(err)
      }
    })
  )
}
