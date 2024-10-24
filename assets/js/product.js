const product = new Swiper('.swiper-product', {
    navigation: {
        nextEl: '.product-next',
        prevEl: '.product-prev',
      },
      pagination: {
        el: '.swiper-pagination-product',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="' + ${currentClass} +'"></span> `+ ' из ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  
      watchOverflow: true,
      
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 24,
            grid: {
                rows: 5,
                fill: 'row'
            },
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
            grid: {
                rows: 5,
                fill: 'row'
              },
        },
    }
  });