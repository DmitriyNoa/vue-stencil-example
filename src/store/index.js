import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

const STORAGE_KEY = 'products-vuejs'
const state = {
  liked: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}
const getters = {
  liked:  state => state.liked
}
const mutations = {
  addLike (state, data) {
    state.liked.push(data)
  }
}
const localStoragePlugin = store => {
  store.subscribe((mutation, { liked }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(liked))
  })
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [localStoragePlugin]
})