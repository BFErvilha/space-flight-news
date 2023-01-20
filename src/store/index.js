import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    filter: null,
  },
  getters: {
    Search: (state) => state.search,
    getFilter: (state) => state.filter,
  },
  mutations: {
    setSearch(state, newValue) {
      state.search = newValue;
    },
    setFilter(state, newValue) {
      state.filter = newValue;
    },
  },
  actions: {},
  modules: {},
});
