export default {
  getModelos() {
    return this.$axios.$get('modelos?_expand=produto')
  }
}
