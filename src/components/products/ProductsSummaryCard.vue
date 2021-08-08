<template>
  <div class="cards">
    <h3>{{ product.name }}</h3>

    <h5 class="price">Preço:${{ product.Price.toFixed(2) }}</h5>

    <p class="Genre">Genêro: {{product.Genre}}</p>
    <p class="description">Descrição: {{description}} </p>
    <p class="Rating">Classificação indicativa {{product.Rating}}</p>
    <button class="view-product-button"></button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
      description(){
          return this.product.description.substring(0, 150)
      }
  }
};
</script>
