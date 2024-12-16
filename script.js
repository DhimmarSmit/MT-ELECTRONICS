function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
          },
    });
}swiper();

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