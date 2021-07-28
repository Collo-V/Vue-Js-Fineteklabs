<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
#app {
  height: 100%;position: relative;
  
  
}
a{text-decoration: none;}
body{position: relative;;}

input:focus-visible{outline: none;}
button{padding: 10px 15px;cursor: pointer;}
.card{box-shadow:2px 2px 4px #c5c6ca;}
.modal{height:100%;width:100%;z-index: 1;position: fixed;top:0px;left:0%;display: none;align-items: center;justify-content: center;}
.rounded-b{border-radius: 8px;}

.white-t{color: #ffffff;} .white-b{background-color: #ffffff;}
.black-t{color: #111;} 
.grey-b{background-color: #ecedf0}.grey-t{color: rgb(128, 128, 128);} .grey2-b{background-color: #c5c6ca;}
.royalb-b{background-color:#397eff}.royalb-t{color: #397eff;}
.main-col{background-color:#4267B2 ;}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
