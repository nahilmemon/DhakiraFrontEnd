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

  // $(document).on('hidden.bs.modal', function (e) {
  //   var target = $(e.target);
  //   target.removeData('bs.modal')
  //   .find(".clearable-content").html('');
  // });

  // Bootstrap Modal
  // This allows the modal to work on the homepage.
  // $('#storyModal').on('show.bs.modal', function (event) {
  //   var button = $(event.relatedTarget) // Button that triggered the modal
  //   var recipient = button.data('whatever') // Extract info from data-* attributes
  //   var description = button.data('description')
  //   // Update the modal's content using jQuery.
  //   var modal = $(this)
  //   modal.find('.modal-title').text('New message to ' + recipient)
  //   modal.find('.modal-body input').val(recipient)
  //   modal.find('.modal-body textarea').val(description)
  // })

  // Change the content inside the story modal:

  $("#storyModalButton000001").click(function() {
    //alert( "Handler for .click() for story 1 called." );
    console.log("Story 1 pressed.");
    $("#story-modal-title").empty();
    $("#story-modal-title").append('<h2 class="modal-title text-center">At the Gate</h2>');
    $("#story-modal-body").empty();
    $("#story-modal-body").append('<p>Story 1</p><img class="story-image" src="https://static.pexels.com/photos/10678/road-travel-fence-empty-10678.jpg">');
    //$("#story-modal-title").replaceWith('<div id="story-modal-body"><h2 class="modal-title text-center">At the Gate</h2></div>');
    //$("#story-modal-body").replaceWith('<p>Story 1</p>');//<img class="story-image" src="https://static.pexels.com/photos/10678/road-travel-fence-empty-10678.jpg">');
  });

  $("#storyModalButton000002").click(function() {
    //alert( "Handler for .click() for story 2 called." );
    console.log("Story 2 pressed.");
    $("#story-modal-title").empty();
    $("#story-modal-title").append('<h2 class="modal-title text-center">Row, Row, Row Your Boat</h2>');
    $("#story-modal-body").empty();
    $("#story-modal-body").append('<p>Story 2</p><img class="story-image" src="https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg">');
    //$("#story-modal-title").replaceWith('<div id="story-modal-body"><h2 class="modal-title text-center">Row, Row, Row Your Boat</h2></div>');
    //$("#story-modal-body").replaceWith('<p>Story 2</p>');//<img class="story-image" src="https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg">');
  });

})

// Make sure the story card tiles are always the same dimensions
$(window).resize(function(){
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);
});