// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if( window.scrollY > fixedNav ) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// Hamburger Button
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(e) {
  if( e.target != hamburger && e.target != navMenu ) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode Toggle
const toggleDarkMode = document.querySelector('#toggle-light-dark');
const html = document.querySelector('html');

toggleDarkMode.addEventListener('click', function() {
  toggleDarkMode.checked ? (html.classList.add('dark'), localStorage.theme = 'dark') : (html.classList.remove('dark'), localStorage.theme = 'light');
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  toggleDarkMode.checked = true;
} else {
  toggleDarkMode.checked = false;
}