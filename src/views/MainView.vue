<template>
  <div class="welcome">
    <Welcome />
    <BooksList :books="books" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome";
import BooksList from "@/components/BooksList";
import { mapState } from "vuex";

export default {
  name: "main-view",
  components: {
    Welcome,
    BooksList
  },
  data: () => ({}),
  computed: mapState(["books"])
};
</script>
