function home(){
    document.getElementById("button").style.background="url(https://picsum.photos/seed/picsum/200/300)";

    setBackground();
}
function work(){
    document.getElementById("button").style.background="url(https://picsum.photos/200/300.jpg)";
    setBackground();

}
function blog(){
    document.getElementById("button").style.background="url(https://picsum.photos/200/300/?blur)";
    setBackground();
   
}
function about(){
    document.getElementById("button").style.background="url(https://picsum.photos/id/237/200/300)";
    setBackground();

}

function setBackground() {
    document.getElementById("button").style.backgroundSize="url(https://picsum.photos/200/300)";
    document.getElementById("button").style.backgroundPosition="center"; 

    
}
