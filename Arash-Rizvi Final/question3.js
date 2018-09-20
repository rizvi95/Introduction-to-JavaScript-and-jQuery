// Write a function that loops through all of a page’s hyperlinks and disables any link that has
// the word “bcit” in its href attribute.
// Call the function

window.onload = function() {
    deadlinks();

    function deadlinks() {
        var links = document.links;

        for(let i=0; i< links.length; i++){
            var link_href = links[i].getAttribute('href');

            if(link_href.indexOf('bcit') > -1){     //indexof returns -1 if result is not found
                links[i].setAttribute("href","#");
            }
        }
    }
}