/*  For each paragraph on the page, assign an anonymous function to the onclick event that
    adds the class ‘clicked’ to the element and changes the background color to yellow

    For each paragraph on the page, assign an anonymous function to the onmouseover event
    that changes the font style to italic (for this, use style.fontStyle = ‘italic’)
*/

window.onload = function(){
    // var paragraphs = document.getElementsByTagName("p");    
    // for (let i = 0; i < paragraphs.length; i++) {
    //     paragraphs[i].onclick = changeToRed;
    //     }
    // function changeToRed() {
    //     this.setAttribute('style', 'background-color: yellow;');
    //     }

    $('p').click(function(){
       $(this).css('background-color', 'yellow');
        $(this).addClass("clicked");
    });

    $('p').mouseover(function(){
        $(this).css('fontStyle', 'italic');
    });
}