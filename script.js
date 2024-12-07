// Select DOM Elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle the mobile menu
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('mobile');
  navLinks.classList.toggle('open');

  // Change hamburger menu to 'X' when open
  if (navLinks.classList.contains('open')) {
    hamburgerMenu.innerHTML = `
      <span style="font-size: 2rem; color: #E6D1B4; cursor: pointer;">&times;</span>
    `;
  } else {
    hamburgerMenu.innerHTML = `
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    `;
  }
});



// Select dropdown and menu
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle the dropdown menu on click
dropdown.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('active');
});

// Close the dropdown if clicked outside
document.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('active')) {
    dropdownMenu.classList.remove('active');
  }
});





window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});




const phrases = ["DesignEdge", "Innovation", "Futuristic Designs"];
let currentPhrase = 0;
let currentLetter = 0;
const dynamicText = document.getElementById("dynamic-text");

function type() {
  if (currentLetter < phrases[currentPhrase].length) {
    dynamicText.textContent += phrases[currentPhrase].charAt(currentLetter);
    currentLetter++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (currentLetter > 0) {
    dynamicText.textContent = phrases[currentPhrase].slice(0, --currentLetter);
    setTimeout(erase, 100);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

type();





// Fade-in Animation for Services Section (Slower)
const servicesSection = document.querySelector('.services-section');
const serviceCards = document.querySelectorAll('.service-card');

const fadeInOnScroll = () => {
  const sectionTop = servicesSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.2;

  if (sectionTop < triggerPoint) {
    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, index * 300); // Slower staggered animation
    });
  }
};

window.addEventListener('scroll', fadeInOnScroll);




// JavaScript to handle modal interactions
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('ar-vr-modal');
  const closeModal = document.querySelector('.close-modal');
  const arVrCard = document.querySelector('[data-category="ar-vr"]');

  // Open modal on click
  arVrCard.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // Close modal on click
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


// Filtering the Portfolio Items
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update the active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    portfolioItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});









const blogCards = document.querySelectorAll('.blog-card');

window.addEventListener('scroll', () => {
  blogCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      card.classList.add('visible');
    }
  });
});




// Search Blogs
const searchInput = document.getElementById('blog-search');
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  blogCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(searchText) ? 'block' : 'none';
  });
});

// Scroll Animation for Blog Cards
window.addEventListener('scroll', () => {
  blogCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      card.classList.add('visible');
    }
  });
});




const carousel = document.querySelector('.testimonial-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollPosition = 0;
const cardWidth = document.querySelector('.testimonial-card').offsetWidth;


// Function to move the carousel
function scrollCarousel(direction) {
  if (direction === 'next') {
    if (scrollPosition < carousel.scrollWidth - cardWidth) {
      scrollPosition += cardWidth;
    } else {
      scrollPosition = 0; // Reset to the start if at the end
    }
  } else if (direction === 'prev') {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
    } else {
      scrollPosition = carousel.scrollWidth - cardWidth; // Jump to the end if at the start
    }
  }
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}



// Button Click Handlers
nextBtn.addEventListener('click', () => scrollCarousel('next'));
prevBtn.addEventListener('click', () => scrollCarousel('prev'));

// Auto-Scroll Feature
let autoScroll = setInterval(() => scrollCarousel('next'), 5000); // Scrolls every 5 seconds

// Pause auto-scroll on manual interaction
function pauseAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => scrollCarousel('next'), 5000); // Restart auto-scroll after interaction
}

prevBtn.addEventListener('click', pauseAutoScroll);
nextBtn.addEventListener('click', pauseAutoScroll);
carousel.addEventListener('mouseenter', () => clearInterval(autoScroll)); // Stop when hovering
carousel.addEventListener('mouseleave', () => (autoScroll = setInterval(() => scrollCarousel('next'), 5000))); // Resume on hover exit




document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Validate form inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Simulate form submission (can be replaced with a server request)
    setTimeout(() => {
      // Hide form and show success message
      contactForm.reset();
      successMessage.style.display = "block";

      // Automatically hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }, 1000); // Simulate a delay for form submission
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const pricingButtons = document.querySelectorAll(".pricing-button");

  pricingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Thank you for choosing this plan! A team member will contact you soon.");
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  // Toggle between monthly and yearly pricing
  const toggle = document.getElementById("toggle");
  const prices = document.querySelectorAll(".price");

  toggle.addEventListener("change", () => {
    prices.forEach((price) => {
      const isYearly = toggle.checked;
      const value = isYearly ? price.dataset.yearly : price.dataset.monthly;
      const interval = isYearly ? "/yr" : "/mo";
      price.querySelector(".price-value").textContent = value;
      price.querySelector("span:last-child").textContent = interval;
    });
  });

  // Initialize AOS animations
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Animation only happens once
    easing: "ease-in-out",
  });
});




// Modal functionality for AR/VR and Features
const modals = {
  'ar-vr-modal': document.getElementById('ar-vr-modal'),
  'feature-modal': document.getElementById('feature-modal'),
};

const closeButtons = document.querySelectorAll('.close-modal, .close-btn');
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

// Feature data
const featureDetails = {
  design: {
    title: 'Innovative Design',
    description: 'Our innovative design process ensures your business stands out with modern, cutting-edge aesthetics.',
  },
  solutions: {
    title: 'Custom Solutions',
    description: 'Tailor-made solutions for your unique business needs, solving even the most complex challenges.',
  },
  scalability: {
    title: 'Scalability',
    description: 'Systems that grow with your business, ensuring seamless performance at every stage.',
  },
  analytics: {
    title: 'Real-Time Analytics',
    description: 'Track and analyze your data in real-time to make informed decisions faster.',
  },
  'ai-tools': {
    title: 'AI-Powered Tools',
    description: 'Enhance your business operations with the latest in AI-driven technology.',
  },
  support: {
    title: '24/7 Support',
    description: 'Around-the-clock support to help you whenever you need it.',
  },
};

// Open modal
learnMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = modals['feature-modal'];
    const feature = button.getAttribute('data-feature');
    const modalTitle = modal.querySelector('#modal-title');
    const modalDescription = modal.querySelector('#modal-description');
    modalTitle.textContent = featureDetails[feature].title;
    modalDescription.textContent = featureDetails[feature].description;
    modal.style.display = 'flex';
  });
});

// Close modals
closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    Object.values(modals).forEach((modal) => (modal.style.display = 'none'));
  });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  Object.values(modals).forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Animation happens only once
    easing: "ease-in-out",
  });
});



// Counter Animation
let count = 0;
const counter = document.getElementById('counter');
const totalAwards = 15; // Example total awards
const increment = Math.ceil(totalAwards / 100);

window.addEventListener('scroll', () => {
  const rect = counter.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0 && count < totalAwards) {
    const interval = setInterval(() => {
      if (count >= totalAwards) clearInterval(interval);
      else counter.textContent = ++count;
    }, 50);
  }
});

// Progress Bar Animation
window.addEventListener('scroll', () => {
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const targetWidth = bar.style.width;
      bar.style.width = targetWidth; // Animates width
    }
  });
});


// Toggle Details for Career Cards
const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    if (details.style.display === 'block') {
      details.style.display = 'none';
      button.textContent = 'View Details';
    } else {
      details.style.display = 'block';
      button.textContent = 'Hide Details';
    }
  });
});

// Newsletter Form Validation
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const feedback = document.getElementById("newsletter-feedback");
  const emailInput = document.querySelector(".newsletter-input");

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    feedback.textContent = "Thank you for subscribing!";
    feedback.style.color = "green";
    emailInput.value = ""; // Clear input field
  } else {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "#EFA00F";
  }
});

// Smooth Scroll to Top
document.querySelector(".scroll-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});