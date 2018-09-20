/*Using jQuery, change the text color of all paragraphs to red
Using jQuery, when an image with id ‘img1’ is clicked, change its width to 50px
Using JavaScript (not jQuery), when an image with id ‘img2’ is double-clicked, change its
width attribute to 50*/

$(document).ready(function(){

    $('p').css('color', 'red');

    $('#img1').click(function(){
        $(this).css('width', '50px');
    });

    var image2 = document.getElementById('img2');
    image2.ondblclick = function(){
        this.setAttribute('style', 'width: 50px');
    }
});