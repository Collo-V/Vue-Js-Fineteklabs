<template>
  <HomeHeader></HomeHeader>
  <v-spacer></v-spacer>
  <v-card height="500px" class="bg-grey-darken-3 ">
      <v-card  class="mx-auto bg-transparent " width=50% height="100%" style="position:relative">
         <img :src="Coverimage()" alt="No image" style="z-index:2;height:60%;width:100%">
         <div>
            <v-avatar size="200" class="bg-transparent myprofile" > 
            <v-img src="../assets/logo.png" class="rounded-lg" height="200"></v-img>          
                
            </v-avatar>
            <v-card width="200" class="bg-transparent">
                <v-btn flat class="bg-transparent">View profile</v-btn>
                <v-btn flat class="bg-transparent">Update profile</v-btn>                
            </v-card>
        </div>

      </v-card>
      
  </v-card>
  <v-card class="bg-grey-darken-4 text-white" height="100%">
         <v-card flat class="content mx-auto bg-grey-darken-4" width="30%">
             <v-card height="100" class="pa-3" style="background-color: #292727;" width="100%">
                 <v-avatar size="large" class="bg-grey-darken-4">
                    <v-img src="../assets/logo.png"></v-img>          
                </v-avatar>
        
             </v-card >             
                 <Posts></Posts>
             
         </v-card>
    </v-card>
</template>

<script>
import {users,auth,posts,storage} from "../firebase"
import Posts from '../components/Posts.vue'
import HomeHeader from "../components/HomeHeader.vue"


export default {
    components:{
        HomeHeader,Posts
    },
    methods:{
        Coverimage:function(){
            return "https://firebasestorage.googleapis.com/v0/b/facebook-832aa.appspot.com/o/posts%2F1627374203034.png?alt=media&token=0ecb4d74-c3f4-4201-a58b-06062fb15144"
        }
    }

}
</script>

<style scoped>
.content{width: 30%;}
.myprofile{position: absolute;left:45%;bottom: 30%;}

</style>