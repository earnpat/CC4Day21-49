const passport = require('passport')
const jwt = require('jsonwebtoken')
const jwtOptions = require('../config/passport/passport')

module.exports = (app, db) => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message)
        res.status(403).send(info.message)
      } else {
        user.update({ // update แล้ว เปลี่ยนค่าในตารางทันที
          name: req.body.name,
          role: "user" // แสดงสถานะ user, admin
        })
          .then(() => {
            console.log('user created in db')
            res.status(200).send({ message: 'user created' })
          })
          .catch(err => {
            console.error(err)
            res.status(400).send({ message: err.message })
          })
      }
    })(req, res, next)
  })

  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.error(err)
      }
      if (info !== undefined) {
        console.error(info.message)
        res.status(400).send(info.message)
      } else {
        const token = jwt.sign({ id: user.id, role: user.role, name: user.name },
          jwtOptions.secretOrKey, { expiresIn: 3600 }) // sec
        res.status(200).send({
          auth: true,
          token,
          message: 'user found & logged in'
        })
      }
    })(req, res, next)
  })

  app.get('/protect-route', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      res.status(200).send(req.user)
    }
  )
}