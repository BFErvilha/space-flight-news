import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
  },
  getters: {
    Search: (state) => state.search,
  },
  mutations: {
    setSearch(state, newValue) {
      state.search = newValue;
    },
  },
  actions: {},
  modules: {},
});
