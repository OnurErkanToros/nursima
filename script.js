let changeChannel = 1;
let musicStatus=false;
var audio = new Audio('/audio/nursima.mp3');
showDivs(changeChannel);

function plusDivs(n) {
  showDivs(changeChannel += n);
}

function currentDiv(n) {
  showDivs(changeChannel = n);
}
function playMusic(){
    
    if(musicStatus){
        musicStatus=false;
        audio.play();
    }else{
        musicStatus=true;
        audio.pause();
    }
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("channels");
  var dots = document.getElementsByClassName("move");
  if (n > x.length) {changeChannel = 1}    
  if (n < 1) {changeChannel = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[changeChannel-1].style.display = "block";  
  dots[changeChannel-1].className += " w3-red";
}