// ------ GLOBAL VARIABLES ------ //
var advancedSearchMode = true; // toggles advanced search mode
var searchResultsReturned = []; // contains which posts result from the basic/advanced search
var storiesSectionContainer = $("#your-stories"); // section in which the posts belong
var whenFilterAlreadyPresent = false; // to avoid adding the when filter multiple times
var whereFilterAlreadyPresent = false; // to avoid adding the where filter multiple times

// contains which advanced filters are currently selected
var filtersAppliedData = {
  'where': [],
  'when': [],
  'privacy': [],
  'groups': [],
  'tags': [],
  'media': []
};

// contains all the possible options for each advanced filter (excluding where and when)
var possibleFiltersData = {
  'privacy': ['private', 'group', 'public'],
  'groups': ['Ice Cream in the Tropics', 'Grenouilles dans les Déserts', 'Edredones',
    'Cooking with Grandparents', 'Playing with Wild Animals'],
  'tags': ['boat', 'water', 'nature', 'origami', 'paper', 'stones', 'painting', 'creativity',
    'meditation', 'dams', 'actions', 'righteousness', 'ethics', 'ice cream', 'cooking',
    'recipe', 'food', 'fruits', 'grandma', 'chocolate', 'history', 'dandelions', 'wishes',
    'childhood', 'snow', 'quilts', 'animals', 'storytelling', 'reading', 'bedtime', 'scary',
    'fire'],
  'media': ['video(s)', 'image(s)', 'audio', 'text']
};

// contains the state of the select all button for each advanced filter dropdown
var allItemsSelectedStateForEachFilterData = {
  'privacy': false,
  'groups': false,
  'tags': false,
  'media': false
};

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

// contains list of information regarding each post
var postData = [
  {
    'id': 1,
    'title': 'Row, Row, Row Your Boat',
    'date': new Date("September 29, 2016 21:33:43"),
    'privacy': 'public',
    'groupIds': [],
    'tags': ['boat', 'water', 'nature', 'origami', 'paper'],
    'location': [24.466516, 54.339915],
    'media': ['image(s)'],
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
    'location': [24.349534, 54.4999],
    'media': ['audio'],
    'thumbnailType': 'audio',
    'thumbnailContent': '',
    'postContent': '<div class="text-center"><audio controls><source src="../media/audio/skipping-stones.wav" type="audio/wav">Your browser does not support the audio element.</audio></div>'
  },
  {
    'id': 3,
    'title': 'My World',
    'date': new Date("August 31, 2016 19:11:20"),
    'privacy': 'private',
    'groupIds': [],
    'tags': ['painting', 'creativity', 'meditation'],
    'location': [49.162588, -123.107349],
    'media': ['text'],
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
    'location': [24.530292, 54.445158],
    'media': ['video(s)'],
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
    'location': [32.349204, -86.287787],
    'media': ['text'],
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
    'location': [24.497493, 54.387986],
    'media': ['image(s)', 'text'],
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
    'location': [24.434691, 54.412562],
    'media': ['audio'],
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
    'location': [25.204849, 55.270783],
    'media': ['text'],
    'thumbnailType': 'text',
    'thumbnailContent': 'If I were a headmaster I would get rid of the history teacher and get a chocolate teacher instead.',
    'postContent': '<h2 class="modal-body-title">19th Century</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sem sed quam sollicitudin ultricies. Nullam ultrices rhoncus aliquam. Quisque commodo leo libero, sit amet lacinia neque euismod eu.</p><h3 class="modal-body-title">Bakeries</h3><p>Vestibulum malesuada mi in tellus pulvinar tempor non at felis. Curabitur quam ante, mattis ut vehicula at, auctor quis justo. Sed vel turpis nibh. Sed posuere elementum nisi nec bibendum. Pellentesque vel turpis posuere, eleifend risus id, mollis nunc. Cras gravida cursus nisi, a rhoncus erat volutpat nec. Nunc laoreet mauris eget mauris scelerisque, vitae porta velit congue. Sed imperdiet mi id est mattis lobortis. Nullam posuere arcu vitae lacinia pretium. Curabitur vehicula eleifend leo, nec scelerisque quam dignissim et. Sed justo lorem, scelerisque nec mauris ultricies, placerat vestibulum magna.</p><h4 class="modal-body-title">Deliveries</h4><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p><blockquote class=".quote">It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.</blockquote><h2 class="modal-body-title">20th Century</h2><p>Quisque faucibus ornare odio vitae porta. Aliquam volutpat orci sed vehicula auctor. Quisque fermentum sit amet nunc non vulputate.</p><h3 class="modal-body-title">The War</h3><p>Morbi malesuada semper nisl, ac maximus est commodo vel. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit diam at eleifend hendrerit. Pellentesque malesuada dignissim metus et accumsan.</p><h4 class="modal-body-title">At Home</h4><p>Curabitur gravida viverra mauris, id sollicitudin felis dignissim congue. Maecenas commodo, ante ac sagittis eleifend, quam tellus placerat odio, in vehicula sem est eget metus. Donec est felis, hendrerit quis arcu non, venenatis condimentum ante.</p><h3 class="modal-body-title">Industrialization</h3><p>Nam sit amet ante vehicula est tincidunt tristique sed quis purus. Sed iaculis leo quam, id ullamcorper libero imperdiet ac. Pellentesque sed eros augue. Duis in pellentesque sapien. Suspendisse placerat erat sit amet justo volutpat dapibus. Integer quis volutpat urna, id fermentum ex. Sed mattis metus placerat dolor varius viverra. Fusce lacus ante, posuere laoreet ligula in, gravida accumsan erat. Cras dui leo, ultricies vitae feugiat nec, luctus in elit.</p><p>In hac habitasse platea dictumst. Nam a est ligula. Vestibulum dignissim a enim non pretium. Quisque ultrices nulla ante, eget accumsan quam porta eget. Curabitur non nisl eget felis tincidunt congue. Proin ac tempor lacus. Pellentesque sit amet est est. Etiam facilisis quis ante ac vestibulum. Duis a nisi et ante hendrerit congue sit amet et dui. Donec ultrices sem id augue posuere elementum. Quisque vitae quam quis urna porttitor egestas eget vitae ligula.</p>'
  },
  {
    'id': 9,
    'title': 'Making a Wish',
    'date': new Date("November 18, 2017 12:23:12"),
    'privacy': 'private',
    'groupIds': [],
    'tags': ['dandelions', 'wishes', 'childhood'],
    'location': [24.495924, 54.383226],
    'media': ['video(s)', 'text'],
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
    'location': [24.485155, 54.607565],
    'media': ['video(s)', 'text'],
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
    'location': [24.470133, 54.372758],
    'media': ['image(s)', 'text'],
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
    'location': [37.711789, -122.162644],
    'media': ['audio', 'text'],
    'thumbnailType': 'audio',
    'thumbnailContent': '',
    'postContent': '<div class="text-center"><audio controls><source src="../media/audio/fire.wav" type="audio/wav">Your browser does not support the audio element.</audio></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste amet beatae eveniet perspiciatis, ipsa soluta quo deserunt aut molestiae modi, quas odio a, repellendus asperiores suscipit. Delectus eos facere atque.</p><p>Donec in aliquam massa. Sed tempus mi nec est interdum venenatis. Pellentesque et risus a odio auctor pulvinar a vel ipsum. Nulla tortor purus, mollis nec dapibus et, bibendum ac augue. Curabitur vitae lacus bibendum, sagittis purus non, condimentum dui. Fusce blandit dolor gravida quam malesuada, nec rhoncus odio egestas. Nunc euismod, nunc a tincidunt pretium, ex eros suscipit magna, in porta turpis turpis vitae mi. Suspendisse rutrum enim at diam lobortis, nec scelerisque odio fringilla.</p>'
  }
];

// ------ LIST RELATED HELPER FUNCTIONS ------ //
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

// Looks up a specific key and corresponding value in a list.
// Returns the index of the input value in the list.
function findByKeyAndValueToReturnIndex(source, key, value) {
  for (var i = 0; i < source.length; i++) {
    // console.log(i+" "+source[i][key])
    if (source[i][key] == value) {
      return i;
    }
  }
  throw "Couldn't find object with value: " + value;
}

// Looks up a specific value in a list.
// Returns the index of the input value in the list.
function findByValueReturnIndex(source, value) {
  for (var i = 0; i < source.length; i++) {
    if (source[i] == value) {
      return i;
    }
  }
  throw "Couldn't find object with value: " + value;
}

// ------ SETUP POSTS RELATED FUNCTIONS ------ //
// Given the ID of the post and the index of the group that this post belongs to,
// return the name of the group from the originalGroupMasterData list
function returnGroupNameString(postID, postGroupIndex) {
  // get the information about the desired group
  var individualGroupData = findByIdReturnObject(originalGroupMasterData, postData[postID].groupIds[postGroupIndex]);
  var htmlString = '<u>';
  // get this group's group name
  htmlString += individualGroupData.groupName;
  htmlString += '</u>';
  return htmlString;
}

// Given the post index, return an html string which contains the html for how to display
// this post on the page by looking ip relevant information from the postData list
function createHTMLStringForOnePost(postIndex) {
  // outer article container
  var htmlStringToAppend = '<article class="row panel flex-row view-post-container" data-id="';
  htmlStringToAppend += postData[postIndex].id; // data-id of this post = post.id
  htmlStringToAppend += '" data-toggle="modal" data-target="#storyModal">';
  // Thumbnail Div
  // Image
  if (postData[postIndex].thumbnailType == 'image') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 flex-item view-post-image-container">';
    htmlStringToAppend += '<img class="img-responsive" src="';
    // if this post has an image thumbnail, then the source is the url for the image
    htmlStringToAppend += postData[postIndex].thumbnailContent;
    htmlStringToAppend += '">';
    htmlStringToAppend += '</div>';
  }
  // Text
  else if (postData[postIndex].thumbnailType == 'text') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 flex-item view-post-text-container">';
    htmlStringToAppend += '<blockquote class="quote text-center">';
    htmlStringToAppend += '<p>';
    // if this post has a text thumbnail, then the source is the quote for the text
    htmlStringToAppend += postData[postIndex].thumbnailContent;
    htmlStringToAppend += '</p>';
    htmlStringToAppend += '</blockquote>';
    htmlStringToAppend += '</div>';
  }
  // Audio
  else if (postData[postIndex].thumbnailType == 'audio') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 flex-item flex-item-align-center view-post-audio-container text-center">';
    // if this post has an audio thumbnail, then just show a sound icon
    htmlStringToAppend += '<i class="sound icon sound-icon-size"></i>';
    htmlStringToAppend += '</div>';
  }
  // Video
  else if (postData[postIndex].thumbnailType == 'video') {
    htmlStringToAppend += '<div class="col-xs-12 col-sm-4 flex-item view-post-video-container">';
    htmlStringToAppend += '<img class="img-responsive story-image translucent-image" src="';
    // if this post has a video thumbnail, then the source is the url for the video screenshot
    htmlStringToAppend += postData[postIndex].thumbnailContent;
    htmlStringToAppend += '">';
    htmlStringToAppend += '<div class="thumbnail-overlay flex-item flex-item-align-center">';
    // and overlay a video player icon on top of this screenshot
    htmlStringToAppend += '<i class="video play icon video-icon-size"></i>';
    htmlStringToAppend += '</div>';
    htmlStringToAppend += '</div>';
  }
  // Post Info Div
  // Outer post info div container
  htmlStringToAppend += '<div class="col-xs-12 col-sm-8 flex-item view-post-info-text-container">';
  // Title
  htmlStringToAppend += '<h4><b>';
  htmlStringToAppend += postData[postIndex].title; // title of the post
  htmlStringToAppend += '</b></h4>';
  // Date
  htmlStringToAppend += '<p class="date"><i>';
  var dateString = postData[postIndex].date.toDateString(); // date of the post, simplified style
  htmlStringToAppend += dateString;
  htmlStringToAppend += '</i></p>';
  // Privacy Setting
  htmlStringToAppend += '<p class="privacy">';
  // Private post
  if (postData[postIndex].privacy == 'private') {
    htmlStringToAppend += 'Only you can see this post.';
  }
  // Public post
  else if (postData[postIndex].privacy == 'public') {
    htmlStringToAppend += 'Anyone can see this post.';
  }
  // Group post
  else if (postData[postIndex].privacy == 'group') {
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
  // Media types
  htmlStringToAppend += '<p class="content-type">This post contains: ';
  htmlStringToAppend += postData[postIndex].media[0];
  if (postData[postIndex].media.length == 2 ) {
    htmlStringToAppend += " and ";
    htmlStringToAppend += postData[postIndex].media[1];
  } else {
    for (var i = 1; i < postData[postIndex].media.length; i++) {
      if (i < postData[postIndex].media.length - 1) {
        htmlStringToAppend += ', ';
        htmlStringToAppend += postData[postIndex].media[i];
      } else {
        htmlStringToAppend += ', and ';
        htmlStringToAppend += postData[postIndex].media[i];
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

// Return the html string for how to display all the posts in the postData list
function createHTMLStringForAllPosts() {
  var htmlString = "";
  // iterate through the entire length of post data
  for (var i = 0; i < postData.length; i++) {
    htmlString += createHTMLStringForOnePost(i);
  }
  return htmlString;
}

// Add the relevant html string to the correct section of the DOM on the view posts page
function addPostHTMLStringToDesiredSection(sectionContainer) {
  // Step 1: Generate the html and add this to the section that the stories belong to
  var completeString = createHTMLStringForAllPosts();
  sectionContainer.append(completeString);
  // Step 2: Sort the search results
  // sort the stories according to the sorting parameters given by default
  sortPosts(postData);
  // Step 3: Hide all the posts
  hideAllPosts();
  // Step 4: Only show the posts that were narrowed down by the search (in this case, everything)
  reorderAndDisplayPosts(postData, storiesSectionContainer);
  // in case the user wants to sort the original data before making a search
  searchResultsReturned = postData;
}

// Adjust the sizes of the sound and video thumbnail icons based on the thumbnail's width
function adjustSizesOfThumbnailIcons() {
  // adjust the size of the video thumbnail icon to 40% of the thumbnail's width
  $(".view-post-video-container").each(function(index) {
    var thumbnailWidth = $(this).width();
    var videoIconFontSize = thumbnailWidth*0.4;
    $(this).css("font-size", videoIconFontSize);
  });

  // adjust the size of the sound thumbnail icon to 40% of the thumbnail's width
  $(".view-post-audio-container").each(function(index) {
    var thumbnailWidth = $(this).width();
    var soundIconFontSize = thumbnailWidth*0.4;
    $(this).css("font-size", soundIconFontSize);
  });
}

// ------ BASIC SEARCH RELATED FUNCTIONS ------ //
// Change the size of the basic search's search input box according to the width of the page
function resizeSearchBarWidth() {
  var searchBarWidth;
  // if the page width is large,
  // then make sure all the buttons can fit next to the search box input,
  // which should take up the remaining space
  if (window.innerWidth > 500) {
    searchBarWidth = window.innerWidth - 100 - 90 - $("#submit-filters-button").width() - $("#reset-filters-button").width() - $("#advanced-search-button").width();
    $("#search-box").css("width", searchBarWidth);
  }
  // otherwise, if the page width is small,
  // then let the search box take up the whole width of the page
  // and let the buttons flow together onto the next line
  else {
    $("#search-box").css("width", "100%");
  }
  $("#search-box").show();
}

// Change the size the advanced filter selection div based on the height of the dropdown
// button and dropdown menu
function resizeAdvancedSearchOptionsDivs() {
  // find all the advanced filter selection option divs
  var listOfAdvancedSelectionDivs = $(".select-filter-options-section");
  // iterate through all the advanced filter selection option divs
  for (var i=0; i<listOfAdvancedSelectionDivs.length; i++) {
    var filterParameter = $(listOfAdvancedSelectionDivs[i]).attr("data-filter-parameter");
    if (filterParameter == "privacy" || filterParameter == "groups" || filterParameter == "tags" || filterParameter == "media") {
      var dropdownButton = $(listOfAdvancedSelectionDivs[i]).find(".dropdown-toggle");
      var dropdownButtonHeight = dropdownButton.outerHeight(false);
      var divHeight = 0.2*window.innerHeight + 2*2 + 2*5 + dropdownButtonHeight + 3;
      // 0.2*window.innerHeight: dropdown menu is 20vh in height
      // 2*2: top and bottom border width
      // 2*5: top and bottom padding
      // 3: extra spacing since there's an unknown gap between the dropdown button and dropdown menu
    }
    $(listOfAdvancedSelectionDivs[i]).css("height", divHeight);
  }
}

// Reset the contents of the basic main search input box,
// delete all the filters chosen from the advanced search,
// and display all the posts based on the default sorting options.
// advancedMode = the boolean that remembers whether it is set to advanced search mode
// or basic search mode
function resetSearchFilters(advancedMode) {
  // if the search mode was set to advanced search mode,
  // then delete all the filters chosen from the filtersAppliedData list
  // and from the html in the filters chosen section
  // and also unselect all options from the advanced filter dropdown lists
  if (advancedMode == true) {
    console.log("Resetting advanced search...");
    // clear the filters chosen section in the html
    deleteAllHTMLFiltersFromFiltersChosenSection();

    // deselect all options and reset all advanced search filter dropdowns
    // list of all options and select all options from every advanced filter dropdown
    var listItems = $(".advanced-filter-dropdown").find("a");
    // iterate through the list of options and deselect them
    for (var i = 0; i < listItems.length; i++) {
      var $input = $(listItems[i]).find('input'); // the input checkbox of the selected option
      // set the selected option's checkbox as deselected mode
      $input.prop('checked', false);
    }
    // change the text in the select all span to deselect all
    $(".advanced-filter-dropdown").find('.select-all-text').text('Select All');

    // change the text in the dropdown menu button to the default
    // list of all advanced filter dropdown buttons
    var dropdownButtonListItems = $(".advanced-filter-dropdown").find(".dropdown-button-text");
    // iterate through the list of all advanced filter dropdown buttons
    for (var i = 0; i < dropdownButtonListItems.length; i++) {
      // find the relevant filter parameter for this dropdown button
      var parameter = $(dropdownButtonListItems[i]).parent().parent().attr("data-filter-parameter");
      // reset the text for this button to its default, unselected state
      $(dropdownButtonListItems[i]).text("Select "+parameter+" filter(s).");
      // reset the select all mode state
      allItemsSelectedStateForEachFilterData[parameter] = false;
    }

    // resize the height of the advanced filter selection sections
    resizeAdvancedSearchOptionsDivs();

    // delete all data from the filters chosen data object
    deleteAllFiltersFromFilterData(filtersAppliedData);

    // reset the when filter selection section
    // reset the whenFilterAlreadyPresent boolean to false
    whenFilterAlreadyPresent = false;
    // make the inputs of the date time pickers empty
    $("#datetimepicker-start").data("DateTimePicker").date(null);
    $("#datetimepicker-end").data("DateTimePicker").date(null);

    // reset the where filter selection section
    // reset the whereFilterAlreadyPresent boolean to false
    whereFilterAlreadyPresent = false;
    // empty the contents of the where inputs
    $("#lattitude-input").val("");
    $("#longitude-input").val("");
    $("#radius-input").val("");

    // reset search mode preference
    $("#search-mode-dropdown").attr("data-value", 'all');
    $("#search-mode-dropdown").text("all");
  }

  console.log("Resetting basic search...");
  // empty contents of search box
  $("#search-box").val('');

  // show all posts
  // Reset the sorting preferences to the default options
  $("#category-dropdown").attr("data-value", 'title');
  $("#category-dropdown").text("title");
  $("#order-dropdown").text("ascending");
  $("#order-dropdown").attr("data-value", 'ascending');
  // reset searchResultsReturned to containing all posts in the case the user sorts the
  // posts before performing another search
  searchResultsReturned = postData;
  // Sort the search results
  sortPosts(searchResultsReturned);
  // Hide all the posts
  hideAllPosts();
  // Only show the posts that were narrowed down by the search (in this case, everything)
  reorderAndDisplayPosts(searchResultsReturned, storiesSectionContainer);
  // clear the p element showing how many results were found (in this case, nothing)
  $("#number-of-results").text("");
}

// Hide all the posts on the page.
function hideAllPosts() {
  $(".view-post-container").each(function(index) {
    $(this).hide();
  });
}

// Show all the posts on the page.
function showAllPosts() {
  $(".view-post-container").each(function(index) {
    $(this).show();
  });
}

// Search all the posts and sort the results based on the inputs provided.
function searchAndSortPosts(advancedMode) {
  // Part A: Search
  // Search according to the filters given
  // Save the results in a new array
  searchResultsReturned = [];
  // Step 1: Perform the basic search,
  // search whether the text in the search box matches the text in any of the post
  // titles and post contents (note: this includes looking at the html in post content...)
  console.log("Performing basic search...");
  var searchInput = $("#search-box").val().toUpperCase();
  // Loop through all list items, and add the posts with the desired text input
  // into the searchResultsReturned array (search the post title and post content)
  // Note: the post content contains html as well, so this info will be included in
  // the search results
  for (i = 0; i < postData.length; i++) {
    var thisPostArticle = $('article[data-id="' + postData[i].id + '"]');
    if (postData[i].title.toUpperCase().indexOf(searchInput) > -1 || postData[i].postContent.toUpperCase().indexOf(searchInput) > -1) {
      searchResultsReturned.push(postData[i]);
    }
  }

  // Step 2: perform the advanced search by taking into consideration the filters
  // chosen from the advanced filter menu tabs
  if (advancedMode == true) {
    console.log("Performing advanced search...");
    // Step 2a: If the search mode is include "all" filters chosen,
    // then use a subtractive process to refine the search results.
    if ($("#search-mode-dropdown").attr("data-value") == "all") {
      console.log("ALL SEARCH MODE");
      // find the list of chosen filters
      var filterListItems = $("#filters-chosen-section").find('.filter-chosen');
      // iterate through the list of chosen filters
      for (var i=0; i<filterListItems.length; i++) {
        // make a temporary list of search results to store the results of the next
        // part of the search
        var advancedSearchResultsReturned = [];
        // find the parameter and the filter info
        var filterParameter = $(filterListItems[i]).attr("data-filter-parameter");
        var filterText = $(filterListItems[i]).attr("data-filter-value").toLowerCase();
        // Step 2ai: Refine the search according to the privacy filter chosen
        // The "privacy" key for each post only has one value.
        // If the filter is from the privacy filter dropdown section,
        // then iterate through all the posts in the current searchResultsReturned list
        // and check if the filter's text matches with the privacy key's value for
        // each post in the list.
        // If the post has the correct privacy setting, then add it to the temporary
        // advancedSearchResultsReturned list. At the end of looking through all
        // of the searchResultsReturned list's posts, empty this list and replace it
        // with the narrowed down results in the advancedSearchResultsReturned post.
        if (filterParameter == "privacy") {
          // iterate through each post in the current search results
          // to check if each post has the desired privacy filter
          for (var j=0; j<searchResultsReturned.length; j++) {
            // if the post does have the desired filter,
            // then add it to the advanced search results
            console.log("searchResultsReturned[j][filterParameter]");
            console.log(searchResultsReturned[j][filterParameter]);
            if (searchResultsReturned[j][filterParameter].toLowerCase().indexOf(filterText) > -1) {
              // add this post to the returned advanced search results list
              console.log(searchResultsReturned[j]);
              advancedSearchResultsReturned.push(searchResultsReturned[j]);
            }
          }
          // update searchResultsReturned list according to the findings of the search refinement
          // with this particular filter
          // searchResultsReturned = deepCopyArray(advancedSearchResultsReturned);
          searchResultsReturned = [];
          for (var n=0; n<advancedSearchResultsReturned.length; n++) {
            searchResultsReturned.push(advancedSearchResultsReturned[n]);
          }
        }

        // Step 2aii: Refine the search according to the group filter chosen
        // Using a similar method as above with narrowing down the results, except
        // checking if the group filters match is a bit more complicated.
        // Each post has a key called "groupIds" which contains a list of the ids
        // of all the groups that this post is published under.
        // The filter text, on the other hand, only contains the name of the group,
        // not its id.
        // So first, we need to figure out the group id of the filter group text.
        // Then, we need to figured out if the post is part of any groups.
        // If yes, we need to figure out the ids of the groups this post is part of.
        // Then, we need to iterate through all of this post's group ids, and check
        // If any of them match with the filter's group id,
        // then we add this post to the advancedSearchResultsReturned list
        // which will later replace the searchResultsReturned list after iterating
        // through all the posts.
        else if (filterParameter == "groups") {
          // the filter text should remain case sensitive
          filterText = $(filterListItems[i]).attr("data-filter-value");
          // change filter parameter to match the group related key in postData
          var filterParameter = "groupIds";
          // iterate through each post in the current search results
          // to check if it has the desired group filter
          for (var j=0; j<searchResultsReturned.length; j++) {
            // the list of group ids for this post in the current search results
            var groupIdsList = searchResultsReturned[j][filterParameter];
            // continue searching if this post is actually part of one or more groups
            if (groupIdsList.length >= 1) {
              // find out the index and group id for this group filter
              var filterGroupIndex = findByKeyAndValueToReturnIndex(originalGroupMasterData, 'groupName', filterText);
              var filterGroupId = originalGroupMasterData[filterGroupIndex].id;
              // iterate through each group id in the list of group ids that this
              // post belongs to
              for (var m=0; m<groupIdsList.length; m++) {
                if (groupIdsList[m] == filterGroupId) {
                  // add this post to the returned advanced search results list
                  advancedSearchResultsReturned.push(searchResultsReturned[j]);
                  break; // there can't be more than one match
                }
              }
            }
          }
          // update searchResultsReturned list according to the refinement above in
          // the advancedSearchResultsReturned list
          // empty the contents of searchResultsReturned first
          searchResultsReturned = [];
          // then push everything from advancedSearchResultsReturned into
          // searchResultsReturned
          for (var n=0; n<advancedSearchResultsReturned.length; n++) {
            searchResultsReturned.push(advancedSearchResultsReturned[n]);
          }
        } // end of if statement for searching for a privacy filter

        // Step 2aiii: Refine the search according to the tag/media filter chosen
        // Using a similar method as above with narrowing down the results, except
        // checking if the tag/media filters match is a bit more complicated.
        // Each post has a list of tags and a list of media types instead of just
        // one value like for the privacy filter.
        // Thus, for each post, we need to look through the list of tag/media types,
        // and iterate through this list, to see if any of these match the text
        // of the tag/media filter selected.
        // if there is a match, then we add this post to the advancedSearchResultsReturned
        // list which will later replace the searchResultsReturned list after iterating
        // through all the posts.
        else if (filterParameter == "tags" || filterParameter == "media") {
          var filterText = $(filterListItems[i]).attr("data-filter-value").toLowerCase();
          // iterate through each post in the current search results
          // to check if it has the desired tag/media type
          for (var j=0; j<searchResultsReturned.length; j++) {
            // the list of tags of media types for this post
            var thisPostTagsOrMediaList = searchResultsReturned[j][filterParameter];
            // If this post actually has a tag or media,
            // then iterate through each tag/media type that this post has
            // and check if it matches the input filter's tag/media type.
            // If there is a match, then add it to the advancedSearchResultsReturned list
            if (thisPostTagsOrMediaList.length >= 1) {
              // iterate through each tag/media type that this post has
              for (var m=0; m<thisPostTagsOrMediaList.length; m++) {
                // check if the filter text matchs the current tag/media type
                // belonging to this post
                if (thisPostTagsOrMediaList[m].toLowerCase().indexOf(filterText) > -1) {
                  // add this post to the returned advancedSearchResultsReturned list
                  advancedSearchResultsReturned.push(searchResultsReturned[j]);
                  break;
                }
              }
            }
          }
          // update searchResultsReturned list according to the refinement above in
          // the advancedSearchResultsReturned list
          // empty the contents of searchResultsReturned first
          searchResultsReturned = [];
          // then push everything from advancedSearchResultsReturned into
          // searchResultsReturned
          for (var n=0; n<advancedSearchResultsReturned.length; n++) {
            searchResultsReturned.push(advancedSearchResultsReturned[n]);
          }
        } // end of if statement for searching for a tag or media filter

        // Step 2aiv: Refine the search according to the when filter chosen
        // Using a similar method as above with narrowing down the results, except
        // this time we need to check if each post's date in the searchResultsReturned
        // list is within the desired date range.
        // If so, then we add this post to the advancedSearchResultsReturned list
        // which will later replace the searchResultsReturned list after iterating
        // through all the posts.
        else if (filterParameter == "when") {
          // obtain the start and end dates of the desired date range
          var dateStart = filtersAppliedData["when"][0];
          var dateEnd = filtersAppliedData["when"][1];
          // iterate through each post in the current search results
          // to check if each post's date is within the desired range
          for (var j=0; j<searchResultsReturned.length; j++) {
            // deterime the date of this post
            var thisPostDate = searchResultsReturned[j]["date"];
            // check if this post after the start date and before the end date
            if (thisPostDate >= dateStart && thisPostDate <= dateEnd) {
              // add it to the advanced search results
              advancedSearchResultsReturned.push(searchResultsReturned[j]);
            }
          }
          // update searchResultsReturned list according to the findings of the search
          // refinement with this particular filter
          searchResultsReturned = [];
          for (var n=0; n<advancedSearchResultsReturned.length; n++) {
            searchResultsReturned.push(advancedSearchResultsReturned[n]);
          }
        } // end of if statement for searching the when filter

        // Step 2av: Refine the search according to the where filter chosen
        // Using a similar method as above with narrowing down the results, except
        // this time we need to check if each post's location in the
        // searchResultsReturned list is within the desired radius away from the
        // desired location coordinates provided by the filter
        // If so, then we add this post to the advancedSearchResultsReturned list
        // which will later replace the searchResultsReturned list after iterating
        // through all the posts.
        else if (filterParameter == "where") {
          // obtain the desired lattitude, longitude, and radius
          var filterLattitude = filtersAppliedData["where"][0];
          var filterLongitude = filtersAppliedData["where"][1];
          var filterRadius = filtersAppliedData["where"][2];
          // iterate through each post in the current search results
          // to check if each post's location is within the desired range
          for (var j=0; j<searchResultsReturned.length; j++) {
            // deterime the location of this post
            var thisPostLattitude = searchResultsReturned[j]["location"][0];
            var thisPostLongitude = searchResultsReturned[j]["location"][1];
            // determine the distance between this post's location and the location
            // given by the user
            var distanceDifference = getDistanceFromLatLonInKm(filterLattitude,filterLongitude,thisPostLattitude,thisPostLongitude);
            // check if this post after the start date and before the end date
            if (distanceDifference <= filterRadius) {
              // add it to the advanced search results
              advancedSearchResultsReturned.push(searchResultsReturned[j]);
            }
          }
          // update searchResultsReturned list according to the findings of the search
          // refinement with this particular filter
          searchResultsReturned = [];
          for (var n=0; n<advancedSearchResultsReturned.length; n++) {
            searchResultsReturned.push(advancedSearchResultsReturned[n]);
          }
        } // end of if statement for searching the where filter
      }
    }

    // Step 2b: Otherwise, if the search mode is include "any" filter chosen,
    // then use an additive process to refine the search results.
    else {
      // if there was no text in the search box from the basic search,
      // then make sure that the search results list is still empty
      if (searchInput == "") {
        searchResultsReturned = [];
      }
      console.log("ANY SEARCH MODE");
      // find the list of chosen filters
      var filterListItems = $("#filters-chosen-section").find('.filter-chosen');
      // iterate through the list of chosen filters
      for (var i=0; i<filterListItems.length; i++) {
        // find the parameter and the filter info
        var filterParameter = $(filterListItems[i]).attr("data-filter-parameter");
        var filterText = $(filterListItems[i]).attr("data-filter-value").toLowerCase();

        // Step 2bi: Refine the search according to the privacy filter chosen
        // The "privacy" key for each post only has one value.
        // If the filter is from the privacy filter dropdown section,
        // then iterate through all the posts in postData
        // and check if the filter's text matches with the privacy key's value for
        // each post in the list.
        // If the post has the correct privacy setting,
        // then check if this post is already present in the searchResultsReturned list.
        // If not, then add it to the searchResultsReturned list.
        if (filterParameter == "privacy") {
          // iterate through each post in postData to check if each post has the
          // desired privacy filter
          for (var j=0; j<postData.length; j++) {
            // if the post does have the desired privacy filter,
            // then add it to the search results if not already in the search results
            if (postData[j][filterParameter].toLowerCase().indexOf(filterText) > -1) {
              var postAlreadyPresentInSearchResults = false;
              // check if this post is already present in the search results
              for (var k=0; k<searchResultsReturned.length; k++) {
                // if this post is already present in the search results,
                // then break the for loop and take note of this
                if (searchResultsReturned[k].id == postData[j].id) {
                  postAlreadyPresentInSearchResults = true;
                  break;
                }
              }
              // if this post was not already in the searchResultsReturned list,
              // then add this post to the searchResultsReturned list
              if (postAlreadyPresentInSearchResults == false) {
                searchResultsReturned.push(postData[j]);
              }
            } // end of if statement to see if the post has the desired privacy filter
          } // end of for loop to iterate over all the posts
        } // end of if statement for if the filter is a privacy filter

        // Step 2bii: Refine the search according to the group filter chosen
        // Using a similar method as above with broadening the search results, except
        // checking if the group filters match is a bit more complicated.
        // Each post has a key called "groupIds" which contains a list of the ids
        // of all the groups that this post is published under.
        // The filter text, on the other hand, only contains the name of the group,
        // not its id.
        // So first, we need to figure out the group id of the filter group text.
        // Then, we need to figured out if the post is part of any groups.
        // If yes, we need to figure out the ids of the groups this post is part of.
        // Then, we need to iterate through all of this post's group ids, and check
        // if any of them match with the filter's group id,
        // then we check if this post is already part of the searchResultsReturned list.
        // If not, we add this post to the searchResultsReturned list.
        else if (filterParameter == "groups") {
          // the filter text should remain case sensitive
          var filterText = $(filterListItems[i]).attr("data-filter-value");
          // change filter parameter to match the group related key in postData
          var filterParameter = "groupIds";
          // iterate through each post in the postData list to check if it has the
          // desired group filter
          for (var j=0; j<postData.length; j++) {
            // if the post does have the desired group filter,
            // then add it to the search results if not already in the search results
            var postAlreadyPresentInSearchResults = false;
            // the list of group ids for this particular post in postData
            var groupIdsList = postData[j][filterParameter];
            // continue searching if this post is actually part of one or more groups
            if (groupIdsList.length >= 1) {
              // find out the index and group id for this group filter
              var filterGroupIndex = findByKeyAndValueToReturnIndex(originalGroupMasterData, 'groupName', filterText);
              var filterGroupId = originalGroupMasterData[filterGroupIndex].id;
              // iterate through each group id in the list of group ids that this
              // post belongs to
              for (var m=0; m<groupIdsList.length; m++) {
                // if there is a match
                if (groupIdsList[m] == filterGroupId) {
                  // then check if this post is already present in the search results
                  for (var k=0; k<searchResultsReturned.length; k++) {
                    // if this post is already present in the search results,
                    // then break the for loop and take note of this
                    if (searchResultsReturned[k].id == postData[j].id) {
                      postAlreadyPresentInSearchResults = true;
                      break;
                    }
                  }
                  // if this post was not already in the search results,
                  // then add this post to the search results
                  if (postAlreadyPresentInSearchResults == false) {
                    searchResultsReturned.push(postData[j]);
                  }
                }
              }
            } // end of if statement to see if the post is part of any groups
          } // end of for loop to iterate over all posts
        } // end of if statement for searching for a group filter

        // Step 2biii: Refine the search according to the tag/media filter chosen
        // Using a similar method as above with narrowing down the results, except
        // checking if the tag/media filters match is a bit more complicated.
        // Each post has a list of tags and a list of media types instead of just
        // one value like for the privacy filter.
        // Thus, for each post, we need to look through the list of tag/media types,
        // and iterate through this list, to see if any of these match the text
        // of the tag/media filter selected.
        // If there is a match, then we check if this post is already part of the
        // searchResultsReturned list.
        // If not, we add this post to the searchResultsReturned list.
        else if (filterParameter == "tags" || filterParameter == "media") {
          // iterate through each post in postData to check if each post has the
          // desired tag/media filter
          for (var j=0; j<postData.length; j++) {
            // if the post does have the desired privacy filter,
            // then add it to the search results if not already in the search results
            var postAlreadyPresentInSearchResults = false;

            // the list of tags of media types for this post
            var thisPostTagsOrMediaList = postData[j][filterParameter];

            // If this post actually has a tag or media,
            // then iterate through each tag/media type that this post has
            // and check if it matches the input filter's tag/media type.
            // If there is a match, then check if it's aleady in the
            // searchResultsReturned list. If not, then add this post to the
            // searchResultsReturned.
            if (thisPostTagsOrMediaList.length >= 1) {
              // iterate through each tag/media type that this post has
              for (var m=0; m<thisPostTagsOrMediaList.length; m++) {
                // check if the filter text matchs the current tag/media type
                // belonging to this post
                if (thisPostTagsOrMediaList[m].toLowerCase().indexOf(filterText) > -1) {
                  // then check if this post is already present in the search results
                  for (var k=0; k<searchResultsReturned.length; k++) {
                    // if this post is already present in the search results,
                    // then break the for loop and take note of this
                    if (searchResultsReturned[k].id == postData[j].id) {
                      postAlreadyPresentInSearchResults = true;
                      break;
                    }
                  } // end of for loop to iterate over current search results
                  // if this post was not already in the search results,
                  // then add this post to the search results
                  if (postAlreadyPresentInSearchResults == false) {
                    searchResultsReturned.push(postData[j]);
                  }
                  break;
                }
              }
            } // end of if statement to see if the post is part of any groups
          } // end of for loop to iterate over all posts
        } // end of if statement for searching for a tag or media filter

        // Step 2biv: Refine the search according to the when filter chosen
        // The "when" filter is a date range.
        // If the filter is from the when filter dropdown section,
        // then iterate through all the posts in postData
        // and check if each post's date is within the desired date range.
        // If so, then check if this post is already present in the
        // searchResultsReturned list. If not, then add it to the searchResultsReturned
        // list.
        if (filterParameter == "when") {
          // obtain the start and end dates of the desired date range
          var dateStart = filtersAppliedData["when"][0];
          var dateEnd = filtersAppliedData["when"][1];
          // iterate through each post in postData to check if each post's date is
          // within the desired date range
          for (var j=0; j<postData.length; j++) {
            // if the post's date is within the desired date range,
            // then add it to the search results if not already in the search results
            // deterime the date of this post
            var thisPostDate = postData[j]["date"];
            // check if this post after the start date and before the end date
            if (thisPostDate >= dateStart && thisPostDate <= dateEnd) {
              var postAlreadyPresentInSearchResults = false;
              // check if this post is already present in the search results
              for (var k=0; k<searchResultsReturned.length; k++) {
                // if this post is already present in the search results,
                // then break the for loop and take note of this
                if (searchResultsReturned[k].id == postData[j].id) {
                  postAlreadyPresentInSearchResults = true;
                  break;
                }
              }
              // if this post was not already in the searchResultsReturned list,
              // then add this post to the searchResultsReturned list
              if (postAlreadyPresentInSearchResults == false) {
                searchResultsReturned.push(postData[j]);
              }
            } // end of if statement to see if the post has the desired privacy filter
          } // end of for loop to iterate over all the posts
        } // end of if statement for if the filter is a when filter

        // Step 2bv: Refine the search according to the where filter chosen
        // The "where" filter included location coordinates and a radius around this
        // If the filter is from the when filter dropdown section,
        // then iterate through all the posts in postData
        // and check if each post's date is within the desired date range.
        // If so, then check if this post is already present in the
        // searchResultsReturned list. If not, then add it to the searchResultsReturned
        // list.
        if (filterParameter == "where") {
          // obtain the desired lattitude, longitude, and radius
          var filterLattitude = filtersAppliedData["where"][0];
          var filterLongitude = filtersAppliedData["where"][1];
          var filterRadius = filtersAppliedData["where"][2];
          // iterate through each post in the postData to check if each post's
          // location is within the desired range
          for (var j=0; j<postData.length; j++) {
            // if the post's location is within the desired radius of the provided
            // location coordinates,
            // then add it to the search results if not already in the search results
            // deterime the location of this post
            var thisPostLattitude = postData[j]["location"][0];
            var thisPostLongitude = postData[j]["location"][1];
            // determine the distance between this post's location and the location
            // given by the user
            var distanceDifference = getDistanceFromLatLonInKm(filterLattitude,filterLongitude,thisPostLattitude,thisPostLongitude);
            // check if this post's location is within the desired radius
            if (distanceDifference <= filterRadius) {
              var postAlreadyPresentInSearchResults = false;
              // check if this post is already present in the search results
              for (var k=0; k<searchResultsReturned.length; k++) {
                // if this post is already present in the search results,
                // then break the for loop and take note of this
                if (searchResultsReturned[k].id == postData[j].id) {
                  postAlreadyPresentInSearchResults = true;
                  break;
                }
              }
              // if this post was not already in the searchResultsReturned list,
              // then add this post to the searchResultsReturned list
              if (postAlreadyPresentInSearchResults == false) {
                searchResultsReturned.push(postData[j]);
              }
            } // end of if statement to see if the post has the desired privacy filter
          } // end of for loop to iterate over all the posts
        } // end of if statement for if the filter is a where filter

      } // end of for loop to iterate over all the filters chosens
    } // any mode end
  } // advanced search mode end

  // Part B: Sort the search results
  // Step 1: Sort the results
  sortPosts(searchResultsReturned);
  // Step 2: Hide all the posts
  hideAllPosts();
  // Step 3: Only show the posts that were narrowed down by the search
  reorderAndDisplayPosts(searchResultsReturned, storiesSectionContainer);
  // Step 4: Make sure the thumbnail icons display at the correct size
  adjustSizesOfThumbnailIcons();

  // Part C: Write down how many search results were found
  // update the p element showing how many results were found
  var resultsCounter = searchResultsReturned.length; // store how many results were found
  var resultsString = resultsCounter;
  if (resultsCounter == 1) {
    resultsString += " post found.";
  } else {
    resultsString += " posts found.";
  }
  $("#number-of-results").text(resultsString);
}

// Detach all the posts from the html,
// then reattach them to the relevant section in the html
// in the order of the arrayOfPostsToSort input.
function reorderAndDisplayPosts(arrayOfPostsToSort, sectionContainer) {
  for (i = 0; i < arrayOfPostsToSort.length; i++) {
    // find the html element that represents this post
    var thisPostArticle = $('article[data-id="' + arrayOfPostsToSort[i].id + '"]');
    // detach this post from the html dom, but don't delete it so that content doesn't
    // have to get loaded again
    var detachedPost = thisPostArticle.detach();
    // add this post back to the html dom and show it
    detachedPost.appendTo(sectionContainer).show();
  }
}

// Sort posts according to parameters selected in the two sorting dropdowns
// (category and order)
function sortPosts(arrayOfPostsToSort) {
  // Determine the options selected from the sorting dropdowns
  var sortCategory = $("#category-dropdown").attr("data-value");
  var sortOrder = $("#order-dropdown").attr("data-value");
  // Sort by post title
  if (sortCategory == "title") {
    // sort by post title in ascending order
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
        return 0; // this happens if the names are equal
      });
    }
    // sort by title in descending order
    else {
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
        return 0; // this happens if the names are equal
      });
    }
  }
  // Sort by date
  else {
    // sort by date in ascending order
    if (sortOrder == "ascending") {
      console.log('sorting by date in ascending order');
      arrayOfPostsToSort.sort(function (a, b) {
        // return a.date - b.date;
        return new Date(a.date) - new Date(b.date);
      });
    }
    // sort by date in descending order
    else {
      console.log('sorting by date in descending order');
      arrayOfPostsToSort.sort(function (a, b) {
        // return b.date - a.date;
        return new Date(b.date) - new Date(a.date);
      });
    }
  }
}

// ------ ADVANCED FILTERS SELECTED RELATED FUNCTIONS ------- //
// Add a filter to the applied filters data object
function addAFilterToFilterData(filterObject, parameter, filterInfo) {
  if (parameter == "where") {
    // figure out how to format the filter info
  } else if (parameter == "when") {
    // figure out how to format the filter info
  }
  filterObject[parameter].push(filterInfo);
}

// Delete a filter from the applied filters data object
function deleteAFilterFromFilterData(filterObject, parameter, filterInfo) {
  // find the index of the filter
  var index = -1;
  for (var i = 0; i < filterObject[parameter].length; i++) {
    if (filterObject[parameter][i] == filterInfo) {
      index = i;
    }
  }
  if (index == -1) {
    throw "Couldn't find object with id: " + id;
  } else {
    // delete that filter from the parameter's list
    filterObject[parameter].splice(index, 1);
  }
}

// Delete all filters from the applied filters data object
function deleteAllFiltersFromFilterData(filterObject) {
  Object.keys(filterObject).forEach(function(key,index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    filterObject[key] = [];
  });
}

// Create the html string for one of the selected filters in the applied filters data object
function createHTMLStringForOneFilter(filterObject, parameter, filterIndex) {
  var filterText = filterObject[parameter][filterIndex];
  var htmlStringToAppend = '<button class="filter-chosen filter-';
  htmlStringToAppend += parameter;
  htmlStringToAppend += '-color-inverted" data-filter-parameter="';
  htmlStringToAppend += parameter;
  htmlStringToAppend += '" data-filter-value="';
  htmlStringToAppend += filterText;
  htmlStringToAppend += '">';
  htmlStringToAppend += '<span class="filter-chosen-text">';
  htmlStringToAppend += filterText;
  htmlStringToAppend += '</span>'
  htmlStringToAppend += '<span class="filter-chosen-close-button">x</span>';
  htmlStringToAppend += '</button>';
  return htmlStringToAppend;
}

// note to self: do I really need this function ever?
// Create the html string for all of the selected filters in the applied filters data object
function createHTMLStringForAllFilters(filterObject) {
  var htmlString = "";
  Object.keys(filterObject).forEach(function(key,index) {
    for (var i = 0; i < filterObject[key].length; i++) {
      htmlString += createHTMLStringForOneFilter(filterObject, key, i);
    }
  });
  return htmlString;
}

// Add one filter html string to the display filters chosen section in the DOM
function addOneFilterHTMLStringToFiltersChosenSection(filterObject, parameter, filterIndex) {
  var completeString = createHTMLStringForOneFilter(filterObject, parameter, filterIndex);
  $("#display-filters-chosen-section").append(completeString);
}

// Delete a specific filter from the html display filter section based on its data-filter-value
function deleteAFilterFromFiltersChosenSection(filterInfo) {
  // find the html element with the data-filter-value equivalent to the filterInfo input
  var filterHTMLElementSelectorString = '#display-filters-chosen-section button[data-filter-value="';
  filterHTMLElementSelectorString += filterInfo;
  filterHTMLElementSelectorString += '"]';
  var filterHTMLElement = $(filterHTMLElementSelectorString);
  // remove this element from the html
  filterHTMLElement.remove();
}

// Delete all filter html from the display filters chosen section in the DOM
function deleteAllHTMLFiltersFromFiltersChosenSection() {
  $("#display-filters-chosen-section").html('');
}

// ------ ADVANCED SEARCH RELATED FUNCTIONS ------ //
// Toggle the advanced/basic search mode by
// updating the advanced search mode boolean,
// updating the label of the advanced search mode button,
// and deleting all the filters chosen from the filtersAppliedData list,
// and from the html in the filters chosen section.
// advancedMode = boolean to tell whether the user has selected advanced search mode
// and basic search mode
function toggleAdvancedSearchMode(advancedMode) {
  // if it's currently in the basic search mode,
  // then change the text of the advanced search mode button
  // and display the advanced search mode filters
  if (advancedMode == false) {
    // change the text of the Advanced Search button to Basic Search
    $("#advanced-search-button").text("Basic Search");
    // show the advanced filter selection menu
    $("#advanced-search-filters-section").show();
    // hide all the advanced filter selection tabs
    $(".select-filter-options-section").hide();
    // reveal the where filter selection tab
    $("#select-where-filters-section").show();
  } else {
    // if it's currently in the basic search mode,
    // then change the text of the advanced search mode button
    // and display the advanced search mode filters
    $("#advanced-search-button").text("Advanced Search");
    // reset the filters chosen section and the search mode dropdown section
    // clear the filters chosen section in the html
    deleteAllHTMLFiltersFromFiltersChosenSection();
    // delete all data from the filters chosen data object
    deleteAllFiltersFromFilterData(filtersAppliedData);
    // reset all the search filters selected in the advanced filter dropdown menus
    resetSearchFilters(advancedSearchMode);
    // reset search mode preference
    $("#search-mode-dropdown").attr("data-value", 'all');
    $("#search-mode-dropdown").text("all");
    $("#advanced-search-filters-section").hide();
  }
  // the advanced search mode boolean
  advancedMode = !advancedMode;
  return advancedMode;
}

// Populates a dropdown menu list with the given data
// filterDataList = the list of relevant possible filters
function populateDropdownList(dropdownMenu, filterDataList) {
  var htmlString = '';
  for (var i = 0; i < filterDataList.length; i++) {
    htmlString += '<li><a href="#" data-value="';
    htmlString += filterDataList[i];
    htmlString += '" tabIndex="-1" class="option"><input type="checkbox"/>&nbsp;';
    htmlString += filterDataList[i];
    htmlString += '</a></li>';
  }
  dropdownMenu.append(htmlString);
}

// When the user clicks on an advanced filter dropdown's list item or checkbox,
// then add/remove this to/from the list of options selected.
// Also update the text in the dropdown toggle button based on what was selected.
function updateOptionsSelectedAndDropdownButtonText (appliedFiltersObject, optionsMaxLength, parameter, targetMode, filterText) {
  var options = appliedFiltersObject[parameter]; // list of options that have been applied

  // if targetMode is true, then the target is the a tag that was just clicked
  if (targetMode == true) {
    var $target = $(event.currentTarget); // the a tag that was clicked
  }
  // otherwise the target is the a tag of the filter that was clicked on in the filters chosen section
  else {
    var $target = $('#advanced-search-filters-options-section').find('div[data-filter-parameter="' + parameter + '"]').find('a[data-value="'+filterText+'"]');
  }
  var val = $target.attr('data-value'), // the data-value of the selected option
    $input = $target.find('input'), // the input checkbox of the selected option
    idx = options.indexOf(val); // the index of the selected option in the list of options

  // if the selected option is already in the list of selected options,
  // then remove this item from the list of selected options
  if (idx > -1) {
    // remove the selected option from the selected options list
    options.splice(idx, 1);
    // delete the selected option (filter) from the filters chosen section in the html
    deleteAFilterFromFiltersChosenSection(val);
    // set the selected option's checkbox as deselected mode
    setTimeout(function() {
      $input.prop('checked', false)
    }, 0);
  } else { // otherwise, add this option to the list of selected options
    // add the selected option into the selected options list
    options.push(val);
    if (val != "selectAll") {
      // add the selected option (filter) into the filters chosen section in the html
      var filterIndex = findByValueReturnIndex(options, val);
      console.log(filterIndex);
      addOneFilterHTMLStringToFiltersChosenSection(appliedFiltersObject, parameter, filterIndex);
    }
    // set the selected option's checkbox as selected mode
    setTimeout(function() {
      $input.prop('checked', true)
    }, 0);
  }

  // if the user manually deselects all the items,
  // then revert to select all mode (allItemsSelected = false, checkbox shows "Select All")
  if (options.length == 1 && allItemsSelectedStateForEachFilterData[parameter] == true) {
    allItemsSelectedStateForEachFilterData[parameter] = false;
    var $selectAllTarget = $target.parent().parent().find('.select-all'),
      $selectAllInput = $selectAllTarget.find('input'), // the input checkbox of the select all option
      val = $selectAllTarget.attr('data-value'), // the data-value of the selected option
      idx = options.indexOf(val); // the index of the select all option in the list of options
    // remove the selected option from the selected options list
    options.splice(idx, 1);
    // set the selected option's checkbox as deselected mode
    setTimeout(function() {
      $selectAllInput.prop('checked', false)
    }, 0);
    // change the select all option text to Select All
    $($selectAllTarget).find('.select-all-text').text('Select All');
  }
  // else if the user manually selects all the items,
  // then revert to deselect all mode (allItemsSelected = true, checkbox shows "Deselect All")
  else if (options.length >= optionsMaxLength && allItemsSelectedStateForEachFilterData[parameter] == false) {
    allItemsSelectedStateForEachFilterData[parameter] = true;
    var $selectAllTarget = $target.parent().parent().find('.select-all'),
      $selectAllInput = $selectAllTarget.find('input'), // the input checkbox of the select all option
      val = $selectAllTarget.attr('data-value'), // the data-value of the selected option
      idx = options.indexOf(val); // the index of the select all option in the list of options
    // add the selected option (filter) into the filters chosen section in the html
    options.push(val);
    // set the selected option's checkbox as selected mode
    setTimeout(function() {
      $selectAllInput.prop('checked', true)
    }, 0);
    // change the select all option text to Deselect All
    $($selectAllTarget).find('.select-all-text').text('Deselect All');
  }
  // else if the user manually deselects one option when all were selected
  // then revert to select all mode (allItemsSelected = false, checkbox shows "Select All")
  else if (options.length < (optionsMaxLength+1) && allItemsSelectedStateForEachFilterData[parameter] == true) {
    allItemsSelectedStateForEachFilterData[parameter] = false;
    var $selectAllTarget = $target.parent().parent().find('.select-all'),
      $selectAllInput = $selectAllTarget.find('input'), // the input checkbox of the select all option
      val = $selectAllTarget.attr('data-value'), // the data-value of the selected option
      idx = options.indexOf(val); // the index of the select all option in the list of options
    // remove the selected option from the selected options list
    options.splice(idx, 1);
    // set the selected option's checkbox as deselected mode
    setTimeout(function() {
      $selectAllInput.prop('checked', false)
    }, 0);
    // change the select all option text to Select All
    $($selectAllTarget).find('.select-all-text').text('Select All');
  }

  // unfocus the selected checkbox
  $(event.target).blur();

  // update the text in the dropdown toggle button based on which options were selected
  var $dropdownButton = $target.parent().parent().siblings(".button").find(".dropdown-button-text");
  // if no options were selected
  if (options.length == 0) {
    $dropdownButton.text("Select "+parameter+" filter(s).");
  }
  // else if one or more options were selected,
  // then show a list of what was selected, except for the selectAll option
  else {
    var optionsSelectedText = options[0];
    for (var i = 1; i < options.length; i++) {
      if (options[i] != "selectAll") {
        optionsSelectedText += ", ";
        optionsSelectedText += options[i];
      }
    }
    $dropdownButton.text(optionsSelectedText);
    // resize the height of the advanced filter selection sections
    resizeAdvancedSearchOptionsDivs();
  }
}

// When the user clicks on an advanced filter dropdown's de/select all checkbox,
// then toggle the select all mode (allItemsSelected boolean),
// update the text label accordingly,
// and select or deselect all the options chosen based on the mode.
function selectOrDeselectAllOptions(appliedFiltersObject, parameter) {
  // Get the list of options in the relevant advanced filter dropdown menu
  var options = appliedFiltersObject[parameter], // list of options that have been applied
    listItems = $(event.currentTarget).parent().parent().find('.option');

  // if not everything is selected, then select everything
  if (allItemsSelectedStateForEachFilterData[parameter] == false) {
    for (var i = 0; i < listItems.length; i++) {
      var val = $(listItems[i]).attr('data-value'), // the data-value of the option
        $input = $(listItems[i]).find('input'), // the input checkbox of the selected option
        idx = options.indexOf(val); // the index of the selected option in the list of options
      // if the current option is not already in the list of selected options,
      // then add this item to the current list of selected options
      if (idx == -1) {
        // add the selected option into the selected options list
        options.push(val);
        // add the selected option (filter) into the filters chosen section in the html
        var filterIndex = findByValueReturnIndex(options, val);
        console.log("Actual filter index returned: "+filterIndex);
        addOneFilterHTMLStringToFiltersChosenSection(appliedFiltersObject, parameter, filterIndex);
        // set the selected option's checkbox as selected mode
        $input.prop('checked', true);
      }
    }
    // toggle the select all mode
    allItemsSelectedStateForEachFilterData[parameter] = true;
    // change the text in the select all span to deselect all
    $(event.currentTarget).find('.select-all-text').text('Deselect All');
  } else { // otherwise, deselect everything
    for (var i = 0; i < listItems.length; i++) {
      var val = $(listItems[i]).attr('data-value'), // the data-value of the option
        $input = $(listItems[i]).find('input'), // the input checkbox of the selected option
        idx = options.indexOf(val); // the index of the selected option in the list of options
      // if the current option is already in the list of selected options,
      // then delete this item from the current list of selected options
      // remove the selected option from the selected options list
      options.splice(idx, 1);
      // delete the selected option (filter) from the filters chosen section in the html
      deleteAFilterFromFiltersChosenSection(val);
      // set the selected option's checkbox as deselected mode
      $input.prop('checked', false);
    }
    // toggle the select all mode
    allItemsSelectedStateForEachFilterData[parameter] = false;
    // change the text in the select all span to deselect all
    $(event.currentTarget).find('.select-all-text').text('Select All');
  }
}

// Find the distance between two coordinates using the Haversine formula (in km)
// Used to compare the post's location with the desired location in the where filter
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

// Convert an angle from degrees to radians
// Used in the getDistanceFromLatLonInKm function
function deg2rad(deg) {
  return deg * (Math.PI/180)
}

// Get the dates of both datetimepickers from the when filter selection tab.
// If both dates aren't empty, then add this filter to the filters chosen section
// and add these dates to the filtersAppliedData.
function addWhereFilterToFiltersChosenSectionAndFilterData(latInput, longInput, radiusInput) {
  var lat = latInput.val();
  var long = longInput.val();
  var radius = radiusInput.val();
  if (lat != "" && long != "" && radius != "") {
    // add these three numbers as separate entries into the filtersAppliedData list
    filtersAppliedData["where"][0] = parseFloat(lat);
    filtersAppliedData["where"][1] = parseFloat(long);
    filtersAppliedData["where"][2] = parseFloat(radius);
    // add these three numbers as one filter tag to the filters chosen section
    var filterText = lat + "°, " + long + "°, " + radius + "km";
    var parameter = "where";
    var htmlStringToAppend = '<button class="filter-chosen filter-';
    htmlStringToAppend += parameter;
    htmlStringToAppend += '-color-inverted" data-filter-parameter="';
    htmlStringToAppend += parameter;
    htmlStringToAppend += '" data-filter-value="';
    htmlStringToAppend += filterText;
    htmlStringToAppend += '">';
    htmlStringToAppend += '<span class="filter-chosen-text">';
    htmlStringToAppend += filterText;
    htmlStringToAppend += '</span>'
    htmlStringToAppend += '<span class="filter-chosen-close-button">x</span>';
    htmlStringToAppend += '</button>';
    $("#display-filters-chosen-section").append(htmlStringToAppend);
    return htmlStringToAppend;
  }
}

// Get the date of a date time picker and return the format as a Date object
// dateInput = a datetimepicker input
function getDate(dateInput) {
  // if the dateInput was empty, then the following function will return null
  var thisDate = dateInput.data("DateTimePicker").date();
  // if the date isn't null, then convert it from a Moment object to a Date object
  if (thisDate != null) {
    thisDate.format();
    thisDate = new Date(thisDate);
  }
  return thisDate;
}

// Get the dates of both datetimepickers from the when filter selection tab.
// If both dates aren't empty, then add this filter to the filters chosen section
// and add these dates to the filtersAppliedData.
function addWhenFilterToFiltersChosenSectionAndFilterData(dateInput1, dateInput2) {
  var date1 = getDate(dateInput1);
  var date2 = getDate(dateInput2);
  if (date1 != null && date2 != null) {
    // add these two dates as separate entries into the filtersAppliedData list
    filtersAppliedData["when"][0] = date1;
    filtersAppliedData["when"][1] = date2;
    // add these two dates as one filter tag to the filters chosen section
    var filterText = date1.toDateString() + "–" + date2.toDateString();
    var parameter = "when";
    var htmlStringToAppend = '<button class="filter-chosen filter-';
    htmlStringToAppend += parameter;
    htmlStringToAppend += '-color-inverted" data-filter-parameter="';
    htmlStringToAppend += parameter;
    htmlStringToAppend += '" data-filter-value="';
    htmlStringToAppend += filterText;
    htmlStringToAppend += '">';
    htmlStringToAppend += '<span class="filter-chosen-text">';
    htmlStringToAppend += filterText;
    htmlStringToAppend += '</span>'
    htmlStringToAppend += '<span class="filter-chosen-close-button">x</span>';
    htmlStringToAppend += '</button>';
    $("#display-filters-chosen-section").append(htmlStringToAppend);
    return htmlStringToAppend;
  }
}

// --- When the document is fully loaded --- //
$(document).ready(function(){
  // ------ SETUP POSTS ------ //
  // populate the page with posts and their relevant info
  addPostHTMLStringToDesiredSection(storiesSectionContainer);

  // Change the font-size of the sound and video icons in the thumbnails
  adjustSizesOfThumbnailIcons();

  // Stop audio and/or video when the modal closes
  $("#storyModal").on('hidden.bs.modal', function (e) {
    // reset the audio player
    $('audio').each(function(){
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    });
    // reload the source for the iframe that the video is in
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

  // ------ BASIC SEARCH FUNCTIONS ------ //
  // Set search bar size to correct width
  resizeSearchBarWidth();

  // When the user clicks the "Go" button,
  // change which posts are visible and hidden based on the input search parameters
  $("#submit-filters-button").on('click', function() {
    searchAndSortPosts(advancedSearchMode);
  });

  // When the user presses the "ENTER" key,
  // change which posts are visible and hidden based on the input search parameters
  $('#search-box').on('keypress', function (e) {
     if(e.which === 13){ // if the key pressed was the enter key
        // Disable textbox to prevent multiple submit
        $(this).attr("disabled", "disabled");
        // search and sort the posts
        searchAndSortPosts(advancedSearchMode);
        // Enable the textbox again
        $(this).removeAttr("disabled");
     }
   });

  // When the user clicks the "RESET" button,
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
    // Sort the search results
    sortPosts(searchResultsReturned);
    // Hide all the posts
    hideAllPosts();
    // Only show the posts that were narrowed down by the search
    reorderAndDisplayPosts(searchResultsReturned, storiesSectionContainer);
  });

  // When the user clicks a sorting order option,
  // then change the text in the dropdown button according to the option chosen
  // and sort the posts accordingly
  $(".sorting-order").on("click", function() {
    $("#order-dropdown").attr("data-value", $(this).attr("data-value"));
    $("#order-dropdown").text($(this).attr("data-value"));
    // Sort the search results
    sortPosts(searchResultsReturned);
    // Hide all the posts
    hideAllPosts();
    // Only show the posts that were narrowed down by the search
    reorderAndDisplayPosts(searchResultsReturned, storiesSectionContainer);
  });

  // When the user clicks on the search mode option (all or any),
  // then change the text in the dropdown button according to the option chosen
  $(".search-mode-option").on("click", function() {
    $("#search-mode-dropdown").attr("data-value", $(this).attr("data-value"));
    $("#search-mode-dropdown").text($(this).attr("data-value"));
  });

  // ------ ADVANCED SEARCH RELATED FUNCTIONS ------ //
  // resize the height of the advanced filter selection sections
  resizeAdvancedSearchOptionsDivs();

  // When the user clicks the "Advanced Search" button,
  // toggle advanced search mode (hide/show the advanced filters and change button text)
  $("#advanced-search-button").on("click", function() {
    advancedSearchMode = toggleAdvancedSearchMode(advancedSearchMode);
  });

  // When the user clicks on an advanced filter menu tab,
  // then hide/show the relevant option selection section
  $(".advanced-filter-tab").on("click", function() {
    // hide all the tabs
    $(".select-filter-options-section").hide();
    // reveal the correct tab
    // find the tab's corresponding advanced filter selection div
    var filterParameter = $(this).attr("data-filter-parameter");
    var optionSelectionDiv = $(document).find('div.select-filter-options-section[data-filter-parameter="' + filterParameter + '"]');
    // show the tab
    optionSelectionDiv.show();
    // display the correct size for the advanced filter selection div
    resizeAdvancedSearchOptionsDivs();
  });

  // display the filters chosen in the display filters chosen section
  $("#display-filters-chosen-section").on("click", ".filter-chosen", function() {
    // find information about the filter clicked upon
    var filterParameter = $(this).attr("data-filter-parameter");
    var filterText = $(this).attr("data-filter-value");
    // remove this filter from the filtersAppliedData
    // and deselect this option from the corresponding dropdown that it belongs to
    if (filterParameter == "privacy" || filterParameter == "groups" || filterParameter == "tags" || filterParameter == "media") {
      updateOptionsSelectedAndDropdownButtonText(filtersAppliedData, possibleFiltersData[filterParameter].length, filterParameter, false, filterText);
    } else if (filterParameter == "when") {
      // empty the contents of the when section of the filtersAppliedData list
      filtersAppliedData["when"] = [];
      // reset the when filter selection section
      // reset the whenFilterAlreadyPresent boolean to false
      whenFilterAlreadyPresent = false;
      // make the inputs of the date time pickers empty
      $("#datetimepicker-start").data("DateTimePicker").date(null);
      $("#datetimepicker-end").data("DateTimePicker").date(null);
    }
    // remove this element from the html
    $(this).remove();
  });

  // Populate the advanced privacy filters dropdown lists
  populateDropdownList($("#privacy-filters-dropdown > .dropdown-menu"), possibleFiltersData['privacy']);
  populateDropdownList($("#groups-filters-dropdown > .dropdown-menu"), possibleFiltersData['groups']);
  populateDropdownList($("#tags-filters-dropdown > .dropdown-menu"), possibleFiltersData['tags']);
  populateDropdownList($("#media-filters-dropdown > .dropdown-menu"), possibleFiltersData['media']);

  // When the user clicks on an advanced filter dropdown's de/select all checkbox,
  // then toggle the select all mode (allItemsSelected boolean),
  // update the text label accordingly,
  // and select or deselect all the options chosen based on the mode.
  $('.select-all').on('click', function(event) {
    var parameter = $(this).parent().parent().parent().attr("data-filter-parameter");
    selectOrDeselectAllOptions(filtersAppliedData, parameter);
  });

  // When the user clicks on an advanced filter dropdown's list item or checkbox,
  // then add/remove this to/from the list of options selected.
  // Also update the text in the dropdown toggle button based on what was selected.
  $('.advanced-filter-dropdown .dropdown-menu a').on('click', function(event) {
    var parameter = $(this).parent().parent().parent().attr("data-filter-parameter");
    updateOptionsSelectedAndDropdownButtonText(filtersAppliedData, possibleFiltersData[parameter].length, parameter, true, "");
    // To prevent the dropdown from hiding when it was clicked on
    return false;
  });

  // When the user starts typing in an advanced search filter dropdown's search box,
  // then search through the list of options and only show the relevant ones.
  // Also hide the select all button while something is being searched.
  $(".filter-search-box").on("keyup", function() {
    // The input value
    var value = $(this).val().toLowerCase();

    // Loop through all list items, and hide those who don't match the search query
    var listItemsList = $(this).parent().parent().find(".option");
    for (i = 0; i < listItemsList.length; i++) {
      if ($(listItemsList[i]).text().toLowerCase().indexOf(value) > -1) {
        $(listItemsList[i]).show();
      } else {
        $(listItemsList[i]).hide();
      }
    }

    // If the search box gets emptied, then show the select all checkbox
    if (value != "") {
      $(this).parent().parent().find(".select-all").hide();
    } else { // otherwise, hide the select all checkbox
      $(this).parent().parent().find(".select-all").show();
    }
  });

  // When the user clicks an advanced filter dropdown's search box's clear button,
  // then reset the contents of the search text input without hiding the dropdown.
  $(".clear-search-button").on("click", function(event) {
    // prevent dropdown from closing
    event.stopPropagation();
    // unfocus the button
    $(event.target).blur();
    // reset the value of the text input search box to ""
    $(this).parent().parent().find(".filter-search-box").val("");
    // reveal the select all checkbox and all the option checkboxes
    $(this).parent().parent().parent().find(".select-all").show();
    $(this).parent().parent().parent().find(".option").show();
  });

  // When the user clicks outside the advanced filter dropdown and this dropdown
  // disappears, then reset the contents of the search text input
  $('.advanced-filter-dropdown').on('hidden.bs.dropdown', function(){
    // reset the value of the text input search box to ""
    $(this).parent().parent().find(".filter-search-box").val("");
    // reveal the select all checkbox and all the option checkboxes
    $(this).parent().parent().parent().find(".select-all").show();
    $(this).parent().parent().parent().find(".option").show();
  });

  // Initialize the datetimepicker inputs in the when filter selection section
  $(function () {
    $('#datetimepicker-start').datetimepicker({
    });
    $('#datetimepicker-end').datetimepicker({
      useCurrent: false, //Important! See issue #1075
    });
    // prevent the end date from going behind the start date
    $("#datetimepicker-start").on("dp.change", function (e) {
      $('#datetimepicker-end').data("DateTimePicker").minDate(e.date);
    });
    // ensure that neither of the date time pickers will allow the user
    // to select a date from the future
    $('#datetimepicker-start').data("DateTimePicker").maxDate(moment());
    $('#datetimepicker-end').data("DateTimePicker").maxDate(moment());
  });

  // If the starting datetimepicker is clicked on,
  // then add the date chosen into the filtersAppliedData list
  // and the filters chosen section (remove the previous filter chosen first)
  $('#datetimepicker-start').datetimepicker().on('dp.change',function(e){
    // if a when filter is already present, then remove the previous when filter tag
    if (whenFilterAlreadyPresent == true) {
      // find the when filter tag
      var whenFilterTag = $('.filter-chosen[data-filter-parameter=when]');
      // remove this filter tag
      whenFilterTag.remove();
    }
    // add a new when filter tag to the filters chosen section and add the dates of
    // both starting and ending datetimepickers to the filtersAppliedData if both
    // fields have been populated
    addWhenFilterToFiltersChosenSectionAndFilterData($("#datetimepicker-start"),$("#datetimepicker-end"));
    // take note that a when filter tag is now present
    whenFilterAlreadyPresent = true;
  });

  // If the starting datetimepicker is clicked on,
  // then add the date chosen into the filtersAppliedData list
  // and the filters chosen section (remove the previous filter chosen first)
  $('#datetimepicker-end').datetimepicker().on('dp.change',function(e){
    // if a when filter is already present, then remove the previous when filter tag
    if (whenFilterAlreadyPresent == true) {
      // find the when filter tag
      var whenFilterTag = $('.filter-chosen[data-filter-parameter=when]');
      // remove this filter tag
      whenFilterTag.remove();
    }
    // add a new when filter tag to the filters chosen section and add the dates of
    // both starting and ending datetimepickers to the filtersAppliedData if both
    // fields have been populated
    addWhenFilterToFiltersChosenSectionAndFilterData($("#datetimepicker-start"),$("#datetimepicker-end"));
    // take note that a when filter tag is now present
    whenFilterAlreadyPresent = true;
  });

  // When the where input changes, update the filter
  $(".where-filter-input").keyup(function(){
    // if a where filter is already present, then remove the previous where filter tag
    if (whereFilterAlreadyPresent == true) {
      // find the where filter tag
      var whereFilterTag = $('.filter-chosen[data-filter-parameter=where]');
      // remove this filter tag
      whereFilterTag.remove();
    }
    // add a new where filter tag to the filters chosen section and add the dates of
    // both starting and ending datetimepickers to the filtersAppliedData if both
    // fields have been populated
    addWhereFilterToFiltersChosenSectionAndFilterData($("#lattitude-input"),$("#longitude-input"),$("#radius-input"));
    // take note that a where filter tag is now present
    whereFilterAlreadyPresent = true;
  });
});

// --- When the window is resized --- //
$(window).on('resize', function(event){
  // Change the font-size of the sound and video icons in the thumbnails
  adjustSizesOfThumbnailIcons();
  // Set search bar size to correct width
  resizeSearchBarWidth();
  // resize the height of the advanced filter selection sections
  resizeAdvancedSearchOptionsDivs();
});