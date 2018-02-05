$(document).ready(function(){
  // Make sure the story card tiles are always the same dimensions
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);
})

// Make sure the story card tiles are always the same dimensions
$(window).resize(function(){
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);
});