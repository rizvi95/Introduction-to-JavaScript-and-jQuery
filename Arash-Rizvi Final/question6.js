window.onload = function(){
    var text = document.createTextNode('DOM Scripting');
    var heading = document.createElement('h1');
    heading.appendChild(text);
    document.body.appendChild(heading);
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.backgroundColor = 'red';
    document.body.appendChild(div);
    var image = document.createElement('img');
    image.id = 'img3';
    image.src = 'a.jpg';
    div.appendChild(image);

    var image_animation = document.getElementById('img3');
    image_animation.style.position = 'absolute';
    image_animation.style.left = '0px';
    var position = 0;
    image_animation.onclick = function(){
        setInterval(animate, 3000);
    }
    function animate(){
        // position++;
        image_animation.style.left = position + '100px';
    }
}