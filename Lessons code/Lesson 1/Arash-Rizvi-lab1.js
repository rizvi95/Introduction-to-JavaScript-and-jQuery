//Arash Rizvi   -   JS file for lab`1, COMP2015
//Part 1: wrap function in window.onload func
//Part2: get user first and last name and concatenate
//Part3: get width of img1 and set img2/3 to img1's width

window.onload = function (){
    //referenced from lecture notes
    //store first and last names in variables
    var firstname;
    var lastname;

    // prompt('message that you want displayed to the user')
    firstname = prompt('Enter firstname');
    lastname = prompt('Enter last name');

    //display concatenation
    //console.log(firstname + ' ' + lastname);
    var name = firstname + ' ' + lastname;
    console.log(name);
    alert(name);
    
    //alert(firstname + ' ' + lastname);    -> also works

    //Parts of part3 refernced from lecture notes
    //get width of img1 and store it in a variable
    //set img2/3 width to the variable holding img1's width
    var firstImageWidth = document.getElementById('img1').width; 
    document.getElementById('img2').width = firstImageWidth; 
    document.getElementById('img3').width = firstImageWidth;
}