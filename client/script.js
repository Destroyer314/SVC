
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });
  
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
});
