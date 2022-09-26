<template>
  <div>
    <div class="font-weight-medium mb-4">
      Montando uma proposta comercial.
    </div>
    <v-divider light class="mb-8"></v-divider>
    <v-row align="center">
      <v-col md="6" offset-md="3">
        <v-select :items="produtos" @input="setProduto" selection="index" items-id="id" items-text="nome" class="mb-4"
          label="Selecione um Produto">
        </v-select>
        <v-select :items="modelos" items-id="id" items-text="modelo" label="Selecione um Modelo">
        </v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData({ store }) {

    const teste = await store.dispatch('modelos/getModelos').then(res => res.map(mod => mod))
    function retornaSeusModelos(valor) {
      if (valor.produtoId === '1') {
        return valor
      }
    }
    const modelos = teste.filter(retornaSeusModelos)
    return {
      produtos: await store.dispatch('produtos/getProdutos').then(res => res.map(prod => prod.nome)),
      modelos: modelos.map(mod => mod.modelo)
    }
  },

  data() {
    return {}
  },

  methods: {
    setProduto(value) {
      console.log(value)
      return value
    }
  }
}
</script>
