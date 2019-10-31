import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== "production",
  state: {
    books: [
      {
        title: "a book",
        published: "date",
        available: true,
        taken: [1572527020007, 1572527000027, 1572527027000],
        returned: []
      },
      {
        title: "a book1",
        published: "date",
        available: true,
        taken: [1572195397000],
        returned: []
      },
      {
        title: "a book2",
        published: "date",
        available: true,
        taken: [],
        returned: []
      }
    ],
    showBooksList: false,
    booksInTheCart: [],
    borrowedBooks: [],
    booksAlreadyRead: []
  },
  mutations: {
    toggleShowBooks(state) {
      state.showBooksList = !state.showBooksList;
    }
  },
  actions: {},
  modules: {}
});
