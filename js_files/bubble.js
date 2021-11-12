document.querySelector(".Bubble-Sort").addEventListener("click",async function()
{
  await bubblesort();
});

async function bubblesort()
{
  let element=document.querySelectorAll(".bar-style");
  for(let i=0;i<element.length;i++)
  {
    for(let j=0;j<element.length-i-1;j++)
    {
      if(parseInt(element[j].style.height)>parseInt(element[j+1].style.height))
      {
        element[j].style.backgroundColor="Red";
        element[j+1].style.backgroundColor="Red";
         await waiting(delay);
         swap(element[j],element[j+1]);
      }
      element[j].style.backgroundColor="rgb(94, 94, 99)";
        element[j+1].style.backgroundColor="rgb(94, 94, 99)";
      }
     element[element.length-i-1].style.backgroundColor="blue";
  }
}
