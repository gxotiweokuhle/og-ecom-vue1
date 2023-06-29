<template>
    <div v-if="product" class="product-details" :key="product.id" id="single">
      
      <div class="mb-3">
        <img :src="product.image" :alt="product.itemname" />
      </div>
      <div class="text-centre mt-5">
        <h2>{{ product.itemname }}</h2>
        <p>Description: {{ product.desc }}</p>
        <p>Price: R {{ product.price }}</p>
        <button class="btn btn-primary mt-2 mb-4">Add to cart</button>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ["id"],
    computed: {
      product() {
        return this.$store.state.product;
      },
    },
    mounted() {
      this.$store.dispatch("getProduct", this.id);
    },
    
  };
  
  </script>
  <style scoped>
     
      img{
          max-width: 200px;
          margin-top: 15px;
      }
      #single{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: center;
        flex-wrap: wrap;
      }
      
  
  </style>