<template>
  <div class="home">
  <div class="product-card-container"></div>
  </div>
</template>

<script>
import itens from "../data/itens.js";
import ProductsSummaryCard from '../components/products/ProductsSummaryCard.vue'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      itens: itens,
    }
  }
}
</script>

<style lang="scss">
.products-cards-container{
display: flex;
flex-wrap: wrap;
justify-content: center;


}
</style>