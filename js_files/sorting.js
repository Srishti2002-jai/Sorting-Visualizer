arrayClick();
document.querySelector("#array-size").addEventListener("input",async function(){
 let array_size=document.querySelector("#array-size").value;
 await arrayClick(array_size);
});

document.getElementById("new-array").addEventListener("click",async function()
{
 await arrayClick(50);
});
async function arrayClick(array_size=50)
{
    deletepreviousarray();
for(let i=0;i<array_size;i++)
{
    let c=Math.random()*100+1;
    c=Math.floor(c);
 let Div=document.createElement("div");
 document.getElementById("bar-component").appendChild(Div);
 Div.classList.add("bar-style");
 Div.innerHTML=c;
 Div.id=i;
 Div.style.height=`${c*5}px`;

}
}
function deletepreviousarray(){
    const bar=document.getElementById("bar-component");
    bar.innerHTML=" ";
}
function swap(el1,el2)
{
var tmp=el1.style.height;
el1.style.height=el2.style.height;
el2.style.height=tmp;
var tmp=el1.innerHTML;
el1.innerHTML=el2.innerHTML;
el2.innerHTML=tmp;
}
let delay=340;
document.querySelector("#speed-of-sorting").addEventListener("input",function()
{
 delay=1000-document.querySelector("#speed-of-sorting").value;
});
function waiting(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}