$(document).ready(function(){
  // Make sure the story card tiles are always the same dimensions
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);
  // Change the font-size of the sound icon in the story panel
  // according to the size of the story panel
  var soundIconFontSize = panelHeight*0.8;
  $("section#stories > article > div.panel > div.panel-body > i.sound-icon-size.icon").css("font-size", soundIconFontSize);
  // Change the size of the YouTube iframe based on panel size
  $("iframe.panel-video").height(panelHeight);
  $("iframe.panel-video").width($(".panel-body-height").width());

  // Semantic UI Dropdown
  // This allows the filtering dropdowns on the hompage to work.
  $('.ui.dropdown')
    .dropdown()
  ;

  // When the clear filters button is pressed on the homepage,
  // then reset all the filter dropdowns
  $('#clear-homepage-filters').on('click', function() {
    console.log("Clearing all selected homepage filters.")
    $('#country-filter-dropdown').dropdown('clear');
    $('#group-filter-dropdown').dropdown('clear');
    $('#tag-filter-dropdown').dropdown('clear');
  });

  // When the submit filters button is pressed on the homepage,
  // then obtain all the filters that were selected
  // and do something with them...
  $('#submit-homepage-filters').on('click', function() {
    // Retrieving filters
    console.log("Retrieving all selected homepage filters.")
    var countryFiltersSelected = $('#country-filter-dropdown').dropdown('get value');
    var groupFiltersSelected = $('#group-filter-dropdown').dropdown('get value');
    var tagFiltersSelected = $('#tag-filter-dropdown').dropdown('get value');
    console.log(countryFiltersSelected);
    console.log(groupFiltersSelected);
    console.log(tagFiltersSelected);
    // Retrieving search mode
    var searchModeHomepage = $("input[name='searchModeRadios']:checked").val();
    console.log(searchModeHomepage);
  });

  // Stop audio and/or video when the modal closes
  $("#storyModal").on('hidden.bs.modal', function (e) {
    $('audio').each(function(){
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    });
    $("#storyModal iframe").attr("src", $("#storyModal iframe").attr("src"));
  });

  // Change the content inside the story modal based on which story panel is clicked:
  // Story panel 1 content
  $("#storyModalButton000001").click(function() {
    console.log("Story 1 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Row, Row, Row Your Boat</h2>');
    $("#story-modal-body").append('<img class="story-image" src="https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg"><img class="story-image" src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"><img class="story-image" src="https://images.pexels.com/photos/416904/pexels-photo-416904.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb">');
  });
  // Story panel 2 content
  $("#storyModalButton000002").click(function() {
    console.log("Story 2 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Skipping Stones</h2>');
    $("#story-modal-body").append('<div class="text-center"><audio controls><source src="../media/audio/skipping-stones.wav" type="audio/wav">Your browser does not support the audio element.</audio></div>');
  });
  // Story panel 3 content
  $("#storyModalButton000003").click(function() {
    console.log("Story 3 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">My World</h2>');
    $("#story-modal-body").append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste amet beatae eveniet perspiciatis, ipsa soluta quo deserunt aut molestiae modi, quas odio a, repellendus asperiores suscipit. Delectus eos facere atque.</p><blockquote class=".quote">Paint anything you want on the canvas. Create your own world.</blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu. Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate. Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante. Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>');
  });
  // Story panel 4 content
  $("#storyModalButton000004").click(function() {
    console.log("Story 4 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">When the Dams Opened</h2>');
    $("#story-modal-body").append('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LBL1fdbb5wA" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div>');
  });
  // Story panel 5 content
  $("#storyModalButton000005").click(function() {
    console.log("Story 5 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Doing the Right Thing</h2>');
    $("#story-modal-body").append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu. Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><blockquote class=".quote">It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.</blockquote><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate. Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante. Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>');
  });
  // Story panel 6 content
  $("#storyModalButton000006").click(function() {
    console.log("Story 6 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Making Popsicles</h2>');
    $("#story-modal-body").append('<h2 class="modal-body-title text-center">Ingredients</h2><img class="story-image" src="https://static.pexels.com/photos/70862/pexels-photo-70862.jpeg"><img class="story-image" src="https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"><img class="story-image" src="https://static.pexels.com/photos/257840/pexels-photo-257840.jpeg"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eum voluptatem esse magnam voluptatum ab quod vitae commodi hic eos, adipisci numquam, tempore aperiam natus voluptates quae dolor saepe blanditiis.</p><h2 class="modal-body-title text-center">Assembly</h2><img class="story-image" src="https://static.pexels.com/photos/247685/pexels-photo-247685.png"><img class="story-image" src="https://static.pexels.com/photos/461189/pexels-photo-461189.jpeg"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium porro quos, voluptatibus voluptates voluptas eveniet veniam. Nihil libero, pariatur quidem? Ipsa qui dolorum quisquam facere expedita perferendis magnam iusto.</p>');
  });
  // Story panel 7 content
  $("#storyModalButton000007").click(function() {
    console.log("Story 7 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Cooking with Grandma</h2>');
    $("#story-modal-body").append('<div class="text-center"><audio controls><source src="../media/audio/cooking-wok.wav" type="audio/wav">Your browser does not support the audio element.</audio></div>');
  });
  // Story panel 8 content
  $("#storyModalButton000008").click(function() {
    console.log("Story 8 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">History of Chocolate</h2>');
    $("#story-modal-body").append('<h2 class="modal-body-title">19th Century</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu.</p><h3 class="modal-body-title">Bakeries</h3><p>Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><h4 class="modal-body-title">Deliveries</h4><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><blockquote class=".quote">It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.</blockquote><h2 class="modal-body-title">20th Century</h2><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate.</p><h3 class="modal-body-title">The War</h3><p>Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><h4 class="modal-body-title">At Home</h4><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante.</p><h3 class="modal-body-title">Industrialization</h3><p>Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>');
  });
  // Story panel 9 content
  $("#storyModalButton000009").click(function() {
    console.log("Story 9 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Making a Wish</h2>');
    $("#story-modal-body").append('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-vyZqnJO2Mo" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci minus atque nihil accusamus nostrum, iure nulla esse ea, eos fugit incidunt qui, temporibus recusandae soluta tenetur quas. Reiciendis, aperiam, necessitatibus!</p>');
  });
  // Story panel 10 content
  $("#storyModalButton000010").click(function() {
    console.log("Story 10 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Unexpected Snow Day</h2>');
    $("#story-modal-body").append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, officiis amet libero adipisci facere, recusandae eum alias totam. Hic optio deserunt sed commodi natus ducimus perferendis quas minima architecto maiores.</p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AMkEsmYgDOM" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div>');
  });
  // Story panel 11 content
  $("#storyModalButton000011").click(function() {
    console.log("Story 11 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Bedtime Stories</h2>');
    $("#story-modal-body").append('<img class="story-image" src="https://static.pexels.com/photos/33196/still-life-teddy-white-read.jpg"><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate. Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante. Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p>');
  });
  // Story panel 12 content
  $("#storyModalButton000012").click(function() {
    console.log("Story 12 pressed.");
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Add new desired content to the title div and body div of the story modal
    $("#story-modal-title").append('<h2 class="modal-title text-center">Tales by the Campfire</h2>');
    $("#story-modal-body").append('<div class="text-center"><audio controls><source src="../media/audio/fire.wav" type="audio/wav">Your browser does not support the audio element.</audio></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste amet beatae eveniet perspiciatis, ipsa soluta quo deserunt aut molestiae modi, quas odio a, repellendus asperiores suscipit. Delectus eos facere atque.</p><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p>');
  });
})

// Gets called whenever the window is resized
$(window).resize(function(){
  // Make sure the story card tiles are always the same dimensions
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);
  // Change the font-size of the sound and film icons in the story panel
  // according to the size of the story panel
  var soundIconFontSize = panelHeight*0.8;
  $("section#stories > article > div.panel > div.panel-body > i.sound-icon-size.icon").css("font-size", soundIconFontSize);
  // Change the size of the YouTube iframe based on panel size
  $("iframe.panel-video").height(panelHeight);
  $("iframe.panel-video").width($(".panel-body-height").width());
});