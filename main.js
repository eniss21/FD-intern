$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  },
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
});

$(document).ready(function () {
  var carousel = $(".owl-carousel");

  $(".slider__btn--left").click(function () {
    carousel.trigger("prev.owl.carousel");
  });

  $(".slider__btn--right").click(function () {
    carousel.trigger("next.owl.carousel");
  });
});
$(function () {
  $(".owl-carousel").owlCarousel();
});
