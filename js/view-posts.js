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
    'title': 'Row, Row, Row Your Boat',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'public',
    'groupIds': [],
    'contentType': ['image(s)'],
    'thumbnailType': 'image',
    'thumbnailContent': 'https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg',
    'postContent': '<img class="story-image" src="https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg"><img class="story-image" src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"><img class="story-image" src="https://images.pexels.com/photos/416904/pexels-photo-416904.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb">'
  },
  {
    'id': 2,
    'title': 'Skipping Stones',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'public',
    'groupIds': [],
    'contentType': ['audio'],
    'thumbnailType': 'audio',
    'thumbnailContent': '',
    'postContent': '<div class="text-center"><audio controls><source src="../media/audio/skipping-stones.wav" type="audio/wav">Your browser does not support the audio element.</audio></div>'
  },
  {
    'id': 3,
    'title': 'My World',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'individual',
    'groupIds': [],
    'contentType': ['text'],
    'thumbnailType': 'text',
    'thumbnailContent': 'Paint anything you want on the canvas. Create your own world.',
    'postContent': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste amet beatae eveniet perspiciatis, ipsa soluta quo deserunt aut molestiae modi, quas odio a, repellendus asperiores suscipit. Delectus eos facere atque.</p><blockquote class=".quote">Paint anything you want on the canvas. Create your own world.</blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu. Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate. Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante. Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>'
  },
  {
    'id': 4,
    'title': 'When the Dams Opened',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [2, 5],
    'contentType': ['video(s)'],
    'thumbnailType': 'video',
    'thumbnailContent': '../media/images/video-screenshots/waterfall.PNG',
    'postContent': '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LBL1fdbb5wA" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div>'
  },
  {
    'id': 5,
    'title': 'Doing the Right Thing',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'public',
    'groupIds': [],
    'contentType': ['text'],
    'thumbnailType': 'text',
    'thumbnailContent': 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
    'postContent': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu. Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><blockquote class=".quote">It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.</blockquote><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate. Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante. Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>'
  },
  {
    'id': 6,
    'title': 'Making Popsicles',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [1, 4],
    'contentType': ['image(s)', 'text'],
    'thumbnailType': 'image',
    'thumbnailContent': 'https://static.pexels.com/photos/461189/pexels-photo-461189.jpeg',
    'postContent': '<h2 class="modal-body-title text-center">Ingredients</h2><img class="story-image" src="https://static.pexels.com/photos/70862/pexels-photo-70862.jpeg"><img class="story-image" src="https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"><img class="story-image" src="https://static.pexels.com/photos/257840/pexels-photo-257840.jpeg"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eum voluptatem esse magnam voluptatum ab quod vitae commodi hic eos, adipisci numquam, tempore aperiam natus voluptates quae dolor saepe blanditiis.</p><h2 class="modal-body-title text-center">Assembly</h2><img class="story-image" src="https://static.pexels.com/photos/247685/pexels-photo-247685.png"><img class="story-image" src="https://static.pexels.com/photos/461189/pexels-photo-461189.jpeg"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium porro quos, voluptatibus voluptates voluptas eveniet veniam. Nihil libero, pariatur quidem? Ipsa qui dolorum quisquam facere expedita perferendis magnam iusto.</p>'
  },
  {
    'id': 7,
    'title': 'Cooking with Grandma',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [4],
    'contentType': ['audio'],
    'thumbnailType': 'audio',
    'thumbnailContent': '',
    'postContent': '<div class="text-center"><audio controls><source src="../media/audio/cooking-wok.wav" type="audio/wav">Your browser does not support the audio element.</audio></div>'
  },
  {
    'id': 8,
    'title': 'History of Chocolate',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [4],
    'contentType': ['text'],
    'thumbnailType': 'text',
    'thumbnailContent': 'If I were a headmaster I would get rid of the history teacher and get a chocolate teacher instead.',
    'postContent': '<h2 class="modal-body-title">19th Century</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu.</p><h3 class="modal-body-title">Bakeries</h3><p>Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><h4 class="modal-body-title">Deliveries</h4><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><blockquote class=".quote">It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.</blockquote><h2 class="modal-body-title">20th Century</h2><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate.</p><h3 class="modal-body-title">The War</h3><p>Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><h4 class="modal-body-title">At Home</h4><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante.</p><h3 class="modal-body-title">Industrialization</h3><p>Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>'
  },
  {
    'id': 9,
    'title': 'Making a Wish',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'individual',
    'groupIds': [],
    'contentType': ['video(s)', 'text'],
    'thumbnailType': 'video',
    'thumbnailContent': '../media/images/video-screenshots/dandelion.PNG',
    'postContent': '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-vyZqnJO2Mo" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci minus atque nihil accusamus nostrum, iure nulla esse ea, eos fugit incidunt qui, temporibus recusandae soluta tenetur quas. Reiciendis, aperiam, necessitatibus!</p>'
  },
  {
    'id': 10,
    'title': 'Unexpected Snow Day',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [1, 3, 4, 5],
    'contentType': ['video(s)', 'text'],
    'thumbnailType': 'video',
    'thumbnailContent': '../media/images/video-screenshots/snow.PNG',
    'postContent': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, officiis amet libero adipisci facere, recusandae eum alias totam. Hic optio deserunt sed commodi natus ducimus perferendis quas minima architecto maiores.</p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AMkEsmYgDOM" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div>'
  },
  {
    'id': 11,
    'title': 'Bedtime Stories',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'public',
    'groupIds': [],
    'contentType': ['image(s)', 'text'],
    'thumbnailType': 'image',
    'thumbnailContent': 'https://static.pexels.com/photos/33196/still-life-teddy-white-read.jpg',
    'postContent': '<img class="story-image" src="https://static.pexels.com/photos/33196/still-life-teddy-white-read.jpg"><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate. Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante. Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p>'
  },
  {
    'id': 12,
    'title': 'Tales by the Camp Fire',
    'date': new Date("October 13, 2014 11:13:00"),
    'privacy': 'group',
    'groupIds': [5],
    'contentType': ['audio', 'text'],
    'thumbnailType': 'audio',
    'thumbnailContent': '',
    'postContent': '<div class="text-center"><audio controls><source src="../media/audio/fire.wav" type="audio/wav">Your browser does not support the audio element.</audio></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste amet beatae eveniet perspiciatis, ipsa soluta quo deserunt aut molestiae modi, quas odio a, repellendus asperiores suscipit. Delectus eos facere atque.</p><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p>'
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

function returnGroupNameString(postID, postGroupIndex) {
  var individualGroupData = findByIdReturnObject(originalGroupMasterData, postData[postID].groupIds[postGroupIndex]);
  var htmlString = '<u>';
  htmlString += individualGroupData.groupName;
  htmlString += '</u>';
  return htmlString;
}

function createHTMLStringForOnePost(postIndex) {
  var htmlStringToAppend = '<article class="row panel view-post-container" data-id="';
  htmlStringToAppend += postData[postIndex].id;
  htmlStringToAppend += '" data-toggle="modal" data-target="#storyModal">';
  // Thumbnail Div
  // Image
  if (postData[postIndex].thumbnailType == 'image') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 view-post-image-container">';
    htmlStringToAppend += '<img class="img-responsive" src="';
    htmlStringToAppend += postData[postIndex].thumbnailContent;
    htmlStringToAppend += '">';
    htmlStringToAppend += '</div>';
  }
  // Text
  else if (postData[postIndex].thumbnailType == 'text') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 view-post-text-container">';
    htmlStringToAppend += '<blockquote class="quote">';
    htmlStringToAppend += '<p>';
    htmlStringToAppend += postData[postIndex].thumbnailContent;
    htmlStringToAppend += '</p>';
    htmlStringToAppend += '</blockquote>';
    htmlStringToAppend += '</div>';
  }
  // Audio
  else if (postData[postIndex].thumbnailType == 'audio') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 view-post-audio-container text-center">';
    htmlStringToAppend += '<i class="sound icon sound-icon-size"></i>';
    htmlStringToAppend += '</div>';
  }
  // Video
  else if (postData[postIndex].thumbnailType == 'video') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 view-post-video-container">';
    htmlStringToAppend += '<img class="img-responsive story-image translucent-image" src="';
    htmlStringToAppend += postData[postIndex].thumbnailContent;
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
  htmlStringToAppend += postData[postIndex].title;
  htmlStringToAppend += '</b></h4>';
  // Date
  htmlStringToAppend += '<p class="date"><i>';
  var dateString = postData[postIndex].date.toDateString();
  htmlStringToAppend += dateString;
  htmlStringToAppend += '</i></p>';
  // Privacy
  htmlStringToAppend += '<p class="privacy">';
  if (postData[postIndex].privacy == 'individual') {
    htmlStringToAppend += 'Only you can see this post.';
  } else if (postData[postIndex].privacy == 'public') {
    htmlStringToAppend += 'Anyone can see this post.';
  } else if (postData[postIndex].privacy == 'group') {
    htmlStringToAppend += 'Only members of ';
    htmlStringToAppend += returnGroupNameString(postIndex, 0);
    if (postData[postIndex].groupIds.length == 2 ) {
      htmlStringToAppend += " and ";
      htmlStringToAppend += returnGroupNameString(postIndex, 1);
    } else {
      for (var i = 1; i < postData[postIndex].groupIds.length; i++) {
        if (i < postData[postIndex].groupIds.length - 1) {
          htmlStringToAppend += ', ';
          htmlStringToAppend += returnGroupNameString(postIndex, i);
        } else {
          htmlStringToAppend += ', and ';
          htmlStringToAppend += returnGroupNameString(postIndex, i);
        }
      }
    }
    htmlStringToAppend += ' can see this post.'
  }
  htmlStringToAppend += '</p>';
  // Content
  htmlStringToAppend += '<p class="content-type">This post contains: ';
  htmlStringToAppend += postData[postIndex].contentType[0];
  if (postData[postIndex].contentType.length == 2 ) {
    htmlStringToAppend += " and ";
    htmlStringToAppend += postData[postIndex].contentType[1];
  } else {
    for (var i = 1; i < postData[postIndex].contentType.length; i++) {
      if (i < postData[postIndex].contentType.length - 1) {
        htmlStringToAppend += ', ';
        htmlStringToAppend += postData[postIndex].contentType[i];
      } else {
        htmlStringToAppend += ', and ';
        htmlStringToAppend += postData[postIndex].contentType[i];
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
    jQuery(this).find(".view-post-audio-container").css("font-size", soundIconFontSize);
  });
}

function searchForTitleOrPostContent() {
  var searchInput = $("#searchBox").val().toUpperCase();
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < postData.length; i++) {
    var thisPostArticle = $('article[data-id="' + postData[i].id + '"]');
    if (postData[i].title.toUpperCase().indexOf(searchInput) > -1 || postData[i].postContent.toUpperCase().indexOf(searchInput) > -1) {
      thisPostArticle.show();
    } else {
      thisPostArticle.hide();
    }
  }
}

// --- When the document is fully loaded --- //
$(document).ready(function(){
  // populate the page with posts and their relevant info
  addPostHTMLStringToYourStoriesSection();
  adjustSizesOfThumbnailIcons();

  // Stop audio and/or video when the modal closes
  $("#storyModal").on('hidden.bs.modal', function (e) {
    $('audio').each(function(){
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    });
    $("#storyModal iframe").attr("src", $("#storyModal iframe").attr("src"));
  });

  // When the user clicks a post, update the contents of the modal accordingly
  $(".view-post-container").on('click', function () {
    // Empty the contents of the title div and body div of the story modal
    $("#story-modal-title").empty();
    $("#story-modal-body").empty();
    // Get information regarding the selected post
    var thisPostInfo = findByIdReturnObject(postData, $(this).attr("data-id"));
    // Add new desired content to the title div and body div of the story modal
    var storyModalHeaderString = '<h2 class="modal-title text-center">';
    storyModalHeaderString += thisPostInfo.title;
    storyModalHeaderString += '</h2>';
    $("#story-modal-title").append(storyModalHeaderString);
    $("#story-modal-body").append(thisPostInfo.postContent);
  });
});

// --- When the window is resized --- //
$(window).on('resize', function(event){
  // Change the font-size of the sound icon in the story panel
  // according to the size of the story panel
  adjustSizesOfThumbnailIcons();
});