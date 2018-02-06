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

  $(document).on('hidden.bs.modal', function (e) {
    var target = $(e.target);
    target.removeData('bs.modal')
    .find(".clearable-content").html('');
  });

  // Bootstrap Modal
  // This allows the modal to work on the homepage.
  $('#storyModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    var description = button.data('description')
    // Update the modal's content using jQuery.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
    modal.find('.modal-body textarea').val(description)
  })


})

// Make sure the story card tiles are always the same dimensions
$(window).resize(function(){
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);
});