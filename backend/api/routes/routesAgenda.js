const controllerAgenda = require('../controller/controllerAgenda')

module.exports = class AgendaRouter {
  constructor(app) {
    app.route('/agenda')
      .get(controllerAgenda.getAgendaAll)
      .post(controllerAgenda.registerAgenda)

    app.route('/agenda/:id')
      .get(controllerAgenda.getAgendaId)
      .delete(controllerAgenda.removeAgenda)
      .put(controllerAgenda.updateAgenda)



  }
}