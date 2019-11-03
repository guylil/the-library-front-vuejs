<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card class="mx-auto">
          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item v-for="(book, i) in books" :key="i">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ book.title }}
                  </v-list-item-title>
                </v-list-item-content>
                <span
                  v-if="due(book.taken[book.taken.length - 1]) > -1"
                  :class="{
                    'red--text': !due(book.taken[book.taken.length - 1])
                  }"
                >
                  due: {{ due(book.taken[book.taken.length - 1]) }} days
                </span>
                <span v-else>Overdue</span>
                <v-list-item-icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    books: Array
  },
  data: () => ({}),
  methods: {
    due: taken => Math.round((taken - Date.now()) / (1000 * 60 * 60 * 24))
  }
};
</script>
