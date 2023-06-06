// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchButton = document.querySelector('#search-button');
const searchBox = document.querySelector('#search-box');
searchButton.onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


// Klik diluar sidebar untuk menghilangkan navbar
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})

