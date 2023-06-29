<template>
  <div class="hello">
    <h1 class="bg p-5 text-centre ">{{ msg }} <br>

      <a href="/products" class="btn" style="width: 100px;">
        Shop Now!
      </a>
    </h1>
    
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.btn{
  color: purple;
  background-color: pink;
}
.btn :hover{
  background-color:blueviolet;
}
.bg{
    color: white;
    width: 100vw;
    height: 100vh;
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    background-image: url('https://i.postimg.cc/GmZD3R7s/barbie-tingz.jpg');
    background-size: cover;
    background-position:  center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
img{
  max-width: 300px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
