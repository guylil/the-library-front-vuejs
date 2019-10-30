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
        taken: [],
        returned: []
      },
      {
        title: "a book1",
        published: "date",
        available: true,
        taken: [],
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
    booksInTheCart: [],
    borrowedBooks: [],
    booksAlreadyRead: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
