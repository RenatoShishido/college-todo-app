const serviceTask = require('../services/serviceTask')

module.exports = class ControllerUser {
  static async getTaskAll(req, res) {
    try {

      const response = await serviceTask.getTaskAll()

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async getTaskBegin(req, res) {
    try {

      const response = await serviceTask.getTaskBegin()

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async getTaskAndamento(req, res) {
    try {

      const response = await serviceTask.getTaskAndamento()

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async getTaskFinalizado(req, res) {
    try {

      const response = await serviceTask.getTaskFinalizado()

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async getTaskLista(req, res) {
    try {

      const response = await serviceTask.getTaskLista()

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async getTaskId(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id"
        })

      const response = await serviceTask.getTaskId(req.params.id)

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async registerTask(req, res) {
    try {
      if (!req.body)
        return res.status(400).send({
          error: "Obrigatorio fornecer dados"
        })
        req.body.user = req.userId

      const response = await serviceTask.registerTask(req.body)

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }

  static async updateTask(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para atualizar usuario"
        })
      
      const response = await serviceTask.updateTask(req.params.id, req.body)

      return res.send({response})


    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async removeTask(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para remover"
        })

      const response = await serviceTask.removeTask(req.params.id)

      return res.send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }


}