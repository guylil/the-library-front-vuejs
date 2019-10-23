<template>
  <div class="main">
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome";

export default {
  name: "main",
  components: {
    Welcome
  }
};
</script>
