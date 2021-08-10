<template>
  <div class="cart-item-total">
    <h3>Total a pagar: R${{ cart_total.toFixed(2) }}</h3>

    <button class="view-product-button">Pagar com cartão</button>
  </div>
</template>
<script>
export default {
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>

<style lang="scss">
button.view-product-button {
  padding: 10px;
  background-color: rgb(79, 169, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
}
</style>
