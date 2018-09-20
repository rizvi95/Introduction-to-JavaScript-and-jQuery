//  Lab 3 - Comp2015        Arash Rizvi
//Part 1
window.onload()
var colors = ['blue','green','pink'];

//Part 2

function mouseEnter() {
    console.log('the mouseEnter event occurred');
    this.style.backgroundColor = 'yellow' ;
  }

function mouseLeave() {
    console.log('the mouseLeave event occurred');
    this.style.backgroundColor = 'white';
}

var para1 = document.getElementsByTagName('p')[2];
// var para2 = document.getElementsByTagName('p4');
// var para3 = document.getElementsByTagName('p3')]\

para1.onmouseenter = mouseEnter;
para1.onmouseleave = mouseLeave;

//Part 3
var toggle = document.getElementsByTagName('button')[0];

toggle.onclick = clickevent;
function clickevent(){
    document.getElementById("Div1").style.height = "200px";
    document.getElementById("Div1").style.width = "200px";
}

//Part 4
var heading = document.getElementsByTagName('h1')[0];

window.onresize = function() {
    if (window.innerWidth < 800) {
        heading = togle
    }
    else {
      // change the color to black
    }
  }
