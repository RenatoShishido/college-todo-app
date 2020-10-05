const Task = require('../models/tasks')

module.exports = class serviceTask {
  static async getTaskAll(){
    try {
      
      return await Task.find()
       
    } catch (error) {
      throw {
        errorUser: "Erro ao achar uma tarefa",
        error: error
      }
    }
  }
  static async getTaskId(id){
    try {
      
      return await Task.findById(id)

    } catch (error) {
      throw {
        errorUser: "Erro ao achar um unica tarefa",
        error: error
      }
    }
  }
  static async registerTask(task){
    try {
      
      return await Task.create(task)

    } catch (error) {
      throw {
        errorUser: "Erro ao registrar uma tarefa",
        error: error
      }
    }
  }
  static async updateTask(id, task){
    try {
      
      return await Task.findByIdAndUpdate(id, task)
       
    } catch (error) {
      throw {
        errorUser: "Erro ao atualizar uma tarefa",
        error: error
      }
    }
  }
  static async removeTask(id){
    try {
      
      return await Task.findByIdAndDelete(id)
       
    } catch (error) {
      throw {
        errorUser: "Erro ao deletar uma tarefa",
        error: error
      }
    }
  }
}

