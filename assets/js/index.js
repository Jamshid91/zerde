const review = new Swiper('.swiper-block1', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination-block1',
        clickable: 'true',
      },
  });


  $(document).ready(function() {
    $('.tab-img').hide();
    $('.tab-img:first-child').show();
    $('.tab-btn').click(function() {
      let pageInfo = $(this).attr('data-tab');
      $('.tab-img').hide();
      $('.' + pageInfo).show();
    })
});