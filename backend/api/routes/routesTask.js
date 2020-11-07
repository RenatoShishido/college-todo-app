const controllerTask = require('../controller/controllerTask')
const middlewareAuth = require('../middleware/authenticate')
module.exports = class TaskRouter {
  constructor(app) {
    app.route('/tarefas')
      .get(controllerTask.getTaskAll)
      .post(controllerTask.registerTask)

    app.route('/tarefas/:id')
      .get(controllerTask.getTaskId)
      .delete(controllerTask.removeTask)
      .put(controllerTask.updateTask)
  }
}