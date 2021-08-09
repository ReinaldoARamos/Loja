<template>
  <div class="home">
    <ProductDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="CloseProductDrawer()" 
    />
    <!--Possivel erro -->
    <div class="Products-cards-container">
      <!--//Itens talvez esteja errado-->

      <ProductsSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script>
//Itens talvez esteja errado
import items from "../data/items.js";
import ProductsSummaryCard from "../components/products/ProductsSummaryCard.vue";
import ProductDrawer from "../components/products/ProductDrawer.vue";

export default {
  name: "home",
  components: {
    ProductsSummaryCard,
    ProductDrawer,
  },
  data() {
    return {
      //Itens talvez esteja errado
      items: items,
      product: null,
      active: {
        product_drawer: false, //true pra testes
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    CloseProductDrawer(){
      this.active.product_drawer = false;
    }
  },
  
};
</script>

<style lang="scss">
.Products-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
