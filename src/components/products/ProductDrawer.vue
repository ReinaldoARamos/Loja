<template>
  <div
    class="drawer-background"
    :class="{ show: active }"
    @click="$emit('close-product-drawer')"
  />

  <div class="drawer" :class="{ show: active }">
    <div class="drawer-close" @click="$emit('close-product-drawer')">X</div>

    <div v-if="product" class="product-details">
      <h3 class="text-center">{{ product.name }}</h3>
      <h4 class="text-center">Preço: R$ {{ product.Price.toFixed(2) }}</h4>
      <p class="Genre">Gênero:{{ product.Genre }}</p>
      <p class="Rating">Classificação indicativa:{{ product.Rating }}</p>
      <p><img :src="product.imgURl" class="Image" /></p>

      <div class="cart-total" v-if="product_total">
        <h3>No carrinho</h3>
        <h4>{{ product_total }}</h4>
      </div>

      <div class="button-container">
        <button class="remove" @click="removeFromCart()">Remover -</button>
        <button class="add" @click="addToCart()">Adicionar +</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "active"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },

  computed: {
    product_total() {
      return this.$store.getters.ProductQuantity(this.product);
    },
  },
};
</script>

<style lang="scss">
.Image{

display: block;
    margin-left: auto;
    margin-right: auto;
    width: 1em;
    width: 250px;
  height: 300px
}
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
  right: 15px;
  border: 2px color grey;
  color: black;
  width: 15px;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 0, 0, 0.473);
  }
}

.text-center {
  padding: 20px;
  line-height: 1.5rem;
  text-align: center;
  font-size: 30px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.cart-total {
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
  p.Rating {
    padding: 20px;
    line-height: 1.5rem;
    text-align: center;
  }

  .button-container {
    button {
      width: 150px;
      border: solid;
      padding: 10px;
      border-radius: 5px;
      margin: 0 5px 50px 5px;
      float: right;
      cursor: pointer;

      &:hover {
        background-color: lightslategrey;
      }
    }
  }
}

@media (min-width: 500px) {
  .drawer {
    width: 500px;
  }
}
</style>
