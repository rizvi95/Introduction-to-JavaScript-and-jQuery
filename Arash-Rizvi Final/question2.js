// Using DOM 1, put a red solid 4px border around all images
// Alert how many days are left until Canada Day (July 1st) 2018

window.onload = function(){
    var imgarray = document.getElementsByTagName('img');
    for(let i=0; i<imgarray.length; i++){
        imgarray[i].style.border = '4px solid red';
    }
    var canada_day = new Date(2018,07,1);
    var today = new Date();
    var difference = canada_day.getTime() - today.getTime();
    var minutes = 1000*60;
    var hours = minutes*60;
    var days = hours*24;
    alert(difference/days + "days since Canada Day (July 1st)");
}