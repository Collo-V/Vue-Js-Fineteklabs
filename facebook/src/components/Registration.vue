<template>
        <nav>
    <p>Facebook</p>
    <form action="" id="navform">
        <fieldset><label for="username">Username or phone</label><input name="username" ></fieldset>
        <fieldset><label for="username">Password</label><input name="username" ><a href="">Forgotten password</a></fieldset>
        <button type="submit">Log In</button>
    </form>
</nav>
<div class="reg">
    <form action="">
        <p class="create">Create a new account</p>
        <p class="quick">It's quick and easy</p>
        <fieldset id="names"><input type="text" name="" id="fname" placeholder="First name">
        <input type="text" name="" id="lname" placeholder="Last name"></fieldset>
        <fieldset id="mail"><input type="text" name="" id="username" placeholder="Email address or phone number"></fieldset>
        <fieldset id="pass"><input type="password" name="" id="password" placeholder="Password"></fieldset>
        <fieldset><p>Date of birth</p>
            <select name="day" id=""><option v-for="n in 31" v-bind:value="n">{{n}}</option></select>
            <select name="month" id=""><option v-for="month in months" v-bind:value="month"> {{month}} </option></select>
            <select name="month" id=""><option  v-for="n in 100" v-bind:value="cur-n" >{{cur-n}}</option></select>
            <div class="help"><span>?</span> <span class="details"> Providing your date of birth helps make sure that you get the right Facebook experience for your age. If you want to change who sees this, 
            go to the About section of your Profile. For more details, please visit our Data Policy. <span>bbtftycyc</span></span></div>
        </fieldset>
        <fieldset id="gender"><p>Gender</p>
            <input type="radio" name="gender" value="Male" id="male"><label for="male">Male</label>
            <input type="radio" name="gender" value="Female" id="female"><label for="female">Female</label>
            <input type="radio" name="gender" value="Custom" id="custom"><label for="custom">Custom</label>
            <div class="help"><span>?</span> <span class="details"> You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.</span></div>
        </fieldset>
        <p class="terms">By clicking Sign Up, you agree to our <a href="">Terms</a>,<a href=""> Data Policy </a>and <a href="">Cookie Policy</a>
        . You may receive SMS notifications from us and can opt out at any time.</p>
        <button class="sign">Sign Up</button>
    </form>

</div>
<Foot></Foot>
</template>

<script>
var years=[];
var cur=new Date().getFullYear();
for(var a=cur;a<=cur-100;a--){
    years.push(a)
}

import Foot from './Footer.vue'
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
  
}
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{font-family: Verdana, Geneva, Tahoma, sans-serif;box-sizing: border-box;} 
p{margin: 4px 0px;} 
    a{text-decoration: none;}a:hover{text-decoration: underline;}
    nav form a,nav form a:visited{color:#fcfcfc;display: block;padding: 10px;}
    header{color: initial;}
    nav{background-color: #3949ab;color: #ffffff;display: flex;align-items: center;height:90px;justify-content: space-around;}
    nav p{margin: unset; float: left;font-size: 40px;height: min-content;}
   #navform{display: flex;font-size: 12px;}form button{height: fit-content;background-color:#0559a8c9;border: unset;display: block;align-self: center;}
    fieldset{border: unset;position: relative;}
    nav fieldset label{display: block;}
    .reg{width: 100%;height: 100%;background-color: #ecedf0;position: relative;padding: 30px 0px;}
    .reg form{margin: 0 auto;width: 500px;}
    .reg input{height: 40px;border-radius: 5px;border-color: #acadb1;}
    .reg a{display: inline;color:#0559a8c9;}
    #pass input,#mail input{width: 100%}#gender input{height: initial;}#gender label{margin-right:20px ;}
    #fname,#lname{width:49%;}#fname{float: left;}#lname{float: right;}
    fieldset p{color: #818286;font-weight: bold;}
    .create{font-size: 36px;font-weight: bold;margin: unset;}
    .quick{font-size: 20px;}
    select{padding: 4px 8px;display: inline;float: left;} .reg label{display: inline;}
    .terms{font-size: 11px;}
    .sign{background-color: #14831ac5;padding: 8px 20px;color: #ffffff;width: 200px;font-size: 20px;border-radius: 5px;}
    .help{height: 20px;width: 20px;border-radius: 50%;position: relative;background-color: #363738;text-align: center;display:flex;justify-content: center;align-items: center;float: right;}   
    .details{position:absolute;right: 140%;bottom: -50%; background-color: #ffffff;width:300px;text-align: initial;box-shadow: 2px 2px 4px; padding:10px;font-size: 11px;}
    .details::after{content: "";position: absolute;top:48%;left:100%;border-top: -5;border-style: solid;border-width: 10px;border-color: transparent  transparent transparent#ffffff;}
    .details span{}
</style>
