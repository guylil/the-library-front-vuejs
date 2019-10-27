<template>
  <div class="welcome">
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome";

export default {
  name: "main-view",
  components: {
    Welcome
  }
};
</script>
