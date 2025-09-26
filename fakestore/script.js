
let pro_ele=document.getElementById("products")
api=fetch("https://fakestoreapi.com/products").then(function(response){
    return response.json()
}).then(function(jsondata){
    for(i=0;i<jsondata.length;i++){
        if(!jsondata.length){
            jsondata=[jsondata]
        }
        console.log(jsondata[i])
        let card=document.createElement("div")
        card.classList="card"
        let img_ele=document.createElement("img")
        img_ele.src=jsondata[i].image
        img_ele.style.width="100px"
       let pro_name_ele= document.createElement("h4")
       let button_ele=document.createElement("button")
       button_ele.textContent="delete"
       arr=[jsondata]
        button_ele.onclick=function(){
        console.log(jsondata[i].id)
       }
       pro_name_ele.textContent=jsondata[i].title
       card.appendChild(img_ele)
       card.appendChild(pro_name_ele)
       card.appendChild(button_ele)
       pro_ele.appendChild(card)
      



    }
})