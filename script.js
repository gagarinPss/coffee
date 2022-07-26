
// Номера телефонов по клику//////////////////
var elements = document.querySelectorAll(".home-number_span");
var el = document.querySelectorAll(".home-number_display-none");



for (var i = 0; i < elements.length; i++) {
  {
    elements[i].onclick = function(){
      if (el[0].classList.contains('home-number_display-none')){
    el[0].classList.remove("home-number_display-none")}
      else{
        el[0].classList.add("home-number_display-none")};
  }     
};
}
// Номера телефонов по клику/////////////////


$(function() {
  // Owl Carousel
  var owl = $(".promo-slider__elem1");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    navText: ["<img src='icons/prev.png'>", "<img src='icons/next.png'>"],
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    autoplaySpeed: 1200,
    smartSpeed: 1200,
    navSpeed: 1200,
    dotsSpeed: 1200,
  });
});

$(function() {
  // Owl Carousel
  var owl = $(".promo-slider__elem2");
  owl.owlCarousel({
    items: 5,
    margin: 10,
    loop: true,
    nav: true,
    navText: ["<img src='icons/prev.png'>", "<img src='icons/next.png'>"],
    dots: false,
  });
});
$(function() {
  // Owl Carousel
  var owl = $(".promo-slider__elem3");
  owl.owlCarousel({
    items: 5,
    margin: 10,
    loop: true,
    nav: true,
    navText: ["<img src='icons/prev.png'>", "<img src='icons/next.png'>"],
    dots: false,
    
  });


});
$(function() {
  // Owl Carousel
  var owl = $(".general__review");
  owl.owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    navText: ["<img src='icons/prev.png'>", "<img src='icons/next.png'>"],    
    dots: false,
    navSpeed: 1000,
  });
});









