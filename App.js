function home(){
              document.getElementById("button").style.background="url(img.jpg)";

              setBackground();
}
function work(){
              document.getElementById("button").style.background="url(img1.jpg)";
              setBackground();

}
function blog(){
              document.getElementById("button").style.background="url(img2.jpg)";
              setBackground();
             
}
function about(){
              document.getElementById("button").style.background="url(img3.jpg)";
              setBackground();

}

function setBackground() {
              document.getElementById("button").style.backgroundSize="cover";
              document.getElementById("button").style.backgroundPosition="center"; 
 
              
}
