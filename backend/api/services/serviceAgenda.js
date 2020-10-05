const Agenda = require('../models/agenda')

module.exports = class serviceAgenda {
  static async getAgendaAll(){
    try {
      
      return await Agenda.find()
       
    } catch (error) {
      throw {
        errorUser: "Erro ao achar uma Agenda",
        error: error
      }
    }
  }
  static async getAgendaId(id){
    try {
      
      return await Agenda.findById(id)

    } catch (error) {
      throw {
        errorUser: "Erro ao achar um unica Agenda",
        error: error
      }
    }
  }
  static async registerAgenda(book){
    try {
      
      return await Agenda.create(book)

    } catch (error) {
      throw {
        errorUser: "Erro ao registrar uma Agenda",
        error: error
      }
    }
  }
  static async updateAgenda(id, book){
    try {
      
      return await Agenda.findByIdAndUpdate(id, book)
       
    } catch (error) {
      throw {
        errorUser: "Erro ao atualizar uma Agenda",
        error: error
      }
    }
  }
  static async removeAgenda(id){
    try {
      
      return await Agenda.findByIdAndDelete(id)
       
    } catch (error) {
      throw {
        errorUser: "Erro ao deletar uma Agenda",
        error: error
      }
    }
  }
}

