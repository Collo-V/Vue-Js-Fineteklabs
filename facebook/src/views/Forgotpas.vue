<template>
        <nav class="">
    <p class="royalb-t">Facebook</p>
    <span >
       <input name="username" placeholder="Email or phone" class="rounded-b">
        <input name="password" placeholder="Password" class="rounded-b"><button type="submit" class="royalb-b rounded-b">Log In</button>
        <a href="" class="royalb-t">Forgotten password?</a>
    </span>
</nav>
<div class="reg grey-b">
    <form action="" class="white-b rounded-b card">
        <p class="create">Find your account</p>
        <p class="quick">	
Please enter your email address or mobile number to search for your account.</p>
        
        <fieldset><input type="text" name="" id="username" placeholder="Mobile number" class="rounded-b"></fieldset>
        <div><button class=" black-t rounded-b cancel grey2-b">cancel</button><button class="white-t rounded-b royalb-b sign">Sign Up</button></div>
    </form>

</div>
<Foot></Foot>
</template>

<script>


import Foot from '../components/Footer.vue'
export default {
  name: 'Login',
  components:{
    Foot
  },

  data(){
    return{
      months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      cur:new Date().getFullYear(),
      
    }
  },
  methods:{
    Showd:function(elmnt){
      var y=document.getElementsByClassName("details");
      for(var r=0;r<y.length;r++){ y[r].classList.remove("show");}
      y[elmnt].classList.add("show");
    },
    Shows: function(n){
      // alert(n)
      document.getElementsByClassName("details")[n].style.visibility="hidden";
      
    }
  }
  
}
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{font-family: Verdana, Geneva, Tahoma, sans-serif;box-sizing: border-box;} 
p{margin: 4px 0px;} 
    a:hover{text-decoration: underline;}    
    header{color: initial;}
    nav a{font-size: 12px;}
    nav{height:50px;} nav span{float:right;margin-right: 30px;}
    input, nav button{margin-left:12px;height:40px;padding: 10px;border: unset;border: solid 1px #b0b1b4de;font-size: 15px;}
    nav input{width:180px}
    .reg input{margin-left:unset;}
    nav p{margin: unset; float: left;font-size: 25px;height: min-content;font-weight: bold;}
    .reg{width: 100%;height:fit-content;position: relative;display: flex;}
    .reg form{margin: 100px auto;width: 500px;align-self: center;}
    .reg a{display: inline;color:#0559a8c9;}
    .reg input{width:100%;height: 40px;}
    .reg fieldset{padding:15px 10px;border: none;border-bottom: solid 1px #818286;}
    .create{font-size: 20px;font-weight: bold;margin: unset;padding:15px 10px;border-bottom: solid 1px #818286;}
    .quick{padding:10px;}
    .reg div{padding:15px 10px ;float:right}
    .cancel,.sign{border:none;margin-left:20px;}
   


    .white-t{color: #ffffff;}.black-t{color: #111;} 
</style>
