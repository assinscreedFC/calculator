const inp=document.querySelector("#upper");
const zero=document.querySelector(".zero");
const un=document.querySelector(".un");
const deux=document.querySelector(".deux");
const trois=document.querySelector(".trois");
const quatre=document.querySelector(".quatre");
const cinq=document.querySelector(".cinq");
const six=document.querySelector(".six");
const set=document.querySelector(".sets");
const huit=document.querySelector(".huit");
const neuf=document.querySelector(".neuf");
const plus=document.querySelector(".plus");
const equal=document.querySelector(".equal");
const sub=document.querySelector(`.sub`);
const mult=document.querySelector('.mult');
const div=document.querySelector(".div");
const clearr=document.querySelector(".clear");
const clearall=document.querySelector(`.clearALL`);
const point=document.querySelector(".point");
let val=0;
let tab=[];
let puis=0;
let reel=false;
zero.onclick= ()=> getNumber(0);
un.onclick= ()=> getNumber(1);
deux.onclick= ()=> getNumber(2);
trois.onclick= ()=> getNumber(3);
quatre.onclick= ()=> getNumber(4);
cinq.onclick= ()=> getNumber(5);
six.onclick= ()=> getNumber(6);
set.onclick= ()=> getNumber(7);
huit.onclick= ()=> getNumber(8);
neuf.onclick= ()=> getNumber(9);

clearr.onclick =() => {clear(tab); if(point.classList.length===2){point.classList.add("point");reel=true;};}
clearall.onclick=()=> {clearALL(); if(point.classList.length===2){point.classList.add("point"); reel=true;}}

point.onclick=()=> { 
      parseFloat(tab[tab.length-1]);
      if(point.classList.length===3) {document.querySelector("#upper").value+=".";}
      puis=0;
      reel=true;
      point.classList.remove("point") ;    };

plus.onclick =() => setZero("+")

sub.onclick=()=> setZero("-")

mult.onclick=()=> setZero("*")
div.onclick=()=> setZero("÷")



equal.onclick= ()=> { val=0; calculate();}


function setZero(operator) {
    val=0;
    puis=0;
    reel=false;
    tab.push(operator);
    if(point.classList.length===2){point.classList.add("point");}
    setinput(operator);
    
}

//on cherche les index des operateur selon leur ordre de priorite pour commencet avec
function calculate(){

while (tab.indexOf("÷")>0) {
    let brr = tab.indexOf("÷");
    if(typeof(tab[brr + 1])==="string" ||  tab.length -1  === brr){
        let div = document.querySelector("#lowwer");
        div.innerHTML="Erreur ";
        return;
    }
    if(tab[brr + 1] == "0"){
        let div = document.querySelector("#lowwer");
        div.innerHTML="Erreur ";

         
          return;
        }
    let z = tab[brr-1]/tab[brr+1]
    tab.splice(brr-1, 3 ,z );    
}

while (tab.indexOf("*")>0) {
    let brr = tab.indexOf("*");
    if(typeof(tab[brr + 1])==="string" ||  tab.length -1  === brr){
        let div = document.querySelector("#lowwer");
        div.innerHTML="Erreur ";
        return;
    }
    let z = tab[brr-1]*tab[brr+1]
    tab.splice(brr-1, 3 ,z );    
}

while (tab.indexOf("+")>0) {
    let brr = tab.indexOf("+");
    if(typeof(tab[brr + 1])==="string" ||  tab.length -1  === brr){
        let div = document.querySelector("#lowwer");
        div.innerHTML="Erreur ";
        return;
    }
    let z = tab[brr-1]+tab[brr+1]
    tab.splice(brr-1, 3 ,z );    
}

while (tab.indexOf("-")>0) {
    let brr = tab.indexOf("-");
    if(typeof(tab[brr + 1])==="string" ||  tab.length -1  === brr){
        let div = document.querySelector("#lowwer");
        div.innerHTML="Erreur ";
        return;
    }
    let z = tab[brr-1]-tab[brr+1]
    tab.splice(brr-1, 3 ,z );    
}
setResult(tab);

}

function clearALL() {
    tab= [];
    val=0;
    puis=0;
    reel=false;
    document.querySelector("#upper").value=" ";
    let div = document.querySelector("#lowwer");
    div.innerHTML=" ";
    

    
}

function clear(tab){
    let inp=document.querySelector("#upper")
    if(tab.length!==0){
    if(typeof(tab[tab.length-1])==="number"){
        inp.value=inp.value.slice(0, -1);
        tab.pop();
        if(val.toString().length===1){
            val=0;
        }else{
        val=parseFloat(val.toString().slice(0,-1));
        tab.push(val);
        }
            
    }else{ 
        inp.value=inp.value.slice(0, -3);
        tab.pop();
          
    }
}
}



function setResult(resulta) {
    let div = document.querySelector("#lowwer");let yo =  resulta.pop();
    if (yo.toString().length > 16) {
        div.innerHTML = "trop long";
    }else{
        div.innerHTML =yo
    }  
}


function getNumber(valeur){
    setinput(valeur);
   if(typeof(tab[tab.length-1])!=="string")
    {
        tab.pop();    
    }
    if (reel) {
        // valeur=valeur*pow(10,puis);
        console.log(valeur);puis-=1;
        let less =Math.pow(10,puis);
        valeur =valeur*less;
        val=val+valeur;
        console.log(valeur);

        
    }else{
    // let som=valeur;
    val=val*10+valeur;
    }
    tab.push(val);
}

function setinput(val) {
    if (isNaN(val)) {
        document.querySelector("#upper").value+=" "; 
        document.querySelector("#upper").value+=val; 
        document.querySelector("#upper").value+=" "; 
    }else{
    document.querySelector("#upper").value+=val;    
    }
}