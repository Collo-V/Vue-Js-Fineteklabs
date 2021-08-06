<template>
        <nav class=" main-col white-t">
    <p>Facebook</p>
    <form action="" id="navform">
        <fieldset><label for="username">Username or phone</label><input name="username" ></fieldset>
        <fieldset><label for="username">Password</label><input name="username" ><router-link :to="{name:'fgtPass'}">Forgotten password?</router-link></fieldset>
        <button type="submit">Log In</button>
    </form>
</nav>
<div class="reg grey-b">
    <form action="" @submit.prevent="Submit()">
        <p class="create">Create a new account</p>
        <p class="quick">It's quick and easy</p>
        <fieldset id="names"><input class="reginput" type="text" name="" id="fname" placeholder="First name" v-model="firstname" @blur="Valid('fname')">
        <input class="reginput" type="text" name="" id="Sname" placeholder="Surname" v-model="surname" @blur="Valid('Sname')"></fieldset>
        <div id="error" class="text-red text-center" ></div>
        <fieldset id="mail"><input class="reginput" type="text" name="" id="username" placeholder="Mobile number or Email address" v-model="username" @blur="Valid('username')"> </fieldset>
        <fieldset id="pass"><input class="reginput" type="password" name="" id="password" placeholder="Password" v-model="password" @blur="Valid('password')"></fieldset>
        <fieldset><p>Date of birth</p>
            <select name="day" id="day" v-model="bday"><option v-for="n in 31" :key="n" :value="n">{{n}}</option></select>
            <select name="month" id="month" v-model="bmonth"><option v-for="month in months" :key="month" v-bind:value="month"> {{month}} </option></select>
            <select name="year" id="year" v-model="byear"><option  v-for="n in 100"  :key="n" v-bind:value="cur-n" >{{cur-n}}</option></select>
            <div class="help white-t" v-on:click="Showd(0)"><span>?</span> <span class="details black-t"> Providing your date of birth helps make sure that you get the right Facebook experience for your age. If you want to change who sees this, 
            go to the About section of your Profile. For more details, please visit our Data Policy. <span><button type="button" v-on:click="Shows(0)">Close</button></span></span></div>
        </fieldset>
        <fieldset id="gender"><p>Gender</p>
            <input class="reginput" type="radio" v-model="gender" value="Male" id="male"><label for="male">Male</label>
            <input class="reginput" type="radio" v-model="gender" value="Female" id="female"><label for="female">Female</label>
            <input class="reginput" type="radio" v-model="gender" value="Custom" id="custom"><label for="custom">Custom</label>
            <div class="help white-t" v-on:click="Showd(1)"><span >?</span> <span class="details black-t"> You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.
              <span><button type="button" v-on:click="Shows(1)">Close</button></span></span></div>
        </fieldset>
        <p class="terms">By clicking Sign Up, you agree to our <a href="">Terms</a>,<a href=""> Data Policy </a>and <a href="">Cookie Policy</a>
        . You may receive SMS notifications from us and can opt out at any time.</p>
        <button class="sign white-t" >Sign Up</button>
    </form>

</div>
<Foot></Foot>
</template>

<script>


import Foot from '../components/Footer.vue'
import {users,auth} from "../firebase"
// import auth from "../firebase" 
export default {
  name: 'Login',
  components:{
    Foot
  },

  data(){
    return{
      months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      cur:new Date().getFullYear()+1,
      surname:'',
      firstname:'',
      username:'',
      password:'',
      bday:1,bmonth:"Jan",byear:new Date().getFullYear(),
      gender:'',
     }
  },
  methods:{
    Showd:function(elmnt){
      var y=document.getElementsByClassName("details");
      for(var r=0;r<y.length;r++){ y[r].classList.remove("show");y[r].style.visibility="visible"}
      y[elmnt].classList.add("show");
    },
    Shows: function(event,n){
      event=0;
      document.getElementsByClassName("details")[n].classList.remove("show");
      
    },
    Valid:function(id){
      var a=document.getElementById(id);
      if(a.value==""){a.classList.add("error")}else{a.classList.remove("error")}
      // if(id="password" && a.value.length<6){a.classList.add("error")}else{a.classList.remove("error")}
    },
    Submit:function(){
      if(this.firstname==""){document.getElementById("fname").classList.add("error")}else{document.getElementById("fname").classList.remove("error")}
      if(this.surname==""){document.getElementById("Sname").classList.add("error")}else{document.getElementById("Sname").classList.remove("error")}
      if(this.username==""){document.getElementById("username").classList.add("error")}else{document.getElementById("username").classList.remove("error")}
      if(this.password==""|| this.password.length<6){document.getElementById("password").classList.add("error")}else{document.getElementById("password").classList.remove("error")}
      // VALIDATE DATE:
      var month=document.getElementById("month");
      var day=document.getElementById("day");
      var year=document.getElementById("year")

      var theday=parseInt(this.bday);
      var themonth=this.bmonth;
      var theyear=parseInt(this.byear);
      if(themonth=="Feb" && theday>28){if(theyear%4==0 &&theday<=29){month.classList.remove("error");day.classList.remove("error")}else{month.classList.add("error");day.classList.add("error")}}else{month.classList.remove("error");day.classList.remove("error")}





      var a=document.getElementsByClassName("error")
      if(a.length<=0){
        var mail="";var phone=""

        if(parseInt(this.username).toString()=="NaN"){mail=this.username}
        else{phone=this.username;mail=this.firstname.toLowerCase().concat(this.surname.toLowerCase(),phone.slice(7,10),"@gmail.com")}
         const user={
          firstname:this.firstname,
          surname:this.surname,
          phone:phone,
          email:mail,
          password:this.password
        }
          auth.createUserWithEmailAndPassword(mail,this.password).then(cred =>{
            users.add(user).then(()=>{           
  
          })
        }).catch(error=>{
          document.getElementById("error").innerHTML=error.message;
        })
      }
      
    }
  }
  
}
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{font-family: Verdana, Geneva, Tahoma, sans-serif;box-sizing: border-box;} 
p{margin: 4px 0px;} 
    a{text-decoration: none;}a:hover{text-decoration: underline;}
    nav form a,nav form a:visited{color:#fcfcfc;display: block;padding: 10px;}
    header{color: initial;}
    nav{display: flex;align-items: center;height:90px;justify-content: space-around;}
    nav p{margin: unset; float: left;font-size: 40px;height: min-content;}
   #navform{display: flex;font-size: 12px;}form button{height: fit-content;background-color:#0559a8c9;border: unset;display: block;align-self: center;}
    fieldset{border: unset;position: relative;}
    .nav input{background-color: #ffffff;}
    nav fieldset label{display: block;}
    .reg fieldset{margin-bottom: 10px;}
    .reg{width: 100%;height: 70%;position: relative;padding: 30px 0px;}
    .reg form{margin: 0 auto;width: 500px;}
    .reginput{border:unset;height:  40px;border-radius: 5px;border:solid 1px  #acadb1;font-size: 18px;}
    .reg a{display: inline;color:#0559a8c9;}
    #pass input,#mail input{width: 100%}#gender input{height: initial;}#gender label{margin-right:20px ;}
    #fname,#Sname{width:49%;}#fname{float: left;}#Sname{float: right;}
    fieldset p{color: #818286;font-weight: bold;}
    .create{font-size: 36px;font-weight: bold;margin: unset;}
    .quick{font-size: 20px;}
    select{padding: 4px 8px;display: inline;float: left;border: solid 1px #111;} .reg label{display: inline;}
    .terms{font-size: 11px;}
    .sign{background-color: #14831ac5;padding: 8px 20px;width: 200px;font-size: 20px;border-radius: 5px;}
    .help{height: 20px;width: 20px;border-radius: 50%;position: relative;background-color: #363738;text-align: center;display:flex;justify-content: center; float: right;}   
    .details{position:absolute;right: 140%;bottom: -150%; background-color: #ffffff;width:300px;text-align: initial;box-shadow: 2px 2px 4px; padding:10px;font-size: 11px;display: none;}
    .details::after{content: "";position: absolute;top:48%;left:100%;border-top: -5;border-style: solid;border-width: 10px;border-color: transparent  transparent transparent#ffffff;}
    .details span{display: block;border-top: solid 1px #818286;margin-top: 10px;padding: 5px 0;}
    span button{float:right;padding:4px 10px;border-radius: 4px;color: white;}
    .show{display: initial;}
    .error{border-color: #f00}
    .error:focus{border-color: initial;}
    /* select.error{display: none;} */


   
</style>
