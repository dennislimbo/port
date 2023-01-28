// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > (0.10 * document.documentElement.scrollHeight) || document.documentElement.scrollTop > (0.10 * document.documentElement.scrollHeight)) {
    // mybutton.style.display = "block";
    mybutton.classList.remove("hidden");
  } else {
    // mybutton.style.display = "none";
    mybutton.classList.add("hidden");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}