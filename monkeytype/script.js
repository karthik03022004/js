let sentence_ele=document.getElementById("sentence")
// console.log(sentence_ele.textContent)
let format_sen=sentence_ele.textContent.split("").map(function(each){
    return `<span>${each}</span>`
})
sentence_ele.innerHTML=format_sen.join("")

let all_span=document.querySelectorAll("span")
let user_ele=document.getElementById("user_input")
user_ele.addEventListener('keyup',function(){
    let cur_val=user_ele.value
    for(let i=0;i<cur_val.length;i++){
        if(cur_val[i]==all_span[i].textContent){
                all_span[i].style.color='green'

            }
            else{
                all_span[i].style.color='red'
            }
    }
    for(let i=cur_val.length;i<sentence_ele.textContent.length;i++){
        all_span[i].style.color="black"
    }
    
})
let time_ele=document.getElementById("timing")
num=13
let stoper=setInterval(function(){
    time_ele.textContent="time left:"+num
    num-=1
    time_ele.style.color="green"
    if(num<0){
        clearInterval(stoper)
        sentence_ele.textContent="time up"
    }
    if(num<10){
        time_ele.style.color="red"
    }
},1000)