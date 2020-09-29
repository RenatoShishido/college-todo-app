const controllerUser = require('../controller/controllerUser')

module.exports = class UserRouter {
  constructor(app) {
    app.route('/user')
      .get(controllerUser.getUserAll)
      .post(controllerUser.registerUser)

    app.route('/user/:id')
      .get(controllerUser.getUserId)
      .delete(controllerUser.removeUser)
      .put(controllerUser.updateUser)


  }
}