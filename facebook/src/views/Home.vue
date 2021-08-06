<template>
 <v-app>
     {{Authcheck()}}
     <HomeHeader :theuser="user"></HomeHeader>
     <!-- CONTENT -->
     <v-card class="bg-grey-darken-4 text-white mt-16" height="100%" >
         <v-card width="300" class="float-left mt-4 bg-transparent ml-2">
             
             <v-card class="hoverable py-3 mb-2 text-white px-2">
            <v-avatar size="30" class="bg-grey-darken-4 float-left">
                    <img :src="user.profile">        
            </v-avatar><span>{{user.firstname}} {{user.surname}}  {{SideMenu()}}</span>
        </v-card>
        <v-card class="hoverable py-3 mb-2 text-white px-2 d-flex align-center" v-for="menu in sideMenu" :key="menu" elevation="0">
             <img :src="menu.icon"><span class="ml-2">{{menu.name}}</span>
        </v-card>
        

        

        </v-card>


              <v-card width="200" class="float-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ratione voluptas nostrum
              harum repudiandae excepturi quod suscipit maiores officia molestias.</v-card>
         <v-card flat class="content mx-auto bg-grey-darken-4" >
             <v-card height="100" class="pa-3" style="background-color: #292727;" width="100%">
                 <v-avatar size="large" class="bg-grey-darken-4">
                    <v-img src="../assets/logo.png"></v-img>          
                </v-avatar>
        <span class="bg-grey-darken-3 post-input rounded-pill pa-3" @click="ShowPost()">{{postSpan()}}</span>

             </v-card >             
                 <Posts :theuser="user"></Posts>
             
         </v-card>
    </v-card>
 </v-app>
 <!-- MODAL -->
 <div class="modal">
           <v-card class="mx-auto post bg-grey-darken-3 text-white" width="30%">
               <span class="post-head"><h1>Create Post</h1></span>
               <form action="">
                   <div class="postcontent">
               <textarea name="" :placeholder="Placeholder()" class="post-content text-white" 
               oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' v-model="post" @keyup="Valid()"></textarea>
                <div id="imgcont" v-show="imgpresent"><span class="close rounded-circle pa-1" @click="RemoveImg()">X</span><img id="myimg"> </div> </div>
               <div class="mx-auto attatch pa-3 rounded-ig">Add to your post
                   <span >
                       <label for="files" class="text-green-lighten-1 label" @click="Create()"><v-icon large color="green-lighten-1">mdi-image-multiple</v-icon></label>
                        <span class="icon rounded-circle pa-2"><v-icon color="amber ">mdi-emoticon-excited-outline</v-icon></span>
                        <span class="icon rounded-circle pa-2"><v-icon color="red accent-2">mdi-map-marker</v-icon></span>
                        <span class="icon rounded-circle pa-2"><v-icon color="red accent-3">mdi-microphone-variant</v-icon></span>
                   </span>
                   
               </div>
               <v-btn id="post" width="90%" class="ml-4 mt-2 submit" disabled v-show="disabled">post</v-btn>
               <v-btn width="90%" class="ml-4 mt-2 submit bg-blue" v-show="!disabled" @click="Post()">post</v-btn>
              
               </form>

           </v-card>
    </div>
</template>

<script>
import {users,auth,posts,storage,profiles} from "../firebase"
import Posts from '../components/Posts.vue'
import HomeHeader from "../components/HomeHeader.vue"


export default {
    name:"Home",
    components:{
        Posts,HomeHeader
    },
    data(){
        return {
            sideMenu:[],
           thisuser:"",
            notif:true,
            post:"",
            icon:"bg-transparent",
            disabled:true ,
            user:"",
            postimg:'',
            email:'',
            imgpresent:false
        }
    },
    methods:{
        Saver:function(){
             var input=document.createElement("input");
                input.type="file";
                var x=document.getElementById("side-menu");
                var y=document.getElementById("name");
            var name=y.value;
           var metadata={name:name}
            input.onchange = e=>{
                    var files=e.target.files;
                    var reader=new FileReader();
                     reader.readAsDataURL(files[0]);
                     this.count++;
                     storage.ref("side-menu-items/"+this.count.toString()+name).put(files[0],metadata).then(()=>{
                         console.log("success")
                         name="";
                         y.focus()
                    })
            }
            input.click()
        },
        SideMenu:function(){
            if(this.sideMenu.length>0){return}
            var tree=storage.ref("side-menu-items");
            tree.listAll().then(images=>{
               images.items.forEach(image=>{
                   var storageRef = storage.ref();
                   var em= storageRef.child(image.fullPath);
                   var name=image.name;
                   name=name.substring(2,name.length-1)
                   em.getDownloadURL().then((url) => {
                        this.sideMenu.push({name:name,icon:url})
                    })
                })
            })
       },
        Icon:function(n){
            if(n==0){this.icon="bg-grey-lighten-1"}
            else{this.icon="transparent"}
        },
        Valid:function(){
            if(this.post=="" && this.imgpresent!=true){
                this.disabled=true
            }
            else{this.disabled=false}
        },
        ShowPost:function(){
            var x=document.querySelector(".modal");
            x.style.display="flex"
        },
        Authcheck:function(){
            if(this.user!=""){return}
            auth.onAuthStateChanged(user=>{
                var thisuser=this.email=user.email;
                users.get().then((snapshot)=>{
                    snapshot.docs.forEach(doc=>{
                        var data=doc.data();
                        if(data.email==thisuser){
                            var firstname=data.firstname;var email=thisuser;var userprofile='';var surname=data.surname;
                        
                        profiles.get().then(snapshot=>{
                            snapshot.docs.forEach(doc=>{
                                var profile=doc.data();
                        if(profile.user==email){
                            userprofile= profile.profilepic
                        }
                        })
                        this.user={"firstname":firstname,"email":email,"profile":userprofile,"surname":surname}
                    })

                        }
                    })
                })
            })
            },
            Placeholder:function(){
                return "What's on your mind, "+this.user.firstname
            },
            postSpan: function(){
                if(this.post==""){return "What's on your mind, "+this.user.firstname}
                else{return this.post}
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
            Post:function(){
                if(this.imgpresent==true){
                    var name= "posts/"+Date.now().toString()+".png"
                var imagepost = storage.ref(name).put(this.postimg).then(()=>{
                    
                    var storageRef = storage.ref();
                    storageRef.child(name).getDownloadURL().then((url) => {
                        
                        const post={
                            user:this.email,
                            content:this.post,
                            image:url
                        }
        
                        posts.add(post).then(after=>{
                            console.log("success! ",after.id);
                            location.reload()
                        })
                    })
                });}
                else{    
                       const post={
                            user:this.email,
                            content:this.post,
                        }
                        posts.add(post).then(after=>{
                            console.log("success! ",after.id);
                            location.reload()
                            
                       })
                }
            
            },
            RemoveImg:function(){
                var myimg=document.getElementById("myimg");
                myimg.src="";
                if(this.post==""){this.disabled=true}
                this.imgpresent=false;                      
            },
           
    }

}
</script>

<style scoped>
/* body{background-color: #333;} */
.cds{background-color: #292727;}
.content{width:40%}

.post-head{display: block;width: 100%;text-align: center;border-bottom: solid #353333;padding: 20px 2px;}.post-head h1{font-weight: normal;font-size: 18px;}
.post-content{width:100%;outline: none;padding: 10px;font-size: 24px;height: fit-content;} 
.hidden{display: none;}
.label{padding: 10px;background-color:transparent;}
.l-photos{background-image: url("../assets/feeling-icon.jpg");;}
.icon{height:40px;width: 40px;background-color: transparent;}
.icons:hover{display: none;}
.attatch{border: solid 1px #c7c2c2;width:90%;display:flex;justify-content: space-between;}
form{width: 100%;}
.postcontent{width:100%;max-height: 300px;overflow-y: scroll;}
#post{cursor:wait;}
#imgcont{height:auto;width:90%;border-radius: 10px;margin: 0 auto;position: relative;}
#myimg{height:100%;width: 100%;}
.close{position: absolute;top:10px;right:10px;height:30px;width: 30px;text-align: center;}
.close:hover{background-color: #c7c2c2;}
.postcont{background-color: turquoise;}
#content{width: 100%;}
.owner{display: block;font-size: 18px;}
.imgcont{width: 100%;border-radius: 50%;}
.imgcont img{width:500px;height: auto;}
.postimage{display: none;}
.hoverable{background-color: transparent;}
.hoverable:hover{background-color:#504f4f;}
@media (max-width:640px){
    .content{width: 90%;}
}
</style>    