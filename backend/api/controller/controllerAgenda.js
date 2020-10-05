const serviceAgenda = require('../services/serviceAgenda')

module.exports = class ControllerAgenda {
  static async getAgendaAll(req, res) {
    try {

      const response = await serviceAgenda.getAgendaAll()

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
  static async getAgendaId(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id"
        })

      const response = await serviceAgenda.getAgendaId(req.params.id)

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
  static async registerAgenda(req, res) {
    try {
      if (!req.body)
        return res.status(400).send({
          error: "Obrigatorio fornecer dados"
        })

      const response = await serviceAgenda.registerAgenda(req.body)

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

  static async updateAgenda(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para atualizar usuario"
        })

      const response = await serviceAgenda.updateAgenda(req.params.id, req.body)

      return res.send({response})


    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async removeAgenda(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para remover"
        })

      const response = await serviceAgenda.removeAgenda(req.params.id)

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