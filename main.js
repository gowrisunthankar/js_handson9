document.getElementById('text').innerText ='this is handson'
document.querySelector('h1').innerText ='this is handson'
document.querySelector('.box').innerText ='this is handson'




 const shivani = document.getElementsByTagName("h3")[0]
 shivani.setAttribute("id" , "new")
 const change = document.getElementById("new")
 change.style.color = "red"
 
function changingtext() {
 document.getElementById('world').innerText = 'Welcome to Elevation Academy'
}

function checktime(){
    const today =new Date()
    let h =today.getHours();
    let m =today.getMinutes();
    let s =today.getSeconds();
    let a=document.getElementById('ampm').innerText;
    console.log(a);
    if(h>12){
        h=h-12;
        document.getElementById('ampm').innerHTML='pm'
    }
    else{
        document.getElementById('ampm').innerHTML='am'
    }
    if(h<10){
        h= '0'+ h;
    }
    if(m<10){
        m= '0'+ m;
    }
    if(s<10){
        s= '0'+ s;
    }
   
    document.getElementById('hrs').innerHTML=h
    document.getElementById('mins').innerHTML=m;
    document.getElementById('secs').innerHTML=s;
}
setInterval(checktime,1000)


console.log(arryear)
function sub(){
    selectelement =document.getElementById('year');
 document.getElementById('selected-year').textContent=selectelement.value;
}

function direction(){
 document.getElementById('flex-box').style.flexDirection ='column-reverse'

}