<template>
  <v-app>
    <v-app-bar app>
      <v-icon>mdi-book-open-page-variant</v-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="headline text-uppercase"
        @click="$router.push('/')"
      >
        <span class="font-weight-light">The Library</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-github-circle</v-icon></v-btn>
      <v-btn icon href="https://www.linkedin.com/in/guy-lilian/"
        ><v-icon>mdi-linkedin-box</v-icon></v-btn
      >
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/browse">browse</router-link>
      </div>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",
  components: {},
  data: () => ({
    //
  })
});
</script>
