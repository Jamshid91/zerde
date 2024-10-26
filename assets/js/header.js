const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu-btn'),
      block1 = document.querySelectorAll('.swiper-block1 .item-info'),
      popUp_calculate = document.querySelector('.popUp-calculate'),
      builder_btns = document.querySelectorAll('.builder-btn'),
      popUpBuilder = document.querySelector('.popUp-builder'),
      popUpThanks = document.querySelector('.popUp-thanks'),
      body = document.querySelector('body');



menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('clickMenu');
    menu.classList.toggle('showMenu');
    block1.forEach(elem => {
        elem.classList.toggle('d-none');
        elem.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('hidden');
        console.log(elem.parentElement.parentElement.parentElement.nextElementSibling)
    })
    body.classList.toggle('bodyStopScroll');
});


builder_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpBuilder.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
      });
})

wow = new WOW(
    {
    boxClass:     'wow',     
    animateClass: 'animated',
    offset:       0,         
    mobile:       true,      
    live:         true       
  }
  )
  wow.init();