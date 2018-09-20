//Quiz 2    Comp2015        Arash Rizvi

//Question 1:
var links = ['linka', 'linkb', 'linkc'];
links.push('linkd');
links.push('linke');
links.push('linkf');
alert(links[5]);

//Question 2:
for(let i=0; i< links.length; i++){
    if(links[i].indexOf('e') > -1){     //indexof returns -1 if result is not found
        alert(links[i]);
    }
}

//Question 3:

False, 5 is a number

//Question 4:

var Link_array = document.getElementsByTagName('link');

for(let i=0; i < Link_array.length; i++){
    Link_array[i].style.color = 'red';
}