/* Corousel*/

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center : true,
    loop : true,
    margin: 30,
    startPosition: 1,
    items: 3,
    
  });
});

const owl = $('.owl-carousel');
owl.owlCarousel({    
  center : true,
  loop : true,
  margin: 20,
  startPosition: 1,
  items: 3,
  responsive : {
   
    340 : {
      startPosition: 1,
    items: 1,
    },
   
    850 : {
      startPosition: 1,
    items: 3,
    },
  
    1200 : {
      items: 3,
      margin: 30,
    },
},
});

$('.slider__btn--prev').click(function() {
   
  owl.trigger('prev.owl.carousel', [300]);
})
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

/* Nav menu*/

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');


navBtn.onclick = function () {
  nav.classList.toggle('nav--mobile');
  menuIcon.classList.toggle('menu-icon-active');
  document.body.classList.toggle('no-scroll');
};


