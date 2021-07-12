<template>
  <div>
<h1>{{msg}}</h1>
<p>So here are, diving into vue js3</p>

  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
   return{
     msg:"Welcome "
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
p{font-size: 18px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;}
</style>
