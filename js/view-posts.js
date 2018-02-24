// Global Variables
var advancedSearchMode = true;
var searchResultsReturned = [];

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

// List of tags
var tagData = ['boat', 'water', 'nature', 'origami', 'paper', 'stones', 'painting',
  'creativity', 'meditation', 'dams', 'actions', 'righteousness', 'ethics', 'ice cream',
  'cooking', 'recipe', 'food', 'fruits', 'grandma', 'chocolate', 'history', 'dandelions',
  'wishes', 'childhood', 'snow', 'quilts', 'animals', 'storytelling', 'reading', 'bedtime',
  'scary', 'fire'];

var postData = [
  {
    'id': 1,
    'title': 'Row, Row, Row Your Boat',
    'date': new Date("September 29, 2016 21:33:43"),
    'privacy': 'public',
    'groupIds': [],
    'tags': ['boat', 'water', 'nature', 'origami', 'paper'],
    'location': [],
    'contentType': ['image(s)'],
    'thumbnailType': 'image',
    'thumbnailContent': 'https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg',
    'postContent': '<img class="story-image" src="https://static.pexels.com/photos/436791/pexels-photo-436791.jpeg"><img class="story-image" src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"><img class="story-image" src="https://images.pexels.com/photos/416904/pexels-photo-416904.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb">'
  },
  {
    'id': 2,
    'title': 'Skipping Stones',
    'date': new Date("January 27, 2018 16:23:45"),
    'privacy': 'public',
    'groupIds': [],
    'tags': ['stones', 'water', 'nature'],
    'location': [],
    'contentType': ['audio'],
    'thumbnailType': 'audio',
    'thumbnailContent': '',
    'postContent': '<div class="text-center"><audio controls><source src="../media/audio/skipping-stones.wav" type="audio/wav">Your browser does not support the audio element.</audio></div>'
  },
  {
    'id': 3,
    'title': 'My World',
    'date': new Date("August 31, 2016 19:11:20"),
    'privacy': 'individual',
    'groupIds': [],
    'tags': ['painting', 'creativity', 'meditation'],
    'location': [],
    'contentType': ['text'],
    'thumbnailType': 'text',
    'thumbnailContent': 'Paint anything you want on the canvas. Create your own world.',
    'postContent': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste amet beatae eveniet perspiciatis, ipsa soluta quo deserunt aut molestiae modi, quas odio a, repellendus asperiores suscipit. Delectus eos facere atque.</p><blockquote class=".quote">Paint anything you want on the canvas. Create your own world.</blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu. Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate. Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante. Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>'
  },
  {
    'id': 4,
    'title': 'When the Dams Opened',
    'date': new Date("July 04, 2017 23:33:54"),
    'privacy': 'group',
    'groupIds': [2, 5],
    'tags': ['water', 'nature', 'dams'],
    'location': [],
    'contentType': ['video(s)'],
    'thumbnailType': 'video',
    'thumbnailContent': '../media/images/video-screenshots/waterfall.PNG',
    'postContent': '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LBL1fdbb5wA" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div>'
  },
  {
    'id': 5,
    'title': 'Doing the Right Thing',
    'date': new Date("February 13, 2017 06:45:50"),
    'privacy': 'public',
    'groupIds': [],
    'tags': ['actions', 'righteousness', 'ethics'],
    'location': [],
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
    'tags': ['ice cream', 'cooking', 'recipe', 'food', 'fruits'],
    'location': [],
    'contentType': ['image(s)', 'text'],
    'thumbnailType': 'image',
    'thumbnailContent': 'https://static.pexels.com/photos/461189/pexels-photo-461189.jpeg',
    'postContent': '<h2 class="modal-body-title text-center">Ingredients</h2><img class="story-image" src="https://static.pexels.com/photos/70862/pexels-photo-70862.jpeg"><img class="story-image" src="https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"><img class="story-image" src="https://static.pexels.com/photos/257840/pexels-photo-257840.jpeg"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eum voluptatem esse magnam voluptatum ab quod vitae commodi hic eos, adipisci numquam, tempore aperiam natus voluptates quae dolor saepe blanditiis.</p><h2 class="modal-body-title text-center">Assembly</h2><img class="story-image" src="https://static.pexels.com/photos/247685/pexels-photo-247685.png"><img class="story-image" src="https://static.pexels.com/photos/461189/pexels-photo-461189.jpeg"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium porro quos, voluptatibus voluptates voluptas eveniet veniam. Nihil libero, pariatur quidem? Ipsa qui dolorum quisquam facere expedita perferendis magnam iusto.</p>'
  },
  {
    'id': 7,
    'title': 'Cooking with Grandma',
    'date': new Date("December 25, 2016 14:13:35"),
    'privacy': 'group',
    'groupIds': [4],
    'tags': ['cooking', 'grandma', 'recipe', 'food'],
    'location': [],
    'contentType': ['audio'],
    'thumbnailType': 'audio',
    'thumbnailContent': '',
    'postContent': '<div class="text-center"><audio controls><source src="../media/audio/cooking-wok.wav" type="audio/wav">Your browser does not support the audio element.</audio></div>'
  },
  {
    'id': 8,
    'title': 'History of Chocolate',
    'date': new Date("March 01, 2016 17:16:14"),
    'privacy': 'group',
    'groupIds': [4],
    'tags': ['chocolate', 'history', 'food'],
    'location': [],
    'contentType': ['text'],
    'thumbnailType': 'text',
    'thumbnailContent': 'If I were a headmaster I would get rid of the history teacher and get a chocolate teacher instead.',
    'postContent': '<h2 class="modal-body-title">19th Century</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu.</p><h3 class="modal-body-title">Bakeries</h3><p>Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><h4 class="modal-body-title">Deliveries</h4><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><blockquote class=".quote">It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.</blockquote><h2 class="modal-body-title">20th Century</h2><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate.</p><h3 class="modal-body-title">The War</h3><p>Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><h4 class="modal-body-title">At Home</h4><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante.</p><h3 class="modal-body-title">Industrialization</h3><p>Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>'
  },
  {
    'id': 9,
    'title': 'Making a Wish',
    'date': new Date("November 18, 2017 12:23:12"),
    'privacy': 'individual',
    'groupIds': [],
    'tags': ['dandelions', 'wishes', 'childhood'],
    'location': [],
    'contentType': ['video(s)', 'text'],
    'thumbnailType': 'video',
    'thumbnailContent': '../media/images/video-screenshots/dandelion.PNG',
    'postContent': '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-vyZqnJO2Mo" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci minus atque nihil accusamus nostrum, iure nulla esse ea, eos fugit incidunt qui, temporibus recusandae soluta tenetur quas. Reiciendis, aperiam, necessitatibus!</p>'
  },
  {
    'id': 10,
    'title': 'Unexpected Snow Day',
    'date': new Date("April 22, 2017 12:45:12"),
    'privacy': 'group',
    'groupIds': [1, 3, 4, 5],
    'tags': ['snow', 'quilts', 'animals', 'nature', 'food'],
    'location': [],
    'contentType': ['video(s)', 'text'],
    'thumbnailType': 'video',
    'thumbnailContent': '../media/images/video-screenshots/snow.PNG',
    'postContent': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, officiis amet libero adipisci facere, recusandae eum alias totam. Hic optio deserunt sed commodi natus ducimus perferendis quas minima architecto maiores.</p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AMkEsmYgDOM" frameborder="0" allow="encrypted-media" allowfullscreen></iframe></div>'
  },
  {
    'id': 11,
    'title': 'Bedtime Stories',
    'date': new Date("June 23, 2016 22:53:48"),
    'privacy': 'public',
    'groupIds': [],
    'tags': ['storytelling', 'reading', 'bedtime', 'childhood'],
    'location': [],
    'contentType': ['image(s)', 'text'],
    'thumbnailType': 'image',
    'thumbnailContent': 'https://static.pexels.com/photos/33196/still-life-teddy-white-read.jpg',
    'postContent': '<img class="story-image" src="https://static.pexels.com/photos/33196/still-life-teddy-white-read.jpg"><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate. Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante. Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p>'
  },
  {
    'id': 12,
    'title': 'Tales by the Camp Fire',
    'date': new Date("May 06, 2017 01:54:23"),
    'privacy': 'group',
    'groupIds': [5],
    'tags': ['storytelling', 'scary', 'nature', 'fire'],
    'location': [],
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
  var htmlStringToAppend = '<article class="row panel flex-row view-post-container" data-id="';
  htmlStringToAppend += postData[postIndex].id;
  htmlStringToAppend += '" data-toggle="modal" data-target="#storyModal">';
  // Thumbnail Div
  // Image
  if (postData[postIndex].thumbnailType == 'image') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 flex-item view-post-image-container">';
    htmlStringToAppend += '<img class="img-responsive" src="';
    htmlStringToAppend += postData[postIndex].thumbnailContent;
    htmlStringToAppend += '">';
    htmlStringToAppend += '</div>';
  }
  // Text
  else if (postData[postIndex].thumbnailType == 'text') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 flex-item view-post-text-container">';
    htmlStringToAppend += '<blockquote class="quote text-center">';
    htmlStringToAppend += '<p>';
    htmlStringToAppend += postData[postIndex].thumbnailContent;
    htmlStringToAppend += '</p>';
    htmlStringToAppend += '</blockquote>';
    htmlStringToAppend += '</div>';
  }
  // Audio
  else if (postData[postIndex].thumbnailType == 'audio') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 flex-item flex-item-align-center view-post-audio-container text-center">';
    htmlStringToAppend += '<i class="sound icon sound-icon-size"></i>';
    htmlStringToAppend += '</div>';
  }
  // Video
  else if (postData[postIndex].thumbnailType == 'video') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 flex-item view-post-video-container">';
    htmlStringToAppend += '<img class="img-responsive story-image translucent-image" src="';
    htmlStringToAppend += postData[postIndex].thumbnailContent;
    htmlStringToAppend += '">';
    htmlStringToAppend += '<div class="thumbnail-overlay flex-item flex-item-align-center">';
    htmlStringToAppend += '<i class="video play icon video-icon-size"></i>';
    htmlStringToAppend += '</div>';
    htmlStringToAppend += '</div>';
  }
  // Post Info Div
  htmlStringToAppend += '<div class="col-xs-12 col-sm-8 flex-item view-post-info-text-container">';
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
  htmlStringToAppend += '.</p>';
  // Tags
  htmlStringToAppend += '<p class="tags">Tags: ';
  for (var i = 0; i < postData[postIndex].tags.length; i++) {
    htmlStringToAppend += '<span class="view-post-tag">';
    htmlStringToAppend += postData[postIndex].tags[i];
    htmlStringToAppend += '</span> ';
  }
  htmlStringToAppend += '</p>';
  // End of post data container
  htmlStringToAppend += '</div>';
  // End of post article
  htmlStringToAppend += '</article>';
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
  // sort the stories according to the sorting parameters given by default
  // Step 2: Sort the search results
  sortPosts(postData);
  // Step 3: Hide all the posts
  hideAllPosts();
  // Step 4: Only show the posts that were narrowed down by the search
  reorderAndDisplayPosts(postData);
  // in case the user wants to sort the original data before making a search
  searchResultsReturned = postData;
}

function adjustSizesOfThumbnailIcons() {
  $(".view-post-video-container").each(function(index) {
    var thumbnailWidth = $(this).width();
    var videoIconFontSize = thumbnailWidth*0.4;
    $(this).css("font-size", videoIconFontSize);
  });

  $(".view-post-audio-container").each(function(index) {
    var thumbnailWidth = $(this).width();
    var soundIconFontSize = thumbnailWidth*0.4;
    $(this).css("font-size", soundIconFontSize);
  });

  // $(".view-post-container").each(function(index) {
  //   if (window.innerWidth >= 768 ) {
  //     // var thumbnailHeight = jQuery(this).find(".view-post-info-text-container").height();
  //     // var soundIconFontSize = thumbnailHeight*0.8;
  //     var thumbnailWidth = jQuery(this).find(".view-post-audio-container").width();
  //     console.log(thumbnailWidth);
  //     // var soundIconFontSize = thumbnailWidth*0.8;
  //   } else {
  //     var thumbnailHeight = jQuery(this).find(".view-post-info-text-container").width();
  //     var soundIconFontSize = thumbnailHeight*0.4;
  //   }
  //   jQuery(this).find(".view-post-audio-container").css("font-size", soundIconFontSize);
  // });
}

function searchPosts(advancedMode) {
  if (advancedMode == false) {
    console.log("Performing basic search...");
    var searchInput = $("#searchBox").val().toUpperCase();
    var resultsCounter = 0; // to store how many results were found
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < postData.length; i++) {
      var thisPostArticle = $('article[data-id="' + postData[i].id + '"]');
      if (postData[i].title.toUpperCase().indexOf(searchInput) > -1 || postData[i].postContent.toUpperCase().indexOf(searchInput) > -1) {
        thisPostArticle.show();
        resultsCounter += 1;
      } else {
        thisPostArticle.hide();
      }
    }
  } else {
    console.log("Performing advanced search...");
  }
  // update the p element showing how many results were found
  var resultsString = resultsCounter;
  if (resultsCounter == 1) {
    resultsString += " post found.";
  } else {
    resultsString += " posts found.";
  }
  $("#number-of-results").text(resultsString);
}

function resetSearchFilters(advancedMode) {
  if (advancedMode == false) {
    console.log("Resetting basic search...");
    // empty contents of search box
    $("#searchBox").val('');
    // show all posts
    // Reset the sorting preferences
    $("#category-dropdown").attr("data-value", 'title');
    $("#category-dropdown").text("title");
    $("#order-dropdown").text("ascending");
    $("#order-dropdown").attr("data-value", 'ascending');
    // Step 2: Sort the search results
    sortPosts(postData);
    // Step 3: Hide all the posts
    hideAllPosts();
    // Step 4: Only show the posts that were narrowed down by the search
    reorderAndDisplayPosts(postData);
  } else {
    console.log("Resetting advanced search...");
  }
  // clear the p element showing how many results were found
  $("#number-of-results").text("");
}

function hideAllPosts() {
  $(".view-post-container").each(function(index) {
    $(this).hide();
  });
}

function showAllPosts() {
  $(".view-post-container").each(function(index) {
    $(this).show();
  });
}

function searchAndSortPosts(advancedMode) {
  // Step 1: Search
  // Search according to the filters given
  // Save the results in a new array
  searchResultsReturned = [];
  if (advancedMode == false) {
    console.log("Performing basic search...");
    var searchInput = $("#searchBox").val().toUpperCase();
    var resultsCounter = 0; // to store how many results were found
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < postData.length; i++) {
      var thisPostArticle = $('article[data-id="' + postData[i].id + '"]');
      if (postData[i].title.toUpperCase().indexOf(searchInput) > -1 || postData[i].postContent.toUpperCase().indexOf(searchInput) > -1) {
        // thisPostArticle.show();
        searchResultsReturned.push(postData[i]);
        resultsCounter += 1;
      } else {
        thisPostArticle.hide();
      }
    }
  } else {
    console.log("Performing advanced search...");
    searchResultsReturned = postData;
  }
  console.log("Search Results:");
  console.log(searchResultsReturned);

  // Step 2: Sort the search results
  // Sort the search results according to the parameters selected.
  sortPosts(searchResultsReturned);
  console.log("Sorted Search Results:");
  console.log(searchResultsReturned);

  // Step 3: Hide all the posts
  hideAllPosts();

  // Step 4: Only show the posts that were narrowed down by the search
  // for (i = 0; i < searchResultsReturned.length; i++) {
  //   var thisPostArticle = $('article[data-id="' + searchResultsReturned[i].id + '"]');
  //   var detachedPost = thisPostArticle.detach();
  //   detachedPost.appendTo($("#your-stories")).show();
  // }
  reorderAndDisplayPosts(searchResultsReturned);


  // Step 5: Write down how many search results were found
  // update the p element showing how many results were found
  var resultsString = resultsCounter;
  if (resultsCounter == 1) {
    resultsString += " post found.";
  } else {
    resultsString += " posts found.";
  }
  $("#number-of-results").text(resultsString);
}

function reorderAndDisplayPosts(arrayOfPostsToSort) {
  for (i = 0; i < arrayOfPostsToSort.length; i++) {
    var thisPostArticle = $('article[data-id="' + arrayOfPostsToSort[i].id + '"]');
    var detachedPost = thisPostArticle.detach();
    detachedPost.appendTo($("#your-stories")).show();
  }
}

function toggleAdvancedSearchMode(advancedMode) {
  // if it's currently in the basic search mode,
  // then change the text of the advanced search mode button
  // and display the advanced search mode filters
  if (advancedMode == false) {
    $("#advanced-search-button").text("Basic Search");
    $("#advanced-search-filters-section").show();
  } else {
    // if it's currently in the basic search mode,
    // then change the text of the advanced search mode button
    // and display the advanced search mode filters
    $("#advanced-search-button").text("Advanced Search");
    $("#advanced-search-filters-section").hide();
  }
  advancedMode = !advancedMode;
  return advancedMode;
}

// Populates the content of the dropdown menu with the info in the
// original group master data list
function populateExistingGroupDropdownMenu(){
  // figure out where to place the content for the dropdown menu
  var $menu =  $('#search-groups-dropdown').find('.scrolling');
  // populate the content of the dropdown menu with the info in the
  // original group master data list
  $.each(originalGroupMasterData, function (i, item) {
    $menu.append($('<div>', {
      "data-value": item.id,
      text : item.groupName,
      class: 'item'
    }));
  });
}

function resizeSearchBarWidth() {
  var searchBarWidth;
  if (window.innerWidth > 500) {
    searchBarWidth = window.innerWidth - 100 - 90 - $("#submit-filters-button").width() - $("#reset-filters-button").width() - $("#advanced-search-button").width();
    $("#searchBox").css("width", searchBarWidth);
  } else {
    $("#searchBox").css("width", "100%");
  }
  $("#searchBox").show();
}

// Sort posts according to parameters selected in the dropdown
function sortPosts(arrayOfPostsToSort) {
  var sortCategory = $("#category-dropdown").attr("data-value");
  var sortOrder = $("#order-dropdown").attr("data-value");
  console.log("category: " + sortCategory);
  console.log("order: " + sortOrder);
  if (sortCategory == "title") {
    if (sortOrder == "ascending") {
      console.log('sorting by title in ascending order');
      arrayOfPostsToSort.sort(function(a, b) {
        var titleA = a.title.toUpperCase(); // ignore upper and lowercase
        var titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    } else {
      console.log('sorting by title in descending order');
      arrayOfPostsToSort.sort(function(a, b) {
        var titleA = a.title.toUpperCase(); // ignore upper and lowercase
        var titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA > titleB) {
          return -1;
        }
        if (titleA < titleB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }
  } else {
    if (sortOrder == "ascending") {
      console.log('sorting by date in ascending order');
      arrayOfPostsToSort.sort(function (a, b) {
        return a.date - b.date;
      });
    } else {
      console.log('sorting by date in descending order');
      arrayOfPostsToSort.sort(function (a, b) {
        return b.date - a.date;
      });
    }
  }
}

// --- When the document is fully loaded --- //
$(document).ready(function(){
  // Set search bar size to correct width
  resizeSearchBarWidth();

  // Initialize the dropdown menu
  $('.ui.dropdown').dropdown();

  // Populate the dropdown menu
  populateExistingGroupDropdownMenu();

  // Re-initialize the dropdown, but with particular settings
  $('.ui.dropdown').dropdown({
    // if an item in the dropdown was selected, populate and display the rest
    // of the group edit form accordingly
    onChange: function (value, text, $selectedItem) {
      console.log(value);
      // populateFormUponGroupSelection(value);
    },
    forceSelection: false,
    selectOnKeydown: false,
    showOnFocus: false,
    // on: "hover",
    fullTextSearch: true
  });

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

  // When the user clicks the "Advanced Search" button,
  // toggle advanced search mode (hide/show the advanced filters and change button text)
  $("#advanced-search-button").on("click", function() {
    advancedSearchMode = toggleAdvancedSearchMode(advancedSearchMode);
  });

  // When the user clicks the "Go" button,
  // change which posts are visible and hidden based on search parameters
  $("#submit-filters-button").on('click', function() {
    // searchPosts(advancedSearchMode);
    searchAndSortPosts(advancedSearchMode);
  });

  // When the user presses the "ENTER" key,
  // change which posts are visible and hidden based on search parameters
  $('#searchBox').on('keypress', function (e) {
     if(e.which === 13){ // if the key pressed was the enter key
        // Disable textbox to prevent multiple submit
        $(this).attr("disabled", "disabled");
        searchAndSortPosts(advancedSearchMode);
        //Enable the textbox again.
        $(this).removeAttr("disabled");
     }
   });

  // When the user clicks the "Reset" button,
  // reset all the search filters
  // and show all the posts.
  $("#reset-filters-button").on('click', function() {
    resetSearchFilters(advancedSearchMode);
  });

  // When the user clicks a sorting category option,
  // then change the text in the dropdown button according to the option chosen
  // and sort the posts accordingly
  $(".sorting-category").on("click", function() {
    $("#category-dropdown").attr("data-value", $(this).attr("data-value"));
    $("#category-dropdown").text($(this).attr("data-value"));
    // Step 2: Sort the search results
    sortPosts(searchResultsReturned);
    // Step 3: Hide all the posts
    hideAllPosts();
    // Step 4: Only show the posts that were narrowed down by the search
    reorderAndDisplayPosts(searchResultsReturned);
  });

  // When the user clicks a sorting order option,
  // then change the text in the dropdown button according to the option chosen
  // and sort the posts accordingly
  $(".sorting-order").on("click", function() {
    $("#order-dropdown").attr("data-value", $(this).attr("data-value"));
    $("#order-dropdown").text($(this).attr("data-value"));
    // Step 2: Sort the search results
    sortPosts(searchResultsReturned);
    // Step 3: Hide all the posts
    hideAllPosts();
    // Step 4: Only show the posts that were narrowed down by the search
    reorderAndDisplayPosts(searchResultsReturned);
  });

  // When the user clicks on the option,
  // then change the text in the dropdown button according to the option chosen
  // and sort the posts accordingly
  $(".search-mode-option").on("click", function() {
    $("#search-mode-dropdown").attr("data-value", $(this).attr("data-value"));
    $("#search-mode-dropdown").text($(this).attr("data-value"));
  });
});

// --- When the window is resized --- //
$(window).on('resize', function(event){
  // Change the font-size of the sound icon in the story panel
  // according to the size of the story panel
  adjustSizesOfThumbnailIcons();
  // Set search bar size to correct width
  resizeSearchBarWidth();
});