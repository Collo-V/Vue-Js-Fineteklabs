<template>
<span style="display:none">{{Showing()}} {{PostShow()}} </span>
<div id="content" class="bg-grey-darken-4"></div>
<div v-for="(posts) in topost" :key="posts.postid" style="width:100%">
    <div class="text-white mt-3 rounded-lg postcont" style="background-color:#292727">
        <div class="d-flex flex-row align-center"><img :src="posts.profile" class="profilepic mr-2" style="height:50px;width: 50px;border-radius: 50%;display:inline" >
            <span class="owner py-3">{{posts.owner}}</span></div>
        <div class="postcontent bg-transparent" style="font-size:18px;padding:10px">{{posts.content}}</div>
        <div class="imgcont" v-if="posts.image"> <v-img :src="posts.image" width="100%"></v-img></div>

        <!-- NO> OF LIKES -->
        <v-card class="bg-transparent pa-1 text-white" width="100%">
           <span v-if="posts.postlikes>0"><span class="rounded-circle bg-blue pa-1 pl-2 mr-1"><v-icon class="mr-1" size="10">mdi-thumb-up</v-icon></span>{{posts.postlikes}}</span>
           <span class="float-right mr-2" v-if="posts.postcomments>0">{{posts.postcomments}} Comments </span>


        </v-card>

        <div class="mt-1">
        <button  @click="Like(posts.postid)" class="reactionbtn pa-2 rounded-lg text-white" v-show="!posts.hasliked">
        <v-icon>mdi-thumb-up-outline</v-icon>Like</button>
         <button  @click="Unlike(posts.postid)" class="reactionbtn pa-2 rounded-lg text-blue" v-show="posts.hasliked">
        <v-icon>mdi-thumb-up</v-icon>Like</button>
        <button  @click="CommentShow(posts.postid)" class="reactionbtn pa-2 rounded-lg text-white">
        <i  class="mdi-comment-outline mdi v-icon v-icon--size-default mr-1"></i> Comment</button>
        <button  @click="Share(posts.postid)" class="reactionbtn pa-2 rounded-lg text-white">
        <i  class="mdi-share-outline mdi v-icon v-icon--size-default mr-1"></i> Share</button>
        <v-card class="bg-transparent" style="height:auto">
           
                     <v-card class="bg-transparent" width="100%">
                         <v-avatar size="30" class="bg-grey-darken-4 float-left">
                    <img :src="theuser.profile">        
            </v-avatar>
            <textarea name=""  class="comment rounded-pill bg-grey-darken-3 text-white px-4" :id="posts.postid" placeholder="Write a comment"
             oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' @keyup.enter="PostComment(posts.postid)"></textarea>
              
            </v-card>
            <div v-for="commentor in ShowCmnt()[posts.postid]" :key="commentor" class="bg-transparent py-3" >
                <span style="display:none">{{commentor}}</span>
                <span class="d-flex align-center"><v-avatar size="30" class="bg-grey-darken-4 float-left">
                    <img :src="commentor.profile">        
                </v-avatar>
                <span class=" ml-1 text-white bg-grey-darken-3 d-flex flex-column rounded-pill px-4">{{commentor.firstname}} {{commentor.surname}}<span>{{commentor.comment}}</span></span></span>

            </div>
        </v-card>

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
        hasliked:false,
        userprofile:'',
        comments:{}
    }
},
methods:{
    PostShow:function(){
         auth.onAuthStateChanged(user=>{
           this.user=user.email;})
        if(this.topost!=''|| this.theuser==''){return}
        posts.get().then(snapshot=>{
            var html=[];
            snapshot.docs.forEach(doc=>{
                var postid=doc.id;
                html+=[];
                var post=doc.data();
               var thisuser=post.user;

                //    alert("checking profile");
               profiles.where("user","==",thisuser).get().then(snapshot=>{
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

                   var postcomments=0;
                   posts.doc(postid).collection("comments").get().then(comments=>{
                       postcomments=comments.size;
                    this.RetrieveComments(postid) 
                  

                //check if the user alredy liked the photo
                    var Likees=[];
                    snap.docs.forEach(reactor=>{
                        var react=reactor.data()
                        Likees.push(react.user)
                    })
                   if( Likees.includes(this.user)){
                       var hasliked=true;
                    //    var likeid=reactor
                   }
                    
                        users.get().then((snap)=>{
                            snap.docs.forEach(user=>{
                                if(user.data().email==thisuser){
                                    var owner=user.data().firstname.concat(" ",user.data().surname);
         
                                    var content=post.content;var image=post.image;var profile=this.profile;
                                    var details={profile,owner,content,image,postid,postlikes,hasliked,postcomments}
                                    this.post.push(details)
                                 }
                             })
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
            }).then(()=>{
                this.topost.forEach(post=>{
                    if(post.postid==id){
                        post.postlikes=post.postlikes+1;
                        post.hasliked=true;
                    }
                })
            })
        })
    },
    Unlike:function(id){
       posts.doc(id).collection("Likes").where("user","==",this.theuser.email).get().then(user=>{
           user.forEach(use=>{
               posts.doc(id).collection("Likes").doc(use.id).delete().then(()=>{
                   this.topost.forEach(post=>{
                    if(post.postid==id){
                        post.postlikes=post.postlikes-1;
                        post.hasliked=false;
                    }
                })
               })
           })
       })    
    },
    PostComment:function(id){
       var x=document.getElementById(id); 
       x.blur();
       var comment=x.value=x.value.trim();     
          posts.doc(id).collection("comments").add({
              user:this.theuser.email,
              comment:comment

          }).then(()=>{
              this.topost.forEach(post=>{
                    if(post.postid==id){
                        post.postcomments=post.postcomments+1;
                    }
                })
              this.RetrieveComments(id);
              x.value="";
              x.focus()
          })
    },
    RetrieveComments: function(postid){
        var email,firstname,surname,comment,allcomments,profile,postcomments=[],z=0;
        posts.doc(postid).collection("comments").get().then(comments=>{
        comments.docs.forEach(text=>{
            var text=text.data();
            users.where('email',"==",text.user).get().then(user=>{
                user.docs.forEach(usrs=>{
                    var y=usrs.data();
                    email=text.user;firstname=y.firstname;surname=y.surname;comment=text.comment})
                    
                    profiles.where("user","==",email).get().then(snapshot=>{
                        var count=0;
                        snapshot.docs.forEach(doc=>{
                            var userprofile=doc.data();
                           profile=userprofile.profilepic
                        var t=this.comments[postid];t[z]["profile"]=profile;z+=1;
                           
                           })
                          })
                        allcomments={"email":email,"firstname":firstname,"surname":surname,"comment":comment,"profile":profile}
                        postcomments.push(allcomments)
                       this.comments[postid]=postcomments;
                    
            })
            // console.log(allcomments)
        
        })})
    },
    ShowCmnt:function(){
        return this.comments;

    }
    
   
    
},
props:['theuser']

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
.comment{width: 90%;outline: none;}


</style>