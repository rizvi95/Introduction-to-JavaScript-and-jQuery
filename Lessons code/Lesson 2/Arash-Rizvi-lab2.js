//  Lab 2 - Comp2015        Arash Rizvi
//Part 1

var millisecondsInADay = 1000 * 60 * 60 * 24;
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
//time = time.getTime();
//alert(time/millisecondsInADay);
alert(hours + ':' + minutes + ':' + seconds);

//Part 2
//loop through name array and alert names with letter i in them
var user = ['Arash', 'Sophia', 'Noah', 'Francis', 'Roover', 'Ghost'];

for(let i=0; i< user.length; i++){
    if(user[i].indexOf('i') > -1){     //indexof returns -1 if result is not found
        alert(user[i]);
    }
}

// Part 3 - remove underline from links
var links = document.links;  

for (let i = 0; i < links.length; i++) {
    links[i].style.textDecoration = "none"; 
    }

// Part 4
// Make an array of all div tags
var allDivs = document.getElementsByTagName('div');
var width, height, rgbvalue;

for(let i=0; i < allDivs.length; i++){
    allDivs[i].className = 'message';
    allDivs[i].style.width = '100px';
    allDivs[i].style.height = '100px';
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    allDivs[i].style.backgroundColor = `rgb(${r},${g},${b})`;
}


