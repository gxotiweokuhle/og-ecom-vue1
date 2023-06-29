<template>
  
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <div class="card mb-5">
        <div class="card-body">
          <img :src="product.image" :alt="product.itemname" />
          <h3>{{ product.itemname }}</h3>
          <p>Price: R {{ product.price }}</p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
      <!----<img :src="product.image" :alt="product.itemname" />
      <h3>{{ product.itemname }}</h3>
      <p>Price: R {{ product.price }}</p>-->
    </router-link>
  </template>
  <script>
  export default {
    props: ["product"],
  };
  </script>
  <style>
     
      img{
          max-width: 300px;
          margin-top: 15px;
      }
      
  
  </style>