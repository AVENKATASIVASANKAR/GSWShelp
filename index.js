
var timer=setInterval(function(){
    var today = new Date();
    
    var hours=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();


    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById('demo1').innerText=today.toLocaleString();
    document.getElementById('demo').innerText=time;
//alarm sound here



if (minutes % 60 === 0  && seconds <= 5){
 
  audio = new Audio('sound/alarm1.wav');
  audio.play();
  }
      else if(minutes / 30 === 1 && seconds <= 5){
          
          var audio = new Audio('sound/alarmClock.mp3');
          audio.play();
      }
              else if(seconds % 60 === 0 && seconds<=5){
                  var audio =new Audio('sound/alarm3.mp3');
                  audio.play();
              }





    //color change here 
    
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






      
