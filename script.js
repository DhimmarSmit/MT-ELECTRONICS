var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});

// Swiper 2 Configuration
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var menuBar = document.querySelector('.menu-bar');
var closeIcon = document.querySelector('.menu-bar i');
var barsIcon = document.querySelector('.fa-bars');

// Show menu
barsIcon.addEventListener('click', () => {
    menuBar.classList.add('show');
});

// Hide menu
closeIcon.addEventListener('click', () => {
    menuBar.classList.remove('show');
});