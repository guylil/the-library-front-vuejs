<template>
  <div class="Personal">
    <div class="px-3 pt-3">My books</div>
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
