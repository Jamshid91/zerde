$(document).ready(function() {
    $('.tab-item').hide();
    $('.tab-item:nth-child(2)').show();
    $('.tab-btn').click(function() {
      let pageInfo = $(this).attr('data-tab');
      $('.tab-item').hide();
      $('.' + pageInfo).show();
    })
});

const block15_left = new Swiper('.swiper-block15-left', {
  watchOverflow: true,
  loop: false,
    breakpoints: {
      0: {
          slidesPerView: 1.7,
          spaceBetween: 15,
      },
      576: {
          slidesPerView: 3,
          spaceBetween: 12,
      },
      1199: {
          slidesPerView: 3,
          spaceBetween: 24,
      },
  }
});

const block15 = new Swiper('.swiper-block15', {
  watchOverflow: true,
  loop: false,
  navigation: {
      nextEl: '.block15-next',
      prevEl: '.block15-prev',
    },
    breakpoints: {
      0: {
          slidesPerView: 1.7,
          spaceBetween: 15,
      },
      991: {
          slidesPerView: 2,
          spaceBetween: 24,
      },
  }
});