//SIDE NAV//
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//SIDE NAV (END)//

//BACK TO TOP BUTTON//
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//BACK TO TOP BUTTON (END)//

//SLIDESHOW//
var slideIndex = 1;
var z = document.getElementsByClassName("slideshow");
for (i = 0; i < z.length; i++) {
    z[i].setAttribute("data-currentslide", 1);
    showDivs(z[i].getAttribute("data-currentslide"), i);
}
function plusDivs(n, j) {
    slideIndex = parseInt(z[j].getAttribute("data-currentslide")[0]);
    showDivs(slideIndex += n, j);
}
function currentDiv(n, j) {
    showDivs(slideIndex = n, j);
}
function showDivs(n, j) {
    var i;
    var z = document.getElementsByClassName("slideshow")[j];
    var x = z.getElementsByClassName("mySlides");
    var dots = z.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    z.setAttribute("data-currentslide", slideIndex);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//SLIDESHOW (END)//

//POPUP//
function myFunction() {
  var popup = document.getElementById("myPopup");
  //Tells the website to display the hidden text which is hidden to save screen space and not overwhelm the viewer//
  popup.classList.toggle("show");
}
function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}
//POPUP (END)//

//EXPANDING BOXES//
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
//EXPANDING BOXES (END)//
