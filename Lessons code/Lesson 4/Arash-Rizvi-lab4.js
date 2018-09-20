//Lab 4     arash rizvi     comp2015

window.onload = function(){
    var timer = null;
    var position = 0;

    var clicked = document.getElementById("control");
    clicked.onclick = run;
    
    function run() {
        if (timer == null) {
          timer = setInterval(startSlideShow, 4000);
        }
        else {
          clearInterval(timer);
          timer = null;
        }
      }

    function startSlideShow(){
        
        var  changeslide = document.getElementsByClassName("slide-container")[0];     
        if(position > -1800){
            position= position-600;
        }
        else{
            position = 0;
        }
        changeslide.style.left = position + 'px';
    }
}