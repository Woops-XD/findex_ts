import { createStore } from 'vuex'
import { login, logout } from '@/request/api';

export interface State {
  token: string,
  name: string,
  avatar: string,
  isLogin: boolean,
}
// global state manage 
// store user info 
export default createStore({
  state: <State>{
    token: '',
    name: '',
    avatar: '',
    isLogin: false,
  },
  // change state
  mutations: {
    SET_USER: (state, userinfo) => {
      state.token = userinfo.token
      state.name = userinfo.name,
        state.avatar = userinfo.avatar,
        state.isLogin = true
    }
  },
  // call mock login API 
  actions: {
    Login({ commit }, info) {
      return new Promise((resolve, reject) => {
        login(info).then((response) => {
          console.log(response)
          //  if succeed save toke for long term use and redirect  
          if (response.status == 200) {
            const result = response.data.result;
            localStorage.setItem('ACCESS_TOKEN', result.token)
            commit('SET_USER', result)
            resolve(true)
          }
          resolve(false)
        }).catch((error: any) => {
          reject(error)
        })
      })
    },

    // call mock logout 
    // delete user state and localstroage token 
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          commit('SET_USER', {
            token: '',
            name: '',
            avatar: '',
            isLogin: false,
          })
          localStorage.removeItem('ACCESS_TOKEN')
          resolve(true)
        }).catch((err: any) => {
          console.log('logout fail:', err)
        })
      })
    }
  },

})
