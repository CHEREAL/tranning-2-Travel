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
  margin: 30,
  startPosition: 1,
  items: 3,
});

$('.slider__btn--prev').click(function() {
   
  owl.trigger('prev.owl.carousel', [300]);
})
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

