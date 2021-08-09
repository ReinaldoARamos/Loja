<template>
  <div>
    <h1>Carrinho</h1>

    <div v-for="product in items" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>
