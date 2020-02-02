import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      restaurants: []
    },
    mutations: {
      GET_RESTAURANT (state, keyword) {
        state.restaurants = keyword
      }
    },
    actions: {
      getRestaurant ({ commit }, keyword) {
        commit('GET_RESTAURANT', keyword)
      }
    },
})  