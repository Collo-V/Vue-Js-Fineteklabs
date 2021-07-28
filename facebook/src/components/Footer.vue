<template>
        <div class="modal">
            <div class="langexpan">
            <div class="head"><p>Select your language</p></div>
            <div class="lfoot"><button v-on:click="Hide()"> Close</button></div>
            <div class="selection">
                <a href="">All languages</a>
                <a href="">Africa and Middle East</a>
                <a href="">Americas</a>
                <a href="">Asia-Pacific</a>
                <a href="">Eastern Europe</a>
                <a href="">Western Europe</a>  
            </div>
            <div class="xlangs">
                <a v-for="lang in langs" v-bind:href="lang.link" :key="lang" v-bind:title="lang.enn">{{lang.name}}</a>
            </div>

        </div>
        </div>
    <footer class="foot">
        
        <div>
            <div class="languages">
                 <a v-for="lang in langs" v-bind:href="lang.link" v-bind:title="lang.enn">{{lang.name}}</a><button v-on:click="Modal()">&plus;</button>
                
            </div>
            <div class="languages">
                <a v-for="link in links" v-bind:href="link.link" v-bind:title="link.name">{{link.name}}</a>
                
            </div>
            
        </div> 
        
    </footer>
</template>

<script>
    window.onclick=function (event) {
    if (event.target.classList == "modal") {
    document.getElementsByClassName("modal")[0].style.display="none";
                    
    }}

export default{
    
    name:"Footer",
    data(){
        return{
            langs:{
                eng:{name:"English",link:"",enn:"English UK"},
                fra:{name:"Frencia",link:"" ,enn:"French"},
                sw:{name:"Swahili",link:"",enn:"Kiswahili"},
                es:{name:"Estonian",link:"",enn:"Estonia"},
                sp:{name:"Espanol",link:"",enn:"Spanish"},
                it:{name:"Italiano",link:"",enn:"Italian"},
                af:{name:"Africaan",link:"",enn:"Africaan"},
                pt:{name:"Portugues",link:"",enn:"Portuguese"},
                de:{name:"Deustch",link:"",enn:"Dutch"},
                tu:{name:"Turkse",link:"",enn:"Turkish"},
                // kjksdfkhgkhf
                fdg:{name:"English",link:"",enn:"English UK"},
                ghfh:{name:"Frencia",link:"" ,enn:"French"},
                nbn:{name:"Swahili",link:"",enn:"Kiswahili"},
                vbn:{name:"Estonian",link:"",enn:"Estonia"},
                nbvn:{name:"Espanol",link:"",enn:"Spanish"},
                ivb:{name:"Italiano",link:"",enn:"Italian"},
                ds:{name:"Africaan",link:"",enn:"Africaan"},
                werw:{name:"Portugues",link:"",enn:"Portuguese"},
                sf:{name:"Deustch",link:"",enn:"Dutck"},
                twe:{name:"Turkse",link:"",enn:"Turkish"},
                

            },
            links:[
                {name:"Sign up",link:""},
                {name:"Log In",link:""},
                {name:"Messenger",link:""},
                {name:"Facebook Lite",link:""},
                {name:"Watch",link:""},
                {name:"People",link:""},
                {name:"Pages",link:""},
                {name:"Places",link:""},
                {name:"Games",link:""},
                {name:"Locations",link:""},
                {name:"Marketplace",link:""},
                {name:"Facebook Pay",link:""},
                {name:"Groups",link:""},
                {name:"Jobs",link:""},
                {name:"Oculus",link:""},
                {name:"Portal",link:""},
                {name:"Instagram",link:""},
                {name:"Fundraisers",link:""},
                {name:"Services",link:""},
                {name:"Voting Information center",link:""},
                {name:"About",link:""},
                {name:"Create Ad",link:""},
                {name:"Create Page",link:""},
                {name:"Developers",link:""},
                {name:"Careers",link:""},
                {name:"Privacy",link:""},
                {name:"Cookies",link:""},
                {name:"Adchoices",link:""},
                {name:"Terms",link:""},
                {name:"Help",link:""},
            ]
        }
    },
    methods:{
        Modal:function(){
            document.getElementsByClassName("modal")[0].style.display="flex";

        },
        Hide:function() {
            document.getElementsByClassName("modal")[0].style.display="none";
        },
        Hideauto: function(){
            document.getElementsByClassName("langexpan")[0];
            
        }
    }
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{box-sizing:border-box;}
.modal{height:100%;width:100%;background-color: #817d7d62;z-index: 1;position: fixed;top:0px;left:0%;display: flex;align-items: center;justify-content: center;display: none;}
footer{width: 100%;background-color: #ffffff;padding: 20px;position: inherit;display: flex;flex-direction: column;}
footer div{width: 90%;margin: 0 auto;display: flex;flex-direction: column;}
.languages{display: flex;flex-direction: row;flex-wrap: wrap;padding-bottom: 8px;margin-bottom: 10px;}.languages:first-of-type{border-bottom: solid 1px #817d7d;}
a{text-decoration: none;display: inline-block;padding:2px 10px;font-size:15px;color: #817d7d;width: fit-content;}
button{font-size: 15px;font-weight: bold;}
.languages a{font-size: 12px;}
.langexpan .head{width:100%;padding:5px 10px;background-color: #06397cde;box-sizing: border-box;color:#ffffff;top:0%;margin-bottom:10px;}
.langexpan{width:30%;;background-color: #ffffff;box-shadow: 1px 2px 8px #817d7d;position: relative;}
.selection{float:left;width: 30%;}
.selection a{display: block;padding: 8px 8px ;}
.selection a:hover{text-decoration: underline;}
.xlangs{float:right;width:70%;height: 500px;flex-wrap: wrap;display: flex;flex-direction: row;}
.xlangs a{display:inline;width: 25%;height: min-content;padding: 0%;margin: 0%;}
.lfoot{position:absolute;bottom:0%;width:100%;background-color:#e7e6e6;padding: 15px;border-top: solid 1px #817d7d;}
.lfoot button{background-color: #054997;width: fit-content;border: unset;color:#ffffff;float:right;padding: 4px;border-radius: 4px;}

    
</style>
