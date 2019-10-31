<template>
  <div class="Personal">
    My books
    <BooksList :books="books" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import BooksList from "../components/BooksList";

export default {
  name: "personal-page",
  components: {
    BooksList
  },
  computed: mapState(["books"])
};
</script>
