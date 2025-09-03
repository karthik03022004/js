function flip(){
    let turn=document.getElementById("coin")
    let val=Math.random()*100
    let val_num=Math.ceil(val)
    if(val_num%2==0){
        turn.src="https://en.numista.com/catalogue/photos/inde/2625-original.jpg"
    }
    else{
        turn.src="https://www.flipaindiancoin.in/img/flip-a-rs-10-indian-coin-head-online.png"
    }
}