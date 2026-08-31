// Get the button:
let mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
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

  // =========================================================
  //  Carousel height fix — prevent jumping between slides
  // =========================================================
  function stabilizeCarouselHeights() {
    document.querySelectorAll('.carousel-img').forEach(function(carousel) {
      var inner = carousel.querySelector('.carousel-inner');
      var images = carousel.querySelectorAll('img');
      var totalImages = images.length;
      var loadedCount = 0;
      var maxHeight = 0;

      function measure() {
        var items = carousel.querySelectorAll('.carousel-item');
        maxHeight = 0;
        items.forEach(function(item) {
          // Temporarily force the item to be visible for measurement
          var prevDisplay = item.style.display;
          var prevPosition = item.style.position;
          var prevVisibility = item.style.visibility;
          var prevOpacity = item.style.opacity;

          item.style.display = 'block';
          item.style.position = 'relative';
          item.style.visibility = 'hidden';
          item.style.opacity = '0';

          var h = item.scrollHeight;
          if (h > maxHeight) maxHeight = h;

          // Restore
          item.style.display = prevDisplay;
          item.style.position = prevPosition;
          item.style.visibility = prevVisibility;
          item.style.opacity = prevOpacity;
        });
        if (maxHeight > 0) {
          inner.style.minHeight = maxHeight + 'px';
        }
      }

      function onImageReady() {
        loadedCount++;
        if (loadedCount >= totalImages) {
          measure();
        }
      }

      if (totalImages === 0) return;

      images.forEach(function(img) {
        if (img.complete && img.naturalHeight > 0) {
          onImageReady();
        } else {
          img.addEventListener('load', onImageReady);
          img.addEventListener('error', onImageReady);
        }
      });
    });
  }

  stabilizeCarouselHeights();
  window.addEventListener('resize', stabilizeCarouselHeights);

  // =========================================================
  //  Language section — scroll-triggered animations
  // =========================================================

  // --- Spoken language bars ---
  const langBars = document.querySelectorAll('.lang-bar-fill');
  if (langBars.length) {
    const barObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.setProperty('--target-width', bar.dataset.width);
          bar.classList.add('animated');
          barObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });
    langBars.forEach(function(bar) { barObserver.observe(bar); });
  }

  // --- Programming skill rings ---
  const CIRCUMFERENCE = 2 * Math.PI * 52; // r = 52
  const skillRings = document.querySelectorAll('.skill-ring');

  // Create a unique SVG gradient for each ring
  skillRings.forEach(function(ring, idx) {
    const svg = ring.querySelector('svg');
    const fg = ring.querySelector('.ring-fg');
    const percent = parseInt(ring.dataset.percent, 10) || 0;
    const c1 = getComputedStyle(ring).getPropertyValue('--ring-color-1').trim();
    const c2 = getComputedStyle(ring).getPropertyValue('--ring-color-2').trim();

    // Build a unique <linearGradient> per ring
    const gradId = 'rg' + idx;
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML =
      '<linearGradient id="' + gradId + '" x1="0%" y1="0%" x2="100%" y2="0%">' +
        '<stop offset="0%" stop-color="' + c1 + '"/>' +
        '<stop offset="100%" stop-color="' + c2 + '"/>' +
      '</linearGradient>';
    svg.prepend(defs);
    fg.setAttribute('stroke', 'url(#' + gradId + ')');

    // Store target offset
    ring._targetOffset = CIRCUMFERENCE - (CIRCUMFERENCE * percent / 100);
  });

  if (skillRings.length) {
    const ringObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const ring = entry.target;
          const fg = ring.querySelector('.ring-fg');
          fg.style.strokeDashoffset = ring._targetOffset;
          ringObserver.unobserve(ring);
        }
      });
    }, { threshold: 0.3 });
    skillRings.forEach(function(ring) { ringObserver.observe(ring); });
  }
});