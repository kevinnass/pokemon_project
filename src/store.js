import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import pokemons from './components/data'
Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    pokemons,
    search: ''
  },
  mutations: {},
  actions: {},
  getters: {
    pokemons (state) {
      return state.pokemons
    },
    filters (state) {
      return state.pokemons.filter(pkmn => {
        return pkmn.name.toLowerCase().includes(state.search.toLowerCase())
      })
    }
  }
})
