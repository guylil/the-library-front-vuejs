<template>
  <v-app>
    <v-app-bar app>
      <span><v-icon>mdi-book-open-page-variant</v-icon></span>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">The Library</span>
      </v-toolbar-title>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/browse">the library</router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-github-circle</v-icon></v-btn>
      <v-btn icon href="https://www.linkedin.com/in/guy-lilian/"
        ><v-icon>mdi-linkedin-box</v-icon></v-btn
      >
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
