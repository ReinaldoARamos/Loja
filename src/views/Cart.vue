<template>
<div>
  <div class="Textos">
    <h1>Carrinho</h1>
    
<CartItemsCard
v-for="product in items" 
:key="product.id"
:product="product"
/>

  </div>
</div>
</template>

<script>
import CartItemsCard from '../components/cart/CartItemCard.vue'
export default {
  components: {
    CartItemsCard
  },
  computed: {
    product() {
      return this.$store.getters.cartItems;
    },
  },
};

</script>

<style land="scss">
.Textos{
  text-align: center;
}

</style>
