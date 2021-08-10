<template>
<div>
  <div class="Textos">
    <h1>Carrinho 🛒</h1>
    
<CartItemsCard
v-for="product in products" 
:key="product.id"
:product="product"
/>

  </div>
  <CardSummaryPaymentCard 
  />
</div>
</template>

<script>
import CartItemsCard from '../components/cart/CartItemCard.vue'
import CardSummaryPaymentCard from '../components/cart/CardSummaryPaymentCard.vue'
export default {
  components: {
    CartItemsCard, CardSummaryPaymentCard
  },
  computed: {
    products() {
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
