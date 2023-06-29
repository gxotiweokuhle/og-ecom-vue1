<template>
    <div v-if="products" class="flex-container">
      <CardComp
        v-for="product of products"
        :key="product.id"
        :product="product"
        
      />
      
    </div>
    
    <div v-else>loading...</div>
  </template>
  
  <script>
  import CardComp from "@/components/CardComp.vue";
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch("getProducts");
    },
  
    components: { CardComp },
  };
  </script>
  <style>
    .flex-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: center;
      background-color: plum;
    }
</style>