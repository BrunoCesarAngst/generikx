export default {
  getProdutos() {
    return this.$axios.$get('produtos')
  }
}
