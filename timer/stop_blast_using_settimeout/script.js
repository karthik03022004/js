photo=document.getElementById("img")
decode_ele=document.getElementById("decode")
let a=Math.random()*100
let a_int=Math.ceil(a)
let b=Math.random()*100
let b_int=Math.ceil(b)

console.log(a_int)
console.log(b_int)
console.log(a_int+b_int)
decode_ele.textContent=a_int+"+"+b_int+"="
find=document.getElementById("guess_val")




let task=setTimeout(function(){
    photo.src="https://www.ifri.org/sites/default/files/2025-03/shutterstock_2341646169.jpg"
},6000)

function press(){
    if(a_int+b_int==find.value){
        find.value=" "
        clearTimeout(task)
        photo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztLRdzwWLHYNMX6Y1d-yGtnWM6xK-VcWodA&s"
        
    }
}