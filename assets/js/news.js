const news = new Swiper('.swiper-news', {
    navigation: {
        nextEl: '.news-next',
        prevEl: '.news-prev',
      },
      pagination: {
        el: '.swiper-pagination-news',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="' + ${currentClass} +'"></span> `+ ' из ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  
      watchOverflow: true, slidesPerView: 1,
      spaceBetween: 24,
  });