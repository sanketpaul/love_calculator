let name1=document.getElementById('name1')
let name2=document.getElementById('name2')
let print=document.getElementById('print')
let report=document.getElementById('report')
// let statement=document.getElementById('ment')
let random;


const clac=()=>{
    if(name1.value.length<=3){
        alert("Enter atleast four characters")
        
    }
    if(name2.value.length<=3){
        alert("Enter atlest four characters")
        
    }
    else{
        random=Math.floor(Math.random()*100)
        print.innerHTML=`<b> ${name1.value} loves his beloved ${name2.value} is ${random} % </b>`
    }
    if(random<=60){
        document.getElementById("report").innerHTML = "Moderate Relationship😪😪😗";
    }
    else if(random>61){
        document.getElementById("report").innerHTML = "Lovely Relationship😍😍😘😘";
    }
}



