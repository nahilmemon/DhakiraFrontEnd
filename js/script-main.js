$(document).ready(function(){
  // Make sure the story card tiles are always the same dimensions
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);

  // Semantic UI Dropdown
  // This allows the filtering dropdowns on the hompage to work.
  $('.ui.dropdown')
    .dropdown()
  ;

  // Change the content inside the story modal based on which story panel is clicked:
  // Story panel 1 content
  $("#storyModalButton000001").click(function() {
    console.log("Story 1 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">At the Gate</h2>');
    $("#story-modal-body").append('<p>Story 1</p><img class="story-image" src="https://static.pexels.com/photos/10678/road-travel-fence-empty-10678.jpg">');
  });
  // Story panel 2 content
  $("#storyModalButton000002").click(function() {
    console.log("Story 2 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Row, Row, Row Your Boat</h2>');
    $("#story-modal-body").append('<p>Story 2</p><img class="story-image" src="https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg">');
  });

})

// Gets called whenever the window is resized
$(window).resize(function(){
  // Make sure the story card tiles are always the same dimensions
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);
});