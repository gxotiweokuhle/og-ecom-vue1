<template>
  <!--navbar here-->

  <div class="home text-end">
    <!--backgroung image and some text-->
    
    <Home msg="Looking to make your little one's Barbie dream come true?" />
  </div>
 

  <div class="d-flex justify-content-center" id="models">
    <a href="/products" class="px-3">
     
          <img src="https://i.postimg.cc/fLMhY3qn/barb.jpg" :alt="model" />
          <div class="mb-3 mt-2">
            <button class="btn btn-primary">Shop Now!</button>
          </div>
    </a>
    <a href="/products" class="px-3">
     
     <img src="https://i.postimg.cc/CMH07pWH/b2.jpg" :alt="model" />
     <div class="mt-2">
      <button class="btn btn-primary">Shop Now!</button>
     </div>
  </a>
  <a href="/products" class="px-3">
     
     <img src="https://i.postimg.cc/kXppFjXv/b3.jpg" :alt="model" />
     <div class="mt-2">
      <button class="btn btn-primary">Shop Now!</button>
     </div>
  </a>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
     Home
  }
}
</script>

