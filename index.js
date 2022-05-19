
    var timer=setInterval(function(){
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById('demo1').innerText=today.toLocaleString();
document.getElementById('demo').innerText=time;
    },1000);
    
    