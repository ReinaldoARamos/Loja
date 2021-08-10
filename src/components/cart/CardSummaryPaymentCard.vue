<template>
  <div class="cart-item-total">
    <h3>Total a pagar: R${{ cart_total.toFixed(2) }}</h3>

    <button class="view-product-button">Pagar com cartão</button>
  </div>
</template>
<script>
export default {
    
    computed:{
       
        cart_total(){
            return this.$store.getters.cartTotal  
        }
    }
}
</script>
