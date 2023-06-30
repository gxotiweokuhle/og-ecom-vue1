import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
  },
  
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://github.com/gxotiweokuhle/gxotiweokuhle.github.io")
      .then((res) => res.json())
      .then((products) => context.commit('setProducts', products));

    },
    getProduct: async (context, id) => {
      fetch("https://github.com/gxotiweokuhle/gxotiweokuhle.github.io" + id)
      .then((res) => res.json())
      .then((product) => context.commit('setProduct', product));

    },
  },
  
})
