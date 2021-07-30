<template>
<span style="display:none">{{Showing()}} {{PostShow()}} </span>
<div id="content" class="bg-grey-darken-4"></div>
<div v-for="posts in topost" :key="posts.postid" style="width:100%">
    <div class="text-white mt-3 rounded-lg postcont" style="background-color:#292727">
        <div class="d-flex flex-row align-center"><img :src="posts.profile" class="profilepic mr-2" style="height:50px;width: 50px;border-radius: 50%;display:inline" >
            <span class="owner py-3">{{posts.owner}}</span></div>
        <div class="postcontent bg-transparent" style="font-size:18px;padding:10px">{{posts.content}}</div>
        <div class="imgcont" v-if="posts.image"> <v-img :src="posts.image" width="100%"></v-img></div>

        <!-- NO> OF LIKES -->
        <v-card class="bg-transparent pa-1 text-white" width="100%">
           <span v-if="posts.postlikes>0"><span class="rounded-circle bg-blue pa-1 pl-2 mr-1"><v-icon class="mr-1" size="10">mdi-thumb-up</v-icon></span>{{posts.postlikes}}</span>


        </v-card>

        <div class="mt-1">
        <button  @click="Like(posts.postid)" class="reactionbtn pa-2 rounded-lg text-white">
        <v-icon>mdi-thumb-up-outline</v-icon> Like</button>
        <button  @click="CommentShow(posts.postid)" class="reactionbtn pa-2 rounded-lg text-white">
        <i  class="mdi-comment-outline mdi v-icon v-icon--size-default mr-1"></i> Comment</button>
        <button  @click="Share(posts.postid)" class="reactionbtn pa-2 rounded-lg text-white" v-show="posts.postlikes">
        <i  class="mdi-share-outline mdi v-icon v-icon--size-default mr-1"></i> Share</button>
        </div>

    </div>
    
</div>

  
</template>

<script>

import {users,posts,profiles,auth} from  "../firebase"
import {Authcheck} from "../common"
export default {
    
    name:"posts",
    

data(){
    return{
        user:'',
        owner:'no',
        content:'',
        profile:'',
        postlikes:'',
        post:[],
        topost:'',
        hasliked:false
    }
},
methods:{
    PostShow:function(){
         auth.onAuthStateChanged(user=>{
           this.user=user.email;})
        if(this.topost!=''){return}
        posts.get().then(snapshot=>{
            var html=[];
            snapshot.docs.forEach(doc=>{
                var postid=doc.id;
                html+=[];
                var post=doc.data();
               var thisuser=post.user;

                //    alert("checking profile");
               profiles.get().then(snapshot=>{
                    snapshot.docs.forEach(doc=>{
                        var profile=doc.data();
                        if(profile.user==thisuser){
                        this.profile= profile.profilepic
                        }
                        
                    })
                })
                if(this.profile==""){
                            this.profile= "https://firebasestorage.googleapis.com/v0/b/facebook-832aa.appspot.com/o/posts%2F1627374203034.png?alt=media&token=0ecb4d74-c3f4-4201-a58b-06062fb15144";
                        }

                // alert("profile checked")

                // No  OF LIKES AND COMMENTS
                posts.doc(postid).collection("Likes").get().then(snap=>{
                   var postlikes=snap.size;

                //check if the user alredy liked the photo
                    snap.forEach(reactor=>{
                        if(reactor.user==this.user){this.hasliked=true}
                    })
                        users.get().then((snap)=>{
                            snap.docs.forEach(user=>{
                                if(user.data().email==thisuser){
                                    var owner=user.data().firstname.concat(" ",user.data().surname);
         
                                    var content=post.content;var image=post.image;var profile=this.profile;var hasliked=this.hasliked;
                                    var details={profile,owner,content,image,postid,postlikes,hasliked};console.log(hasliked)
                                    this.post.push(details);
                                 }
                             })
                         })
                        


                })             


            })
        })
    },
    
    Showing:async function(){
        this.topost=this.post;
    },
    Like: function(id){
        auth.onAuthStateChanged(user=>{
            var thisuser=user.email;
            var postlikes=posts.doc(id).collection("Likes");
            postlikes.add({
                user:thisuser,
                reaction:"Like"
            }).then(console.log("Done"))
        })
    }
    
   
    
},

}
</script>

<style scoped>
.postcont{background-color: turquoise;}
#content{width: 100%;}
.owner{display: block;font-size: 18px;}
.imgcont{width: 100%;border-radius: 50%;}
.imgcont img{width:500px;height: auto;}
.postimage{display: none;}
.profilepic{height:150px;width: 150px;border-radius: 50%}
.ownercont{display: flex; flex-direction:column;}



</style>