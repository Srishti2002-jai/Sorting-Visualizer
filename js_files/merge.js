document.querySelector(".Merge-Sort").addEventListener("click",async function(){
  let element=document.querySelectorAll(".bar-style");
 let l=0;
 let r=parseInt(element.length)-1;
 await mergesort(element,l,r);
});
 
async function mergesort(element,l,r)
{
  if(l>=r)
  {
  return;
  }
  else{
     const mid=l+Math.floor((r-l)/2);
     await mergesort(element,l,mid);
     await mergesort(element,mid+1,r);
     await merge(element,l,r,mid);
  } 
}

async function merge(element,l,r,mid)
{
  const ls=mid-l+1;
  const rs=r-mid;
  let left=new Array(ls);
  let right=new Array(rs);
  for(let i=0;i<ls;i++)
  {
    element[i+l].style.backgroundColor="red";
    left[i]=element[i+l].style.height;
  }
  for(let i=0;i<rs;i++)
  {
    element[mid+1+i].style.backgroundColor="yellow";
    right[i]=element[1+mid+i].style.height;
  }
  let i=0;
  let j=0;
  let k=l;
      while((i<ls)&&(j<rs))
      if(parseInt(left[i])<=parseInt(right[j]))
      {
        await waiting(delay);
        element[k].style.height=left[i];
        element[k].style.backgroundColor="blue";
        i++;
        k++;
      }
      else
      {
        await waiting();
          element[k].style.height=right[j];
          element[k].style.backgroundColor="blue";
          j++;
          k++;
      }
      while(i<ls)
      {
        await waiting();
        element[k].style.backgroundColor="blue";
        element[k].style.height=left[i]
        i++;
        k++;
      }
      while(j<rs)
      {
        await waiting();
        element[k].style.backgroundColor="blue";
        element[k].style.height=right[j];
        j++;
        k++;
      }
    }
  