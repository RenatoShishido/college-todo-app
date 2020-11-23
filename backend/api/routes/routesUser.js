const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/controllerUser')
const controllerAuth = require('../controller/controllerAuth')


router.post('/authenticate', controllerAuth.authenticate)
router.post('/register', controllerAuth.registerUser)

    router.route('/user')
      .get(controllerUser.getUserAll)


    router.route('/user/:id')
      .get(controllerUser.getUserId)
      .delete(controllerUser.removeUser)
      .put(controllerUser.updateUser)

module.exports = app => app.use('/', router)
