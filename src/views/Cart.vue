<template>
  <div>
    <h1>Carrinho</h1>
<CartItemsCard
v-for="product in items" 
:key="product.id"
:product="product"
/>
  </div>
</template>

<script>
import CartItemsCard from '../components/cart/CartItemCard.vue'
export default {
  components: {
    CartItemsCard
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>
