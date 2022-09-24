<template>
  <v-row align="center">
    <v-col cols="6">
      <v-select :items="produtos" items-id="id" items-text="nome" label="Selecione um Produto">
      </v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData({ store }) {
    return {
      produtos: await store.dispatch('produtos/getProdutos').then(res => res.map(prod => prod.nome))
    }
  },

  data() {
    return {
      produtos: []
    }
  },
}
</script>
