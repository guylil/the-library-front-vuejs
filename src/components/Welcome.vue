<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12> </v-flex>

      <v-flex mb-4>
        <h1 class="display-1 mb-2">
          Welcome to The Library
        </h1>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline mb-3">What would you like to do?</h2>
        <v-row>
          <v-col v-for="(action, i) in actions" :key="i">
            <v-btn :href="action.href" :class="action.color"
              >{{ action.txt }}<v-icon>{{ action.icon }}</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    actions: [
      {
        txt: "Find a book",
        href: "/browse",
        color: "red",
        icon: "mdi-magnify"
      },
      {
        txt: "Return a book",
        href: "return",
        color: "blue",
        icon: "mdi-backup-restore"
      }
    ]
  })
};
</script>
