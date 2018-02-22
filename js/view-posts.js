// List of information regarding each group
var originalGroupMasterData = [
  {
    'id': 1,
    'groupName': 'Ice Cream in the Tropics',
    'coverPhotoSource': 'https://static.pexels.com/photos/162917/ice-fruit-ice-mixed-ice-cream-sundae-162917.jpeg',
    'memberIds': [1, 2, 3]
  }, {
    'id': 2,
    'groupName': 'Grenouilles dans les Déserts',
    'coverPhotoSource': 'https://static.pexels.com/photos/8453/nature-night-frog.jpg',
    'memberIds': [2, 3, 4, 5]
  }, {
    'id': 3,
    'groupName': 'Edredones',
    'coverPhotoSource': 'http://handeyemagazine.com/sites/default/files/small_QA006-1.jpg',
    'memberIds': [3, 4, 5, 6, 7]
  }, {
    'id': 4,
    'groupName': 'Cooking with Grandparents',
    'coverPhotoSource': 'https://static.pexels.com/photos/6981/food-kitchen-dessert-pie.jpg',
    'memberIds': [2, 4, 6]
  }, {
    'id': 5,
    'groupName': 'Playing with Wild Animals',
    'coverPhotoSource': 'https://static.pexels.com/photos/63650/frog-toad-eyes-animal-63650.jpeg',
    'memberIds': [1, 3, 5, 7]
  }
];

var postData = [
  {
    'id': 1,
    'title': 'Making Popsicles',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [1, 4],
    'contentType': ['video', 'image', 'audio', 'text'],
    'thumbnailType': 'video',
    'thumbnailContent': '../media/images/video-screenshots/dandelion.PNG'
  },
  {
    'id': 1,
    'title': 'Making Popsicles',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [1, 4],
    'contentType': ['video', 'image', 'audio', 'text'],
    'thumbnailType': 'audio',
    'thumbnailContent': ''
  },
  {
    'id': 1,
    'title': 'Making Popsicles',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [1, 4],
    'contentType': ['video', 'image', 'audio', 'text'],
    'thumbnailType': 'text',
    'thumbnailContent': 'Paint anything you want on the canvas. Create your own world.'
  },
  {
    'id': 1,
    'title': 'Making Popsicles',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [1, 4],
    'contentType': ['video', 'image', 'audio', 'text'],
    'thumbnailType': 'image',
    'thumbnailContent': 'https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg'
  }

];

// Looks up an id in a list of arrays with id keys.
// Returns the array that has the input id value.
function findByIdReturnObject(source, id) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].id == id) {
      return source[i];
    }
  }
  throw "Couldn't find object with id: " + id;
}

function returnGroupNameString(idOfPost, postGroupIndex) {
  var individualGroupData = findByIdReturnObject(originalGroupMasterData, postData[idOfPost].groupIds[postGroupIndex]);
  var htmlString = '<u>';
  htmlString += individualGroupData.groupName;
  htmlString += '</u>';
  return htmlString;
}

function createHTMLStringForOnePost(postID) {
  var htmlStringToAppend = '<article class="row panel view-post-container">';
  // Thumbnail Div
  // Image
  if (postData[postID].thumbnailType == 'image') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 view-post-image-container">';
    htmlStringToAppend += '<img class="img-responsive" src="';
    htmlStringToAppend += postData[postID].thumbnailContent;
    htmlStringToAppend += '">';
    htmlStringToAppend += '</div>';
  }
  // Text
  else if (postData[postID].thumbnailType == 'text') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 view-post-text-container">';
    htmlStringToAppend += '<blockquote class="quote">';
    htmlStringToAppend += '<p>';
    htmlStringToAppend += postData[postID].thumbnailContent;
    htmlStringToAppend += '</p>';
    htmlStringToAppend += '</blockquote>';
    htmlStringToAppend += '</div>';
  }
  // Audio
  else if (postData[postID].thumbnailType == 'audio') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 view-post-audio-container text-center">';
    htmlStringToAppend += '<i class="sound icon sound-icon-size"></i>';
    htmlStringToAppend += '</div>';
  }
  // Video
  else if (postData[postID].thumbnailType == 'video') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 view-post-video-container">';
    htmlStringToAppend += '<img class="img-responsive story-image translucent-image" src="';
    htmlStringToAppend += postData[postID].thumbnailContent;
    htmlStringToAppend += '">';
    htmlStringToAppend += '<div class="thumbnail-overlay">';
    htmlStringToAppend += '<i class="video play icon video-icon-size"></i>';
    htmlStringToAppend += '</div>';
    htmlStringToAppend += '</div>';
  }
  // Post Info Div
  htmlStringToAppend += '<div class="col-xs-12 col-sm-8 view-post-info-text-container">';
  // Title
  htmlStringToAppend += '<h4><b>';
  htmlStringToAppend += postData[postID].title;
  htmlStringToAppend += '</b></h4>';
  // Date
  htmlStringToAppend += '<p class="date"><i>';
  var dateString = postData[postID].date.toDateString();
  htmlStringToAppend += dateString;
  htmlStringToAppend += '</i></p>';
  // Privacy
  htmlStringToAppend += '<p class="privacy">';
  if (postData[postID].privacy == 'individual') {
    htmlStringToAppend += 'Only you can see this post.';
  } else if (postData[postID].privacy == 'public') {
    htmlStringToAppend += 'Anyone can see this post.';
  } else if (postData[postID].privacy == 'group') {
    htmlStringToAppend += 'Only members of ';
    htmlStringToAppend += returnGroupNameString(postID, 0);
    if (postData[postID].groupIds.length == 2 ) {
      htmlStringToAppend += " and ";
      htmlStringToAppend += returnGroupNameString(postID, 1);
    } else {
      for (var i = 1; i < postData[postID].groupIds.length; i++) {
        if (i < postData[postID].groupIds.length - 1) {
          htmlStringToAppend += ', ';
          htmlStringToAppend += returnGroupNameString(postID, i);
        } else {
          htmlStringToAppend += ', and ';
          htmlStringToAppend += returnGroupNameString(postID, i);
        }
      }
    }
    htmlStringToAppend += ' can see this post.'
  }
  htmlStringToAppend += '</p>';
  // Content
  htmlStringToAppend += '<p class="content-type">This post contains: ';
  htmlStringToAppend += postData[postID].contentType[0];
  if (postData[postID].contentType.length == 2 ) {
    htmlStringToAppend += " and ";
    htmlStringToAppend += postData[postID].contentType[1];
  } else {
    for (var i = 1; i < postData[postID].contentType.length; i++) {
      if (i < postData[postID].contentType.length - 1) {
        htmlStringToAppend += ', ';
        htmlStringToAppend += postData[postID].contentType[i];
      } else {
        htmlStringToAppend += ', and ';
        htmlStringToAppend += postData[postID].contentType[i];
      }
    }
  }
  htmlStringToAppend += '.</p></div></article>';
  return htmlStringToAppend;
}

function createHTMLStringForAllPosts() {
  var htmlString = "";
  for (var i = 0; i < postData.length; i++) {
    htmlString += createHTMLStringForOnePost(i);
  }
  return htmlString;
}

function addPostHTMLStringToYourStoriesSection() {
  var completeString = createHTMLStringForAllPosts();
  $("#your-stories").append(completeString);
}

function adjustSizesOfThumbnailIcons() {
  $(".view-post-video-container").each(function(index) {
    var thumbnailHeight = $(this).height();
    var videoIconFontSize = thumbnailHeight*0.8;
    $(this).css("font-size", videoIconFontSize);
  });

  $(".view-post-container").each(function(index) {
    if (window.innerWidth >= 768 ) {
      var thumbnailHeight = jQuery(this).find(".view-post-info-text-container").height();
      var soundIconFontSize = thumbnailHeight*0.8;
    } else {
      var thumbnailHeight = jQuery(this).find(".view-post-info-text-container").width();
      var soundIconFontSize = thumbnailHeight*0.4;
    }
    console.log(thumbnailHeight);
    jQuery(this).find(".view-post-audio-container").css("font-size", soundIconFontSize);
  });
}

// --- When the document is fully loaded --- //
$(document).ready(function(){
  addPostHTMLStringToYourStoriesSection();
  adjustSizesOfThumbnailIcons();
});

// --- When the window is resized --- //
$(window).on('resize', function(event){
  // Change the font-size of the sound icon in the story panel
  // according to the size of the story panel
  adjustSizesOfThumbnailIcons();
});