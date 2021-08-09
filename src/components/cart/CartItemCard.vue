<template>
  <div class="cart-item-card">
    <div class="header">
    <h3> {{product.name}}</h3>
    <h4>No carrinho: {{product.quantity}}</h4>
    <h4>Custo Total: {{item_cost.toFixed(2)}}</h4>
    </div>
  </div>
</template>

<script>
export default {
    props: ['products'],
    computed: {
        item_cost(){
            return this.product.price * this.product.quantity
        }
    }
}
</script>
