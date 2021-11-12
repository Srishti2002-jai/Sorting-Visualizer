document.querySelector(".Quick-Sort").addEventListener("click",async function()
{
let element=document.querySelectorAll(".bar-style");
let l=0;
let r=parseInt(element.length)-1;
await quicksort(element,l,r); 
});
async function quicksort(element,l,r)
{
 if(l<r)
 {
  let pi= await partition(element,l,r);
  await quicksort(element,l,pi-1);
  await quicksort(element,pi+1,r);
 }
}
async function partition(element,l,r)
{
    let pivot=parseInt(element[l].style.height);
    element[l].style.backgroundColor="blue";
    let i=l;
    let j=r;
    while(i<j)
    {
     while((parseInt(element[i].style.height)<=pivot)&&(i<j))
     i++;
     while(parseInt(element[j].style.height)>pivot&&i<=j)j--;
     if(i<j)
     {    
        await waiting(delay);
        swap(element[i],element[j]);
        element[i].style.backgroundColor="red";
        element[j].style.backgroundColor="red";
        await waiting(delay);
       }
    }
    element[j].style.backgroundColor="pink";
    await waiting(delay);
    swap(element[j],element[l]);
    element[j].style.backgroundColor="yellow";
    element[l].style.backgroundColor="yellow";
    return j;
}