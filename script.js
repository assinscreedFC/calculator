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
let val=0;
let tab=[];
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

clearr.onclick =() => {clear(tab)}

plus.onclick =() => { tab.push("+"); setinput("+");
    val=0;
console.log(tab);
}
sub.onclick=()=> {tab.push("-"); setinput("-");
val=0;
console.log(tab);
}
mult.onclick=()=>{  tab.push("*"); setinput("*");
val=0;
console.log(tab);
}
div.onclick=()=>{  tab.push("÷"); setinput("÷");
val=0;
console.log(tab);
}

equal.onclick= ()=> { val=0; calculate();}


function calculate(){
    console.log(tab);

while (tab.indexOf("÷")>0) {
    let brr = tab.indexOf("÷");
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
    let z = tab[brr-1]*tab[brr+1]
    tab.splice(brr-1, 3 ,z );    
}

while (tab.indexOf("+")>0) {
    let brr = tab.indexOf("+");
    let z = tab[brr-1]+tab[brr+1]
    tab.splice(brr-1, 3 ,z );    
}

while (tab.indexOf("-")>0) {
    let brr = tab.indexOf("-");
    let z = tab[brr-1]-tab[brr+1]
    tab.splice(brr-1, 3 ,z );    
}
setResult(tab);
clearALL();
console.log(tab);
}

function clearALL() {
    tab= [];
    val=0;
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
        console.log(tab);
            
    }else{ 
        inp.value=inp.value.slice(0, -3);
        tab.pop();
          
    }
       console.log(typeof(tab[tab.length-1]));
       
        console.log(tab);
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
    console.log("marche");
    setinput(valeur);
   if(typeof(tab[tab.length-1])!=="string") {tab.pop();}
    
    let som=valeur;
    val=val*10+som;
    tab.push(val);
     console.log(tab);
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