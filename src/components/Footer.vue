<template>
  <!--start of footer-->
    <div class="footer">
        <p class="footer-text-centre mt-3 text-white">
          <h3>Navigation</h3>
           <router-link class="menu" to="/">Home</router-link><br>
          <router-link to="/products" class="menu">Products</router-link><br>
          <router-link to="/about" class="menu">About us</router-link><br>
          <router-link to="/" class="menu">Contact us</router-link><br>
          <router-link to="/" class="menu">Admin</router-link>
        </p>
        <!--customer service-->
        <div>
          <p class="footer-text-centre mt-3">
            <h3> Online Customer Service</h3>
            Phone: 021 444 7868<br>
            Email: Kiddies@gmail.co.za<br> 
          </p>
        </div>
        <!--social links-->
        <div>
          <h3 class="footer-text-centre mt-3">Social links</h3>
          <a href="https://www.facebook.com/" target="_blank">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.instagram.com/accounts/emailsignup/" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="https://twitter.com/?logout=1688027365625" target="_blank">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <!--copyright-->
        <div class="copy text-centre mt-3">

          <img src="https://i.postimg.cc/FHMRyqp3/logo.jpg" alt="kiddies logo">
          <p>©️Copyright 2023. Rights reserved by Kiddies.</p>
        </div>
    </div>
  </template>


  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
 

  @import url('https://fonts.googleapis.com/css2?family=Geologica:wght@600&display=swap');

  
 
  .footer{
        position: relative;
        bottom:0;
        left: 0;
        width: 100%;
        height: 200px;
        background-color: palevioletred;
        color: white;
        font-family: 'Geologica', sans-serif;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        
  }
  @media screen and (max-width: 300px){
    .footer{
      display: flex;
      flex-direction: column;
      height: 500px;
    }
  }
  @media screen and (max-width: 420px){
    .footer{
      display: flex;
      flex-direction: column;
      height: 500px;
    }
  }

  .footer-text-left{
    font-size: 25px;
   padding-left: 40px;
    float: left;
    word-spacing: 50px;
  }
  .menu:hover{
    background-color: blueviolet;
    font-size: 20px;
    padding: 14px 16px;
  }
  img{
    max-width: 100px;
  }
  
  </style>