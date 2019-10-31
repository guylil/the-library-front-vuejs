<template>
  <div class="welcome">
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome";
import { mapState } from "vuex";

export default {
  name: "main-view",
  components: {
    Welcome
  },
  data: () => ({}),
  computed: mapState(["books", "showBooksList"])
};
</script>
