<template>
 <nav>
     <div>
     <img src="../assets/logo.png" alt="">
     <input type="text" placeholder="Search Facebook">
     </div>
     <div class="qucklinks">
         <span><i class="fas fa-home"></i></span>

     </div>
     <div class="notifs">
         
     </div>
 </nav>
  
</template>

<script>
export default {
    name:"Home"

}
</script>

<style scoped>
/* body{background-color: #333;} */
nav{height:50px;width:100%;display: flex;flex-direction: row;}
nav img{height:90%}
nav div{height:100%}

</style>