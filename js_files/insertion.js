document.querySelector(".Insertion-Sort").addEventListener("click",async function()
{
await insertionsort();
});
async function insertionsort()
{
    let element=document.querySelectorAll(".bar-style");
    for(let i=1;i<element.length;i++)
    {
      let j=i-1;
      let k=i;
      while(j>=0){
          if(parseInt(element[j].style.height)>=parseInt(element[k].style.height))
          {
            element[j].style.backgroundColor="red";
            element[k].style.backgroundColor="red";
            await waiting(delay);
            swap(element[j],element[k]);
            element[j].style.backgroundColor="blue";
            element[k].style.backgroundColor="blue";
            k=j;
          }
          j--;
      }
    }
}