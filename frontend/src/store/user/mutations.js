import AXIOS_INSTANCE from '../config'
export default {
  setLoggedUser(state, payload) {
    state.nome = payload.data.user.nome
    state.email = payload.data.user.email
    state._id = payload.data.user._id
    AXIOS_INSTANCE.defaults.headers['x-access-token'] = payload.data.token
    localStorage.setItem('progweb', JSON.stringify(payload))
  },


  loggout(state) {
    state.nome = ''
    state.email = ''
    state._id = ''
    AXIOS_INSTANCE.defaults.headers['x-acess-token'] = ''
    localStorage.removeItem('progweb')
  },
}