import {auth,users,posts,profiles} from "./firebase"
function Profilepic(){
    auth.onAuthStateChanged(user=>{
       var email=user.email;
        profiles.get().then(snapshot=>{
             snapshot.docs.forEach(doc=>{
                 var profile=doc.data();
                if(profile.user==email){
                    // return profile.profilepic
                    return "success"
                }
                else{
                    alert("1/2 success");
                    return "https://firebasestorage.googleapis.com/v0/b/facebook-832aa.appspot.com/o/posts%2F1627374203034.png?alt=media&token=0ecb4d74-c3f4-4201-a58b-06062fb15144"
                }
             })
        })
    })

}
function Signin(user,password,router,input){
    if(user.search("@gmail")==-1){
        users.get().then(snapshot=>{
            snapshot.docs.forEach(doc=>{
                var person=doc.data();
               if(user==person.phone){
                    user=person.email;
                    
                }
                
            });
            Login(user,password,router,input)
            
        })
    }
    else{
        Login(user,password,router,input)
    }

}
function Login(user,password,router,input){
    auth.signInWithEmailAndPassword(user,password).then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        router.push('/')
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        input.innerHTML=`invalid username/password`
      });
    console.log("success")
}


function Showmodal(){
    document.getElementsByClassName("modal")[0].style.display="flex";

}
function CloseModal(){
    document.getElementsByClassName("modal")[0].style.display="none"
}
function Authcheck(){
    auth.onAuthStateChanged(user=>{
        var thisuser=user.email;
        users.get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                if(doc.data().email==thisuser){
                    console.log(user);
                    return doc.data()
                }
            })
        })
    })
}
export{
    Profilepic,Signin,Showmodal,CloseModal,Authcheck
}