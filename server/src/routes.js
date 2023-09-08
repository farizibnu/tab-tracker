const AuthenticationController = require('./controllers/AuthenticationControllers')

module.exports = (app) => {
  app.post('/register',
    AuthenticationController.register)
}
