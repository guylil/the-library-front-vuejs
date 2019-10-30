<template>
  <div class="welcome">
    <Welcome />
    <BooksList :books="[1, 2, 3, 4, 5]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome";
import BooksList from "@/components/BooksList";

export default {
  name: "main-view",
  components: {
    Welcome,
    BooksList
  }
};
</script>
