let pro_ele=document.getElementById("products")
api=fetch("https://fakestoreapi.com/products").then(function(response){
    return response.json()

}).then(function(jsonresponse){
    console.log(jsonresponse)
   for(let i=0;i<jsonresponse.length;i++){
    
    let card=document.createElement("div")
    card.classList="card"
    
    let img_ele=document.createElement("img")
    img_ele.src=jsonresponse[i].image
    img_ele.style.width="100px"
    card.appendChild(img_ele)
    let title_ele=document.createElement("h4")
    title_ele.textContent=jsonresponse[i].title 
    card.appendChild(title_ele)
    
    let price_ele=document.createElement("h5")
    price_ele.textContent="price:$"+jsonresponse[i].price
    card.appendChild(price_ele)
    let b_ele=document.createElement("button")
    b_ele.textContent="delete"
    card.appendChild(b_ele)

    pro_ele.appendChild(card)


   }
})

