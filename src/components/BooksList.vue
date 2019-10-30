<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card class="mx-auto">
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item v-for="(book, i) in books" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="book.title"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-more</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
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
