// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // No need to add click event listeners for navigation since we're using separate HTML pages
  // The active class is already set in each HTML file

  // Simple animation for cards
  const cards = document.querySelectorAll('.card');

  function checkVisibility() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight - 100);

      if (isVisible) {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial styles
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Check visibility on load and scroll
  window.addEventListener('load', checkVisibility);
  window.addEventListener('scroll', checkVisibility);

  // Mobile menu toggle (simplified version)
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '☰';
  mobileMenuBtn.style.display = 'none';

  const nav = document.querySelector('nav .container');
  nav.appendChild(mobileMenuBtn);

  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      mobileMenuBtn.style.display = 'block';
    } else {
      mobileMenuBtn.style.display = 'none';
      document.querySelector('.nav-links').style.display = 'flex';
    }
  }

  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();

  mobileMenuBtn.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '60px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.backgroundColor = '#005035';
      navLinks.style.padding = '1rem';
    }
  });

  // Add mobile navigation toggle functionality
  // Get current page for navigation highlighting
  const currentPage = window.location.pathname.split('/').pop();

  // Set the active class for the current page
  const navLinks2 = document.querySelectorAll('.nav-links a');
  navLinks2.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (currentPage === linkHref || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
});