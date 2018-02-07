$(document).ready(function(){
  // Make sure the story card tiles are always the same dimensions
  var panelHeight = $(".panel-body-height").width()*0.67;
  $(".panel-body-height").height(panelHeight);
  var carouselImageHeight = $(".carousel-img").width()*0.67;
  $(".carousel-img").height(carouselImageHeight);
  // Change the font-size of the sound icon in the story panel
  // according to the size of the story panel
  var soundIconFontSize = panelHeight*0.8;
  $("section#stories > article > div.panel > div.panel-body > i.sound.icon").css("font-size", soundIconFontSize);
  // Change the size of the YouTube iframe based on panel size
  $("iframe.panel-video").height(panelHeight);
  $("iframe.panel-video").width($(".panel-body-height").width());

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
  // Change the font-size of the sound icon in the story panel
  // according to the size of the story panel
  var soundIconFontSize = panelHeight*0.8;
  $("section#stories > article > div.panel > div.panel-body > i.sound.icon").css("font-size", soundIconFontSize);
  // Change the size of the YouTube iframe based on panel size
  $("iframe.panel-video").height(panelHeight);
  $("iframe.panel-video").width($(".panel-body-height").width());
});


/*
// For manipulating the state of the YouTube videos
function callPlayer(func, args) {
  var iframes = document.getElementsByTagName('iframe');
  for (var i = 0; i < iframes.length; ++i) {
    if (iframes[i]) {
      var src = iframes[i].getAttribute('src');
      if (src) {
        if (src.indexOf('youtube.com/embed') != -1) {
          iframes[i].contentWindow.postMessage(JSON.stringify({
            'event': 'command',
            'func': func,
            'args': args || []
          }), "*");
        }
      }
    }
  }
}

$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});

if ()
$(document).click(function() {

});


// To maipulate the state the YouTube iframes
// 1. This loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 2. This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('existing-iframe-example', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  console.log("Ready to play. Playing.")
}
// 5. This functions pauses the video
function pauseVideo() {
  player.pauseVideo();
}
// 6. If the user clicks anywhere, then call the pause video function
$(document).click(function() {
  player.pauseVideo();
});

*/