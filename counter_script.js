function inc(){
   let cou_ele =document.getElementById("count")
   raise=parseInt(cou_ele.textContent)
   cou_ele.textContent=raise+1
   let value=parseInt(cou_ele.textContent)
   if(value>0){
    cou_ele.style.color="green"
   }
   else if(value<0){
    cou_ele.style.color="red"
   }
   else{
    cou_ele.style.color="black"
   }
  
}

function dec(){
    let c=document.getElementById("count")
    let supress=parseInt(c.textContent)
    c.textContent=supress-1
    let value=parseInt(c.textContent)
    if(value>0){
     c.style.color="green"
    }
    else if(value<0){
     c.style.color="red"
    }
    else{
     c.style.color="black"
    }

}