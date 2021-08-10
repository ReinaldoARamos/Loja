<template>
  <div class="cart-item-total">
    <h3>Cart Total: ${{ cart_total.toFixed(2) }}</h3>

    <button class="view-product-button">Pagar com cartão</button>
  </div>
</template>
<script>
export default {
    computed:{
        cart_total(){
            return
        }
    }
}
</script>
