<template>
  <v-row align="center">
    <v-col cols="6">
      <v-select :items="items" label="Selecione um Produto"></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',

  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>
