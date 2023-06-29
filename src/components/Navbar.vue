<template>
   
    <nav class="topnav">
        <router-link class="active" to="/">Home</router-link>
        <router-link to="/products" class="active">Products</router-link>
        <router-link to="/about" class="active">About</router-link>
        <router-link to="/register" class="active">Register</router-link>
        <router-link to="/admin" class="active">Admin</router-link>
    </nav>

</template>
<script>

export default{

}
</script>
<style scoped>
.topnav {
    background-color:palevioletred;
    overflow: hidden;
    padding: 20px 150px;
  }

  .active:hover {
    width: 300px;
    background-color: blueviolet;
  }
  img{
    max-width: 100px;
  }
  router-link {
     width: 100px;
      float: left;
      color: white;
      text-align: center;
      padding: 14px 160px;
      text-decoration: none;
      font-size: 17px;
      
  }
  @media screen and(max-width:300px){
    .navbar{
      display: flex;
      justify-content: space-between;
    }
  }


</style>