<template>
  <div class="drawer-background" :class="{ show: active }" @click="$emit('close-product-drawer')"/>

  <div class="drawer" :class="{ show: active }"> 
    <div class="drawer-close" @click="$emit('close-product-drawer')"> X </div>

  <div v-if="product" class="product-details">
    <h3 class="text-center">{{ product.name }}</h3>
    <h4 class="text-center">{{ product.Price.toFixed(2) }}</h4>
    <p class="Genre">{{ product.Genre }}</p>
    <p class="Rating">{{ product.Rating }}</p>

    <div class="cart-total" v-if="product_total">
      <h3>No carrinho</h3>
      <h4>{{ product_total }}</h4>
    </div>

    <div class="button-container">
      <button class="remove">Remover</button>
      <button class="add">Adicionar</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'active'],

  computed: {
    product_total() {
      return 56.0;
    },
  },
};
</script>

<style lang="scss">
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgb(124, 124, 124);
  z-index: 100;
  display: none;
  transition: display 0.5s;

  &.show {
    display: block;
  }
}

.drawer {
  width: 95vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 0.5s;
  z-index: 101;
  overflow-y: scroll;

  &.show {
    left: 0;
  }
}

.drawer-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px color grey;
  color: gray;
  width: 15px;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: lightslategrey;
  }
}

.text-center{
     padding: 20px;
    line-height: 1.5rem;
    text-align: center;
    font-size: 30px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.cart-total{
     padding: 20px;
    line-height: 1.5rem;
    text-align: center;
}
.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;

  p.Genre {
    padding: 20px;
    line-height: 1.5rem;
    text-align: center;
  }
  p.Rating{
       padding: 20px;
    line-height: 1.5rem;
    text-align: center;

 
  }

  .button-container {
    button {
        
      width: 150px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      margin: 0 5px 50px 5px;
     
      cursor: pointer;

       &:hover {
    background-color: lightslategrey;
  }
    }
  }
}

@media (min-width: 500px) {
.drawer{
width: 500px;

}

}
</style>
