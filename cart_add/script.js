a=[]
let main_div=document.getElementById("item_con")
function clear_all(){
   console.log("clear")
   main_div.textContent=""
}
function displayitem(){
   for(let i=0;i<a.length;i++){
   let childs=document.createElement("h1")
   let del_but=document.createElement("button")
   childs.textContent=a[i]
   main_div.appendChild(childs)
   childs.appendChild(del_but)
   del_but.textContent="remove"
   del_but.onclick=function(){
      a.splice(i,1)
      childs.textContent=''
      
      console.log(a)

   }
}
}
displayitem()

function add_item(){
   let input=document.getElementById("add")
   let cur_val=input.value
   a.push(cur_val)
   main_div.textContent=""
   displayitem()
   input.value=''

}

