<template>
<span>{{PostShow()}}</span>
<div id="content" class="bg-grey-darken-4"></div>
  
</template>

<script>
import {users,posts} from "../firebase"
export default {
    
    name:"posts",
    

data(){
    return{
        owner:'no',
        content:''
    }
},
methods:{
    PostShow:function(){
        posts.get().then(snapshot=>{
           var html='';
            snapshot.docs.forEach(doc=>{
                var post=doc.data();
               var thisuser=post.email;
               users.get().then((snap)=>{
                   snap.docs.forEach(user=>{
                       if(user.data().email==thisuser){
                           var owner=user.data().firstname.concat(" ",user.data().surname);
                           this.Show(owner,post.content,post.image)
                           
                        }
                    })
                   })
                
                })
        })
    },
    Show:function(owner,content,image){
        
        var inner= document.getElementById("content");
       var li=`
        <div class="text-white mt-3 rounded-lg postcont" style="background-color:#292727">
        <div class="v-avatar"></div>
            <span class="owner pa-3">${owner}</span>
              <div class="postcontent bg-transparent" style="font-size:18px;padding:10px">${content}</div>               
                `;
                if(image){
                    li+=` <div class="imgcont"> <img src='${image}' class="postimage" style="width:100%"></div>
                </div>`
                }
                else{li+=`</div>`};
                inner.innerHTML+=li;
                
            
    },
    
}

}
</script>

<style scoped>
.postcont{background-color: turquoise;}
#content{width: 100%;}
.owner{display: block;font-size: 18px;}
.imgcont{width: 100%;border-radius: 50%;}
.imgcont img{width:500px;height: auto;}
.postimage{display: none;}

</style>