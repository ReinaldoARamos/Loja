<template>
  <div class="home">
  <div class="product-card-container">
  <!--//Itens talvez esteja errado-->
   <ProductsSummaryCard 
   v-for="product in item" ]
   :key="product.id" 
   :product="product"
   />
  </div>
  </div>
</template>

<script>
//Itens talvez esteja errado
import item from "../data/itens.js";
import ProductsSummaryCard from '../components/products/ProductsSummaryCard.vue'


export default {
  name: "Home",
  components: {
    ProductsSummaryCard

  },
  data() {
    return {
      //Itens talvez esteja errado
      item: item,
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