const serviceUser = require('../services/serviceUser')
const User = require('../models/user')

module.exports = class ControllerUser {

  static async getUserAll(req, res) {
    try {

      const response = await serviceUser.getUserAll()

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
  static async getUserId(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id"
        })

      const response = await serviceUser.getUserId(req.params.id)

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
  static async registerUser(req, res) {
    try {
      const {
        email,
        nome,
        password
      } = req.body

      if (await User.findOne({
          email
        }))
        return res.status(400).send({
          error: "Este Email ja foi cadastrado, tente novamente"
        })

      if (!nome)
        return res.status(400).send({
          error: "Nome invalido!"
        })

      if (!password)
        return res.status(400).send({
          error: "Senha invalida"
        })

      const response = await serviceUser.registerUser(req.body)

      return res.status(200).send({
        response
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async updateUser(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para atualizar usuario"
        })

      const response = await serviceUser.updateUser(req.params.id, req.body)

      return res.send({response})


    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
  static async removeUser(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send({
          error: "Obrigatorio fornecer o id para remover"
        })

      const response = await serviceUser.removeUser(req.params.id)

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