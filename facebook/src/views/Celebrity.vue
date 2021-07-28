<template>
  <div class="log"> 
    <div class="logcont">
    <div class="form">

    <div>
        <img src="../assets/logo.png" alt="">
    </div>
    </div>
    <div class="form">
        
    <div>
        <img src="../assets/logo.png" alt="">
    </div>
  </div>
  </div>
  </div>
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
      msg:"we are back"
    }
  },
  methods:{
    Show: function(){
      var x=this.$refs.password;
      var y=document.getElementById("show");
      var z=document.getElementById("hide");
      if(x.value!=""){
        y.style.display="inline";
        
      }
      else{
        y.style.display="none";
        z.style.display="none";
        }
    },
    View: function(){
      document.getElementById("password").type="text";      
      document.getElementById("show").style.display="none";
      document.getElementById("hide").style.display="inline";
      
    },
    Hide: function(){
       document.getElementById("password").type="password";      
      document.getElementById("show").style.display="inline";
      document.getElementById("hide").style.display="none";
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{font-size:50px;}
    .logcont{width:90%;margin:auto auto;display: flex;justify-content: center;align-items: center;height: 100%;flex-direction: row;}
    .logcont div{display: inline;margin-left:10px}
    .form{background-color: #ffffff; width: 45%;min-width: 200px;max-width: 400px; text-align: center;;height:fit-content;box-shadow: 2px 2px 4px #b3b0b0;border-radius: 10px;padding: 14px;width: 100%;height:340px;}
    .form p{margin-top: 100px;}
    .f-text{font-family:Verdana, Geneva, Tahoma, sans-serif}
    .log{position: relative;background-color:#ecedf0 ;height: 700px;}
    h1{color:#397eff} h1+p{font-size: 18px;}
    form{border-bottom: solid 1px #b2b3b4;padding-bottom: 10px;}
    form button,input{width: 100%;padding:15px 10px;margin-bottom: 10px;border-radius: 5px;border: solid 1px #706d6d;}
    form input{text-align: left;font-size: 15px}
    form input:focus{border:solid 1px blue}
    form button{background-color: #397eff;width: 90%;color: #ffffff;font-size: 18px;font-weight: bold;}
    a{text-decoration: none;}
    form a,form a:visited{color:#1e88e5;display: block;padding: 10px;}
     form a:hover{text-decoration: underline;}
     .create{padding:15px 10px;background-color: #24bb03;color: white;border:none;border-radius: 8px;font-size: 15px;font-weight: bold;margin-top:10px}
     .create:hover{background-color: #209705;}
     p a{color: black;font-weight: bold;} a:hover{text-decoration: underline;}
     fieldset{position: relative;border: none;width: 90%;}
     .viewpass{position: absolute;z-index: 1;right:20px;font-weight:100;color: #706d6d;display: none;top:30%}
     #password:hover #show{display: inline;}
</style>
