<template>
  <div class="Home">
  <div class="Products-cards-container">
  <!--//Itens talvez esteja errado-->
   <ProductsSummaryCard 
   v-for="product in items" ]
   :key="product.id" 
   :product="product"
   />
  </div>
  </div>
</template>

<script>
//Itens talvez esteja errado
import items from "../data/items.js";
import ProductsSummaryCard from '../components/products/ProductsSummaryCard.vue';


export default {
  name: 'Home',
  components: {
    ProductsSummaryCard

  },
  data() {
    return {
      //Itens talvez esteja errado
      items: items,
    }
  }
}
</script>

<style lang="scss">
.Products-cards-container{
display: flex;
flex-wrap: wrap;
justify-content: center;


}
</style>