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