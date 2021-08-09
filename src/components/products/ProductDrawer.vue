<template>
  <div
    class="drawer-background"
    :class="{ show: active }"
    @click="$emit('close-product-drawer')"
  />

  <div class="drawer" :show="{ show: active }">
    <div class="drawer-close" @click="$emit('close-product-drawer')"/>
      X
    </div>

    <div v-if="product" class="product-details">
      <h3 class="text-center">{{ product.name }}</h3>
      <h3 class="text-center">{{ product.price.toFixed(2) }}</h3>
      <p class="Genre">{{ product.Genre }}</p>
      <p class="Rating">{{ product.Rating }}</p>
     
     <div class="cart-total" v-if="product-total">
     <h3>No carrinho</h3>
     <h4>{{product_total}}</h4>
     </div>

     <div class="button-container">
     <button class="remove">Remover</button>
      <button class="add">Adicionar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'active'],
};
</script>
