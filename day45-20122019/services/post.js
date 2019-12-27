const passport = require('passport');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post('/create-post', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      db.post.create({
        message: req.body.message,
        image_url: req.body.image_url,
        user_id: req.user.id
      })
      .then (result => {
        res.status(201).send(result)
      })
      .catch (err => {
        res.status(400).send({ message: err.message })
      })
    }
  )

  app.put('/update-post/:id', passport.authenticate('jwt', { session: false }),
    async function async(req, res) {
      db.post.update({
        message: req.body.message,
        image_url: req.body.image_url
      },
      {
        where: { id: req.params.id, user_id: req.user.id }
      }
      ).then (result => {
        res.status(201).send(result)
      })
      .catch (err => {
        res.status(400).send({ message: err.message })
      })
    }
  )

  app.delete('/delete-post/:id', passport.authenticate('jwt', { session: false }),
    async function (req, res) {
      db.post.destroy({
        where: { id: req.params.id, user_id: req.user.id }
      }
      ).then (result => {
        res.status(201).send({})
      })
      .catch (err => {
        res.status(400).send({ message: err.message })
      })
    })

  app.get('/my-posts', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      // Lab 4
    })

  app.get('/feed', passport.authenticate('jwt', { session: false }),
    async function (req, res) {
      // Lab 5
    });
}
