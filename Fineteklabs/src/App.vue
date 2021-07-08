<template>
    <div>
      <div class="ab">
          <h1>{{msg}}</h1>
          <h3>{{head()}}</h3>
          <p> This is a very important question if you want to be an adept, not only in coding but also in the actual development enviroment.
              It is immportant that you be skillful in analyzing and developing algorithms. This is what separates software developers from coders and, with many coders arising, companies
              nowadays are in search for developers, those who understand clearly what they are doing.
          </p>


      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Gettting started with vue JS'
      }
      },
    methods:{
      head: function(j){
        return "Why use Js?"
      }
    }
  }
  </script>

  <style>
.ab{text-align: center;margin:0 auto;width:50%}
.ab p{width:300px;background-color: #47cbf3;padding: 10px;border-radius: 8px;font-size: 18px;margin:inherit}

  </style>
