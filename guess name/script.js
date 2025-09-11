arr=["Chiranjeevi","Pawan Kalyan","Mahesh Babu","NTR","Allu Arjun","Nagarjuna"]
index=Math.random()*arr.length
index=Math.round(index)
sys_generated=arr[index]
console.log(sys_generated)
chance=0
function guess_name(){
    chance+=1
    let n=document.getElementById("user_name")
    if(n.value==sys_generated){
        if(chance==1){
            alert("yes! you got gold medal")
        }
        else if(chance==2){
            alert("yes! you got silver medal")
        }
        else if(chance==3){
            alert("yes! you got bronze medal")
        }
        else{
            alert("sorry!")
        }
        
    }

} 