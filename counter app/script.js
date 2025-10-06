  num_ele=document.getElementById("box")
num_ele.textContent=localStorage.getItem('count')
function plus(){
  
    
    let inc=parseInt(num_ele.textContent)
    num_ele.textContent=inc+1
    localStorage.setItem("count",inc+1)
    let a=parseInt(num_ele.textContent)
    if(a>0){
        num_ele.style.color="green"
    }
    else if(a==0){
        num_ele.style.color="black"
    }
    else{
        num_ele.style.color="red"
    }

}
function minus(){
    num_ele=document.getElementById("box")
    let dec=parseInt(num_ele.textContent)
    num_ele.textContent=dec-1
      let a=parseInt(num_ele.textContent)
    if(a>0){
        num_ele.style.color="green"
    }
    else if(a==0){
        num_ele.style.color="black"
    }
    else{
        num_ele.style.color="red"
    }
}