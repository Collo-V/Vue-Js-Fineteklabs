<template>
 <nav>
     <div>
     <img src="../assets/logo.png" alt="">
     <input type="text" placeholder="Search Facebook">
     </div>
     <div class="qucklinks">
         <span><i class="fas fa-home"></i></span>
         <span><i class="fas fa-desktop"></i></span>
         <span><i class="fas fa-users"></i></span>

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
*{box-sizing: border-box;}
nav{height:50px;width:100%;display: flex;flex-direction: row;justify-content: space-between;border-bottom: solid 1px;align-items: center;color:#fff;background-color: #212121;}
nav img{height:90%}
nav div{height:100%;display: flex;align-items: center;}
nav div span{height: 100%;padding: 20px 50px;display: flex;align-items: center;float: left;margin: 0px 10px;}
.quicklinks span{border-bottom: solid 1px #00f;border-radius:15px}
.quicklinks span:hover{background-color: #353333;}

</style>