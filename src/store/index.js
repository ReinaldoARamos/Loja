import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [],
  },

  getters: {
    ProductQuantity: (state) => (product) => {
      //basicamente criei  o getter que tem a quantidade de produto que vai pegar de dentro do cart
      //criei a const item que procura dentro do state.cart o index dos itens, pega o id e iguala ao produto
      //se for encontrado um item ele retorna a quantidade, caso não, retorna nulo

      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity;
      else return null;
    },
  },
  mutations: {
    addToCart(state, product){
      let item  = state.cart.find(i => i.id === product.id)

      if (item){
        item.quantity++;
      }
      else{
        state.cart.push({...product, quantity: 1})
      }
      updateLocalStorage(state.cart);
    }
  },
  actions: {},
  modules: {},
});
