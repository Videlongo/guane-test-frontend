import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Las que necesito
    currentPage: 1,
    numberOfPages: 1,
    idSelectedCharacter: 1,
    characterCards: [],
    prevPage: null,
    nextPage: null,
    posicion: null,
    apiUrl: "https://rickandmortyapi.com/api/character?page=1",
  },
  mutations: {
    SET_POSTS(state, character) {
      state.characterCards = character.results;
      state.numberOfPages = character.info.pages;
      state.prevPage = character.info.prev;
      state.nextPage = character.info.next;
    },
    prev(state) {
      if (state.currentPage >= 1) {
        state.currentPage--;
        state.apiUrl = state.prevPage;
        axios.get(this.state.apiUrl).then((res) => {
          state.characterCards = res.data.results;
          state.numberOfPages = res.data.info.pages;
          state.prevPage = res.data.info.prev;
          state.nextPage = res.data.info.next;
        });
      }
    },
    next(state) {
      if (state.currentPage <= state.numberOfPages) {
        state.currentPage++;
        state.apiUrl = state.nextPage;
        axios.get(this.state.apiUrl).then((res) => {
          state.characterCards = res.data.results;
          state.numberOfPages = res.data.info.pages;
          state.prevPage = res.data.info.prev;
          state.nextPage = res.data.info.next;
        });
      }
    },
  },
  actions: {
    getcards({ commit }) {
      axios.get(this.state.apiUrl).then((res) => {
        commit("SET_POSTS", res.data);
      });
    },
  },
  prev({ commit }, state) {
    if (state.currentPage >= 1) {
      state.currentPage--;
      state.apiUrl = state.prevPage;
      axios.get(this.state.apiUrl).then((res) => {
        commit("SET_POSTS", res.data);
      });
    }
  },
});
