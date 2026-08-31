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


// =========================================================
//  Dynamic Projects Data & Renderer
// =========================================================
const projectsData = [
  {
    id: "ActiveAlert",
    title: "Active Alert Mobile Application",
    badge: "Mobile App",
    badgeIcon: "fa-solid fa-mobile-screen",
    badgeClass: "proj-badge-mobile",
    description: "An alarm setting application for exercise and calculate calories burnt with alarm scheduling and calorie tracking features.",
    technologies: [
      { name: "React Native", icon: "fa-brands fa-react text-info" },
      { name: "TypeScript", customSvg: "images/Logo_TS.svg" }
    ],
    githubUrl: "https://github.com/tharitnut/ActiveAlert",
    images: [
      "images/ActiveAlert/AA_first.png",
      "images/ActiveAlert/AA_login.png",
      "images/ActiveAlert/AA_signup.png",
      "images/ActiveAlert/AA_home.png",
      "images/ActiveAlert/AA_stats.png",
      "images/ActiveAlert/AA_alarm.png",
      "images/ActiveAlert/AA_set_alarm.png",
      "images/ActiveAlert/AA_profile.png"
    ]
  },
  {
    id: "HealJai",
    title: "HealJai Mobile Application",
    badge: "Mobile App",
    badgeIcon: "fa-solid fa-mobile-screen",
    badgeClass: "proj-badge-mobile",
    description: "An application suggests books tailored to your MBTI personality type integrating MBTI assessment logic with personalized book recommendations.",
    technologies: [
      { name: "React Native", icon: "fa-brands fa-react text-info" },
      { name: "TypeScript", customSvg: "images/Logo_TS.svg" }
    ],
    githubUrl: "https://github.com/NatrinT/SoftwareEngineerProject",
    reverseLayout: true,
    images: [
      "images/HealJai/HJ_splash.png",
      "images/HealJai/HJ_home.png",
      "images/HealJai/HJ_home2.png",
      "images/HealJai/HJ_form.png",
      "images/HealJai/HJ_form_end.png",
      "images/HealJai/HJ_library.png",
      "images/HealJai/HJ_inside_book.png",
      "images/HealJai/HJ_favorite.png",
      "images/HealJai/HJ_other.png"
    ]
  },
  {
    id: "LinkPOS",
    title: "LinkPOS Simulation",
    badge: "Internal Enterprise Project",
    badgeIcon: "fa-solid fa-building-lock",
    badgeClass: "proj-badge-mobile",
    description: "A Flutter-based Point of Sale (POS) simulator with MQTT integration, Device Activation APIs, and real-time order transmission developed during internship.",
    technologies: [
      { name: "Flutter", icon: "fa-solid fa-mobile-screen", iconColor: "#02569b" },
      { name: "Dart", icon: "fa-solid fa-bolt", iconColor: "#00b4ab" },
      { name: "MQTT Protocol", icon: "fa-solid fa-network-wired text-warning" }
    ],
    isInternal: true,
    internalBadgeText: "Proprietary Code (Digio Thailand)",
    graphicBox: {
      icon: "fa-solid fa-shield-halved text-info",
      title: "LinkPOS Simulator",
      subtitle: "Proprietary / Enterprise Project"
    }
  },
  {
    id: "MeowManager",
    title: "MeowManager",
    badge: "Web Application",
    badgeIcon: "fa-solid fa-globe",
    badgeClass: "proj-badge-desktop",
    description: "A full-stack web application built with Laravel and PHP backend, MySQL database, featuring role-based access control for admin and user management, and a customer-facing frontend.",
    technologies: [
      { name: "Laravel", icon: "fa-brands fa-laravel text-danger" },
      { name: "PHP", icon: "fa-brands fa-php", iconColor: "#777bb4" },
      { name: "MySQL", icon: "fa-solid fa-database text-info" }
    ],
    githubUrl: "https://github.com/tharitnut/MeowManager",
    images: [
      "images/MeowManager/MM1.png",
      "images/MeowManager/MM2.png",
      "images/MeowManager/MM3.png",
      "images/MeowManager/MM4.png",
      "images/MeowManager/MM5.png",
      "images/MeowManager/MM6.png",
      "images/MeowManager/MM7.png",
      "images/MeowManager/MM8.png",
      "images/MeowManager/MM9.png"
    ]
  },
  {
    id: "TFTactics",
    title: "TFTactics",
    badge: "Cross-Platform",
    badgeIcon: "fa-solid fa-layer-group",
    badgeClass: "proj-badge-maui",
    description: "A Teamfight Tactics (TFT) game guide application allowing players to look up champion stats, item combination recipes, synergy traits, and recommended meta team comps.",
    technologies: [
      { name: "C#", customSvg: "images/Logo_C_sharp.svg" },
      { name: ".NET MAUI", icon: "fa-solid fa-cubes text-primary" }
    ],
    githubUrl: "https://github.com/tharitnut/TFTactics",
    images: [
      "images/TFTactics/TF_splash.png",
      "images/TFTactics/TF_home.png",
      "images/TFTactics/TF_home_bot.png",
      "images/TFTactics/TF_off.png",
      "images/TFTactics/TF_champ.png",
      "images/TFTactics/TF_item.png",
      "images/TFTactics/TF_1.png",
      "images/TFTactics/TF_items.png"
    ]
  },
  {
    id: "TaxEase",
    title: "TaxEase",
    badge: "Finance App",
    badgeIcon: "fa-solid fa-calculator",
    badgeClass: "proj-badge-desktop",
    description: "A personal income tax calculation application assisting users in estimating eligible deductions, calculating net tax brackets, and reviewing tax computation guides.",
    technologies: [
      { name: "Java", icon: "fa-brands fa-java", iconColor: "#f89820" },
      { name: "Database Management", icon: "fa-solid fa-database text-info" }
    ],
    githubUrl: "https://github.com/tharitnut/TaxEase",
    reverseLayout: true,
    images: [
      "images/TaxEase/TE_first.png",
      "images/TaxEase/TE_regis.png",
      "images/TaxEase/TE_login.png",
      "images/TaxEase/TE_home.png",
      "images/TaxEase/TE_cal1.png",
      "images/TaxEase/TE_cal2.png",
      "images/TaxEase/TE_total.png",
      "images/TaxEase/TE_how.png",
      "images/TaxEase/TE_ex.png",
      "images/TaxEase/TE_profile.png"
    ]
  },
  {
    id: "RushHour",
    title: "Rush Hour",
    badge: "Desktop Game",
    badgeIcon: "fa-solid fa-gamepad",
    badgeClass: "proj-badge-desktop",
    description: "A Java desktop puzzle game based on the classic Rush Hour sliding block puzzle, featuring interactive grid mechanics, vehicle movement, and level selection.",
    technologies: [
      { name: "Java", icon: "fa-brands fa-java", iconColor: "#f89820" },
      { name: "Java Swing / AWT", icon: "fa-solid fa-desktop text-primary" }
    ],
    githubUrl: "https://github.com/tharitnut/JavaFinalProject",
    images: [
      "images/RushHour/RH1.png",
      "images/RushHour/RH2.png",
      "images/RushHour/RH3.png",
      "images/RushHour/RH4.png",
      "images/RushHour/RH6.png"
    ]
  }
];

function renderProjects() {
  const container = document.getElementById("ProjectsContainer");
  if (!container) return;

  container.innerHTML = projectsData.map(proj => {
    const leftColOrder = proj.reverseLayout ? "order-lg-2" : "";
    const rightColOrder = proj.reverseLayout ? "order-lg-1" : "";

    let mediaContent = "";
    if (proj.graphicBox) {
      mediaContent = `
        <div class="proj-media-box text-center p-4">
          <div class="p-4 rounded-4 graphic-box-inner">
            <i class="${proj.graphicBox.icon} mb-3 display-4"></i>
            <h4 class="text-white font-weight-bold mb-1">${proj.graphicBox.title}</h4>
            <span class="badge bg-warning bg-opacity-25 text-warning border border-warning border-opacity-25 mt-1">
              <i class="fa-solid fa-lock me-1"></i> ${proj.graphicBox.subtitle}
            </span>
          </div>
        </div>`;
    } else if (proj.images && proj.images.length) {
      const slidesHtml = proj.images.map((imgSrc, idx) => `
        <div class="carousel-item ${idx === 0 ? 'active' : ''}">
          <img alt="${proj.title} ${idx + 1}" src="${imgSrc}" class="img-fluid rounded" loading="lazy" />
        </div>`).join("");

      mediaContent = `
        <div class="proj-media-box">
          <div id="${proj.id}" class="carousel slide carousel-fade w-100 carousel-img" data-bs-ride="carousel" data-bs-interval="3500">
            <div class="carousel-inner text-center">
              ${slidesHtml}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${proj.id}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${proj.id}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>`;
    }

    const techPills = proj.technologies.map(tech => {
      if (tech.customSvg) {
        return `<span class="skill-pill"><img src="${tech.customSvg}" width="16" height="16" class="me-1" alt="${tech.name}" /> ${tech.name}</span>`;
      }
      const colorStyle = tech.iconColor ? `style="color: ${tech.iconColor};"` : "";
      return `<span class="skill-pill"><i class="${tech.icon} me-1" ${colorStyle}></i> ${tech.name}</span>`;
    }).join("\n");

    let actionBtnHtml = "";
    if (proj.isInternal) {
      actionBtnHtml = `
        <span class="btn btn-outline-secondary rounded-pill px-4 btn-sm disabled internal-btn">
          <i class="fa-solid fa-lock me-1"></i> ${proj.internalBadgeText}
        </span>`;
    } else {
      actionBtnHtml = `
        <a href="${proj.githubUrl}" target="_blank" class="btn btn-outline-light rounded-pill px-4 btn-sm">
          <i class="fa-brands fa-github me-1"></i> View Code
        </a>`;
    }

    return `
      <div class="proj-card mb-5 p-4 p-md-5">
        <div class="row align-items-center g-4">
          <div class="col-lg-6 ${leftColOrder}">
            ${mediaContent}
          </div>
          <div class="col-lg-6 ${rightColOrder}">
            <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
              <span class="proj-badge ${proj.badgeClass}"><i class="${proj.badgeIcon} me-1"></i> ${proj.badge}</span>
            </div>
            <h2 class="text-white mb-2 font-weight-bold">${proj.title}</h2>
            <p class="proj-desc mb-3">${proj.description}</p>
            <div class="mb-4">
              <span class="d-block tech-title mb-2">Technologies Used</span>
              <div class="d-flex flex-wrap gap-2">
                ${techPills}
              </div>
            </div>
            <div>
              ${actionBtnHtml}
            </div>
          </div>
        </div>
      </div>`;
  }).join("\n");
}

document.addEventListener("DOMContentLoaded", function() {
  // Render Projects dynamically
  renderProjects();
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