const express = require("express");
const router = express.Router();
const controllerTask = require("../controller/controllerTask");
const middlewareAuth = require("../middleware/authenticate");
router.use(middlewareAuth);

router
  .route("/")
  .get(controllerTask.getTaskAll)
  .post(controllerTask.registerTask);

router.get("/begin", controllerTask.getTaskBegin);
router.get("/andamento", controllerTask.getTaskAndamento);
router.get("/finalizado", controllerTask.getTaskFinalizado);
router.get("/lista", controllerTask.getTaskLista);

router
  .route("/:id")
  .get(controllerTask.getTaskId)
  .delete(controllerTask.removeTask)
  .put(controllerTask.updateTask);

module.exports = (app) => app.use("/tarefas", router);
