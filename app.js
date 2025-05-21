const menuBtn = document.getElementById('menu-btn'); 
const navbar = document.querySelector('.navbar');
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');
const dropdownToggle = document.querySelector('.navbar .dropdown > a');
const dropdownMenu = document.querySelector('.navbar .dropdown');

// Toggle menu on small screens
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  searchBox.style.display = 'none'; // Close search if nav is opened
  dropdownMenu.classList.remove('active'); // Close dropdown
});

// Toggle search box visibility
searchBtn.addEventListener('click', () => {
  const isSearchVisible = searchBox.style.display === 'block';
  searchBox.style.display = isSearchVisible ? 'none' : 'block';

  if (!isSearchVisible) {
    // Close dropdown if search is opened
    dropdownMenu.classList.remove('active');
  }
});

// Hide search box when clicking outside
document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target) && e.target !== searchBtn) {
    searchBox.style.display = 'none';
  }
});

// Enable dropdown toggle on mobile (≤768px)
dropdownToggle.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault(); // Prevent link navigation

    // Close search box only (not the navbar)
    searchBox.style.display = 'none';

    // Toggle dropdown visibility
    dropdownMenu.classList.toggle('active');
  }
});

var swiper = new Swiper(".hero-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});




