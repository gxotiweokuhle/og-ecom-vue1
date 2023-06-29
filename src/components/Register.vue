<template>
    <div>
        <h5>Create a <span>Kiddies</span> Account</h5>
    <form >
        
  <div class="form">
    <div class="name">
            <h5>Fullname:</h5>
            <input type="name" class="form-control" id="exampleFormControlInput1" v-model="name"><br>
            {{name}}
            
        </div>
        <div class="id">
            <h5>Are you are a South African Citizen?</h5>
            <input type="radio" id="yes" v-model="confirm" value="Yes">
            <label for="yes" class="yes">Yes</label>
            <input type="radio" id="no" v-model="confirm" value="No" >
            <label for="no" class="no">No</label>
           <br>
           <span>Confirmed:
            <pre>{{confirm}}</pre>
           </span>  
        </div>
        <div class="id">
            <h5>ID Number:</h5>
            <input type="number" class="form-control" id="exampleFormControlInput2" v-model="number"><br>
            {{number}}
        </div>
        <div class="phone">
            <h5>Phone Number:</h5>
            <input type="email" class="form-control" id="exampleFormControlInput2" v-model="idNo"><br>
            {{idNo}}
        </div>
        <div class="mb-3">
            <h5>Email:</h5>
            <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com" v-model="email"><br>
            {{email}}
        </div>
        <div class="gender">
           <h5>Gender:</h5>
             <input type="text" class="form-control" id="choose"  v-model="gender">
            <br>
            {{ gender }}
        </div>
       
         <div class="prov">
            <h5>Select Province</h5>
            <select v-model="province"  style="width: 200px; font-size: 18px;">
                <option value="Western Cape" >Western Cape</option>
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Northern Cape">Northern Cape</option>
                <option value="North West">North West</option>
                <option value="Kwa-Zulu Natal">Kwa-Zulu Natal</option>
                <option value="Free State">Free State</option>
                <option value="Gauteng">Gauteng</option>
                <option value="Limpopo">Limpopo</option>
                <option value="Mpumalanga">Mpumalanga</option>
            </select>
            <br>
            <span>Selected Province:{{province}}</span>
        </div>
        <div>
            <h5>Occupation Level:</h5>
            <input type="radio" id="employed" v-model="checked" value="Employed">
            <label for="Employed">Employed</label><br>
            <input type="radio" id="unemployed" v-model="checked" value="Unemployed">
            <label for="Unemployed">Unemployed</label><br>
            <span id="btm">Checked:
            <pre>{{ checked }}</pre>
            </span>

        </div>
  </div>

    </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name:'',
               confirm:'',
               number:'',
               idNo:'',
               email:'',
               picked:'yes',
               gender:'',
                province:'Western Cape',
                checked:'',
            }
        }
    }

</script>
<style scoped>
   
    input{
        width: 200px;
        
    }
    form{
        background-color: pink;
        width: 100vw;
       
    }
    .form-control {
        margin-inline: auto;
    }
    span{
        color: blueviolet;
    }
    .form {
        width: 400px;
        margin-inline: auto;
    }
</style>