
   var timer=setInterval(function(){
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById('demo1').innerText=today.toLocaleString();
document.getElementById('demo').innerText=time;

var i = 0;
function change() {
  var doc = document.getElementById("demo1");
  var color1 = ["#B22727","#005555","#001D6E","#733C3C"];
  var color = ["#2A2550", "#B4FF9F", "#FF5F00", "#40DFEF"];
  doc.style.backgroundColor = color[i];
  doc.style.color = color1[i];
  i = (i + 1) % color.length;
  i = (i + 1) % color1.length;
}
setInterval(change, 1000);

    },1000);



    
