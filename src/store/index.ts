import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [
      {
        title: "a book",
        published: "date",
        available: true,
        taken: [],
        returned: []
      }
    ],
    booksInTheCart: [],
    borrowedBooks: [],
    booksAlreadyRead: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
