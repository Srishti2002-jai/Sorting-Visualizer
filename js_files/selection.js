document.querySelector(".Selection-Sort").addEventListener("click",async function(){
    await selectionsort();
});
async function selectionsort()
{
    let element=document.querySelectorAll(".bar-style");
    let smallindex,c=0;
    let i;
    for(i=0;i<element.length-1;i++)
    {
        smallindex=i;
     for(let j=i+1;j<element.length;j++)
     {
       if(parseInt(element[smallindex].style.height)>parseInt(element[j].style.height)){
           smallindex=j;
           c=1;
       }
     }
     if(c==1)
     {
        element[i].style.backgroundColor="yellow";
        element[smallindex].style.backgroundColor="yellow";
        await waiting(delay);
      swap(element[i],element[smallindex]);
        await waiting(delay);
      element[i].style.backgroundColor="Red";
        element[smallindex].style.backgroundColor="Red";
     }
     element[i].style.backgroundColor="blue";
    }
}