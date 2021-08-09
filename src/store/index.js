import { createStore } from 'vuex'

function updateLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart))

}

export default createStore({
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
