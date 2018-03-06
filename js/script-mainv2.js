$(document).ready(function(){
  // Make sure the story card tiles are always the same dimensions
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);

  // If in landscape mode, then make the carousel take up the whole screen's height and width
  if (window.innerHeight < window.innerWidth) {
    var carouselContainerHeight = window.innerHeight - 70 - 50; // 70 = navbar height, 50 = footer height
    $("#myCarousel").height(carouselContainerHeight);
    var carouselContainerWidth = $("section#featured.jumbotron").width();
    $("section#featured > div.row").width(carouselContainerWidth);
    $(".carousel-img").height(carouselContainerHeight);
    $(".carousel-img").width(carouselContainerWidth);
  } else { // else just take up the whole width, and 67% of the height of the width
    var carouselContainerWidth = $("section#featured.jumbotron").width();
    var carouselContainerHeight = carouselContainerWidth * 0.67;
    $("#myCarousel").height(carouselContainerHeight);
    $("section#featured > div.row").width(carouselContainerWidth);
    $(".carousel-img").height(carouselContainerHeight);
    $(".carousel-img").width(carouselContainerWidth);
  }

  // Change the font-size of the sound icon in the story panel
  // according to the size of the story panel
  var soundIconFontSize = panelHeight*0.8;
  $("section#stories > article > div.panel > div.panel-body > i.sound-icon-size.icon").css("font-size", soundIconFontSize);
});

// Gets called whenever the window is resized
$(window).resize(function(){
  // Make sure the story card tiles are always the same dimensions
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);

  // If in landscape mode, then make the carousel take up the whole screen's height and width
  if (window.innerHeight < window.innerWidth) {
    var carouselContainerHeight = window.innerHeight - 70 - 50; // 70 = navbar height, 50 = footer height
    $("#myCarousel").height(carouselContainerHeight);
    var carouselContainerWidth = $("section#featured.jumbotron").width();
    $("section#featured > div.row").width(carouselContainerWidth);
    $(".carousel-img").height(carouselContainerHeight);
    $(".carousel-img").width(carouselContainerWidth);
  } else { // else just take up the whole width, and 67% of the height of the width
    var carouselContainerWidth = $("section#featured.jumbotron").width();
    var carouselContainerHeight = carouselContainerWidth * 0.67;
    $("#myCarousel").height(carouselContainerHeight);
    $("section#featured > div.row").width(carouselContainerWidth);
    $(".carousel-img").height(carouselContainerHeight);
    $(".carousel-img").width(carouselContainerWidth);
  }

  // Change the font-size of the sound and film icons in the story panel
  // according to the size of the story panel
  var soundIconFontSize = panelHeight*0.8;
  $("section#stories > article > div.panel > div.panel-body > i.sound-icon-size.icon").css("font-size", soundIconFontSize);
});