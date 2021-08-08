<template>
  <div class="card">
    <h3>{{ product.name }}</h3>

    <h4 class="price">Preço:${{ product.Price.toFixed(2) }}</h4>

    <p class="Genre">Genêro: {{ product.Genre }}</p>

    <p class="Rating">Classificação indicativa {{ product.Rating }}</p>

    <button class="view-product-button">Visualizar</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {},
};
</script>

<style lang="scss">
.card {
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px grey;
   text-align: center;

  h4.price {
    color: grey;
   
  }

  p.genre {
    font-size: 85rem;
  }

  p.rating {
    color: grey;
  }
  button.view-product-button {
    padding: 10px;
    background-color: rgb(79, 169, 187);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
  }
}
@media (min-width: 500px) {
  .card {
    width: 200px;
    margin: 10px;
    height: 250px;
  }
}
</style>
