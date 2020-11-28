import AXIOS_INSTANCE from '../config'

export default {
  loadLoggedUser({
    commit
  }) {
    try {
      const loggedUser = JSON.parse(localStorage.getItem('progweb'))

      if (loggedUser)
        commit('setLoggedUser', loggedUser)
      else
        commit('loggout')
    } catch (error) {
      throw  error.response.data  
    }
  },
  async chargeLoginUser({
    commit
  }, payload) {
    try {
      const user = await AXIOS_INSTANCE.post('/authenticate', payload)

      console.log(user);

      if (user)
        commit("setLoggedUser", user)

    } catch (error) {
      throw  error.response.data  
    }
  },
  async registerUser({
    commit
  }, payload) {
    try {
      await AXIOS_INSTANCE.post('/register', payload)
      commit

    } catch (error) {
      throw  error.response.data  
    }
  },
  logoutUser({
    commit
  }) {
    try {
      commit('loggout')

    } catch (error) {
      throw  error.response.data  
    }
  }
}