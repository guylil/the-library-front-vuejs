<template>
  <v-container>
    <v-layout>
      <v-flex>
        <ul>
          <li v-for="(book, i) in books" :key="i">{{ book }}</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    books: Array
  },
  data: () => ({})
};
</script>
