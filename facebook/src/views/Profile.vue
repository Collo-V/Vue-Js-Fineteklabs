<template>
  <HomeHeader></HomeHeader>
  <v-spacer></v-spacer>
  <v-card height="500px" class="bg-grey-darken-3 ">
      <v-card  class="mx-auto bg-transparent " width=50% height="100%" style="position:relative">
         <img :src="Coverimage()" alt="No image" style="z-index:2;height:60%;width:100%">
         <div class="profile-btn-cont mx-auto">
            <v-avatar size="200" class="bg-transparent myprofile" > 
            <v-img src="../assets/logo.png" class="rounded-lg" height="200"></v-img>          
                
            </v-avatar>
            <v-card width="250" class="bg-transparent pa-1 mx-auto mt-4 profile-btns">
                <button flat elevation="0" class="profile-btn text-white" width="100%"> <v-icon class="mr-1">mdi-account-box-outline</v-icon>View profile picture</button>
                <button flat elevation="0" class="profile-btn text-white" width="100%"><v-icon class="mr-1">mdi-image-multiple</v-icon>Update profile picture</button>
                <button flat elevation="0" class="profile-btn text-white" width="100%"><v-icon class="mr-1">mdi-image-frame</v-icon>Add frame</button>                  
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
    <!-- MODAL -->
 <div class="modal">
           <v-card class="mx-auto post bg-grey-darken-3 text-white" width="30%">
               <v-card class="bg-transparent text-white profile-header mb-2"><span class="py-4">Update profile picture</span><v-btn icon class="close mr-2">X</v-btn></v-card>
               <v-card class="bg-transparent" v-show="!imgpresent">
                <v-btn flat elevation="0" width=45% class="bg-blue-lighten-2" @click="Create()">+ upload photo</v-btn>
                <v-btn flat elevation="0" width=45% class="bg-transparent" color="white" outlined>+ add a frame</v-btn>
            </v-card>
            <v-card class="bg-transparent" v-show="imgpresent">
                <form action="" id="profileform">
                <textarea placeholder="Description" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' class="text-white description"></textarea>
                <div id="imagecont"> <img alt="" id="myimg"></div>
                </form>
                <v-spacer></v-spacer>
                <v-card class="bg-transparent" style="border-top:solid 1px #fff;padding:20px">
                    <button class="rounded-lg cancel">Cancel</button>
                    <button class="rounded-lg bg-blue"> Save</button>
                </v-card>
            </v-card>
           </v-card>
    </div>
</template>

<script>
import {users,auth,posts,storage} from "../firebase"
import Posts from '../components/Posts.vue'
import HomeHeader from "../components/HomeHeader.vue"


export default {
    components:{
        HomeHeader,Posts
    },
    data(){
        return{
            imgpresent:false,
        }
    },
    methods:{
        Coverimage:function(){
            return "https://firebasestorage.googleapis.com/v0/b/facebook-832aa.appspot.com/o/posts%2F1627374203034.png?alt=media&token=0ecb4d74-c3f4-4201-a58b-06062fb15144"
        },
        Create:function (e){
            var input=document.createElement("input");
                input.type="file";
                var files=[]
                input.onchange = e=>{
                    files=e.target.files;
                    var reader=new FileReader();
                    reader.onload=function(){
                        var myimg=document.getElementById("myimg");
                        myimg.src=reader.result;
                        // myimg.classList.add("myimg")
                    }
                    this.disabled=false;
                    this.imgpresent=true;
                    reader.readAsDataURL(files[0]);
                    this.postimg=files[0]
                }
                input.click()

            },
    }

}
</script>

<style scoped>
.modal{display: flex;}
.content{width: 30%;}
.myprofile{position: absolute;left:45%;bottom: 70%;}
.profile-btn-cont{position:relative}
.profile-btns{border:solid 1px #949393}
.profile-btns::after{content: "";position: absolute;bottom:100%;left:45%;border-top: -5;
border-style: solid;border-width: 10px;border-color: transparent  transparent #464545 transparent;}
.profile-btn{background-color: transparent;width:100%;text-align: left;}
.profile-btn:hover{background-color: #4e4c4c;}
.close{background-color: #949393;}
.close:hover{background-color: #c7c2c2;}
.profile-header{display:flex;justify-content: space-between;}
.description{width: 100%;border:solid 1px #949393;}
#imagecont{width:100%;text-align: center;}
#myimg{width: 300px;height: 300px;border-radius: 50%;}
</style>