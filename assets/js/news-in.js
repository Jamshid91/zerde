const smiller = new Swiper('.swiper-smiller', {
      watchOverflow: true, slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        576: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        },
        767: {
            slidesPerView: 3.5,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    }
  });