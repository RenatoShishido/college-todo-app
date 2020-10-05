const controllerUser = require('../controller/controllerUser')
const controllerAuth = require('../controller/controllerAuth')
const controllerTask = require('../controller/controllerTask')

module.exports = class UserRouter {
  constructor(app) {
    app.route('/user')
      .get(controllerUser.getUserAll)

    app.post('/authenticate', controllerAuth.authenticate)
    app.post('/register', controllerAuth.registerUser)

    app.route('/user/:id')
      .get(controllerUser.getUserId)
      .delete(controllerUser.removeUser)
      .put(controllerUser.updateUser)



  }
}