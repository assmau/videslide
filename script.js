// Loader
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


// Text One
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Orhan"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".dynamic-textone").innerHTML = text.substring(0, i+1) +' ';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 50000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});


// Text Two
document.addEventListener('DOMContentLoaded',function(event){
  var from = 0;
  var dataText = [ "Hello", "Welcome to Light Spider.", "Go!", "Lorem, dolorem cum, ducimus a repudiandae quam voluptatibus eligendi in? Distinctio, pariatur temporibus dolor, dolorem minima veritatis. Nobis odio, itaque placeat."];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".dynamic-text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});


// Banner Slider
$(document).ready(function() {
  vertical_slider();
});

// Function: Vertical Slider
function vertical_slider() {  
  setInterval(function () {
    var slide_height = $('#slider').height();

    $('#slider_inner').animate({top: - slide_height}, 1900, function () {
      $('#slider_inner div:first-child').appendTo('#slider_inner');
      $('#slider_inner').css('top', '');
    });
  }, 4000);
}



function sjowing() {
  var bordering = document.querySelector('.border-left');
    bordering.classList.add('fading-left');
}

setTimeout(sjowing, 4000);


function slowing() {
  var bordering = document.querySelector('.border-right');
    bordering.classList.add('fading-right');
}

setTimeout(slowing, 4000);


// SetInterval
