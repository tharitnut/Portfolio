// Get the button:
let mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


document.addEventListener("DOMContentLoaded", function() {
  // Get all navbar links
  var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add event listener to each navbar link
  navbarLinks.forEach(function(navbarLink) {
    navbarLink.addEventListener("click", function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Get the target section corresponding to the link
      var targetId = navbarLink.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Get the height of the navbar
        var navbarHeight = document.querySelector('.navbar').offsetHeight;

        // Calculate the scroll position, subtracting 100px for offset
        var scrollPosition = targetSection.offsetTop - navbarHeight - 25;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    });
  });
});