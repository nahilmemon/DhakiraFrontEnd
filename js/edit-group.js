// --- Global Variables --- //
// Table Breakpoint
var tableBreakpointForCardView = 768; // bootstrap breakpoint (below 768 = extra small devices)
// Table 1 Variables
var allCheckedTable1 = true; // for the state of the select/unselect all button
var $addMembersTable1 = $('#add-members-table-1');
var $selectButtonTable1 = $('div > #select-button-table-1');
// Table 2 Variables
var allCheckedTable2 = true;
var $potentionalGroupTable2 = $('#potential-group-table-2');
var $selectButtonTable2 = $('div > #select-button-table-2');
// Dropdown Step 1
var groupDropdown = $('#existing-groups-dropdown');
// id: #
// group name
// cover photo source
// list of members in group
// list of posts...
var groupMasterData = [
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

function showProps(obj, objName) {
  var result = '';
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
}

function findById(source, id) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].id == id) {
      return source[i];
    }
  }
  throw "Couldn't find object with id: " + id;
}

// --- When the document is fully loaded --- //
$(document).ready(function(){
  $(document).keypress(function(e) {
      if(e.which == 13) {
          alert('You pressed enter!');
      }
  });
  // Step 1: Connect dropdown answer to step 2
  $('#existing-groups-dropdown').on('click', function () {
    var groupMasterId = groupDropdown.dropdown('get value');
    if (groupMasterId != "Select Group") {
      console.log(groupMasterId);
      var desiredGroupData = findById(groupMasterData, groupMasterId);
      console.log(desiredGroupData);
      // var desiredGroupData = $.grep(groupMasterData, function(e){
      //   return e.id == id;
      // });
      // console.log(groupMasterData[groupMasterId].groupName);
      // Update the name in the input in step 2
      $("#edit-group-name-input").attr('placeholder', desiredGroupData.groupName);
      // Update the photo preview in step 3
      // var imageSource = "";
      // if (groupNameToEdit == "Ice Cream in the Tropics") {
      //   imageSource = "https://static.pexels.com/photos/162917/ice-fruit-ice-mixed-ice-cream-sundae-162917.jpeg";
      // } else if (groupNameToEdit == "Grenouilles dans les Déserts") {
      //   imageSource = "https://static.pexels.com/photos/8453/nature-night-frog.jpg";
      // } else if (groupNameToEdit == "Edredones") {
      //   imageSource = "http://handeyemagazine.com/sites/default/files/small_QA006-1.jpg";
      // } else if (groupNameToEdit == "Cooking with Grandparents") {
      //   imageSource = "https://static.pexels.com/photos/6981/food-kitchen-dessert-pie.jpg";
      // } else if (groupNameToEdit == "Playing with Wild Animals") {
      //   imageSource = "https://static.pexels.com/photos/63650/frog-toad-eyes-animal-63650.jpeg";
      // }
      $("#edit-photo-preview-image").attr('src', desiredGroupData.coverPhotoSource);
    }
  });

  // Populate the add members to group table
  $(function () {
    var data = [
      {
        'id': 1,
        'firstName': 'Misa',
        'lastName': 'Kaison',
        'email': 'misakaison@gmail.com'
      }, {
        'id': 2,
        'firstName': 'Elrik',
        'lastName': 'Parker',
        'email': 'elrik.parker@yahoo.com'
      }, {
        'id': 3,
        'firstName': 'Essa',
        'lastName': 'Mentoryte',
        'email': 'em5632@live.com'
      }
    ];
    $addMembersTable1.bootstrapTable({data: data});
  });

  // Populate the delete members from montage table
  $(function () {
    var data = [
      {
        'id': 4,
        'firstName': 'Sana',
        'lastName': 'Ryder',
        'email': 's_ryder@hotmail.com'
      },
      {
        'id': 5,
        'firstName': 'Skyler',
        'lastName': 'Melrow',
        'email': 'skys_the_limit@live.com'
      },
      {
        'id': 6,
        'firstName': 'Emma',
        'lastName': 'Minks',
        'email': 'em8998@gmail.com'
      },
      {
        'id': 7,
        'firstName': 'Daryn',
        'lastName': 'Pleakly',
        'email': 'daryn.i.am@gmail.com'
      }
    ];
    $potentionalGroupTable2.bootstrapTable({data: data});
  });

  // When the user clicks the add members to group button,
  // then delete those rows from the add table 1
  // and add those rows to the group table 2
  $('#add-group-members').on('click', function() {
    console.log("Transferring selected members from table 1 to group members table 2.");
    transferSelectedRowsFromTable1ToTable2($addMembersTable1, $potentionalGroupTable2);
  });

  // When the user clicks the delete group members button,
  // then delete those rows from the group table 2
  // and add those rows to the add table 1
  $('#delete-group-members').on('click', function(){
    console.log("Removing selected members from the potential group table 2 and putting them back in the add table 1.");
    transferSelectedRowsFromTable1ToTable2($potentionalGroupTable2, $addMembersTable1);
  });

  // When the user clicks the empty group button,
  // then delete all the rows in the group table 2
  // and add those rows to the add table 1
  $('#empty-group').on('click', function(){
    console.log("Removing all members from the potential group table 2 and putting them back in the add table 1.");
    transferAllRowsFromTable1ToTable2($potentionalGroupTable2, $addMembersTable1);
  });

  // When the table is in card view, display a select/unselect all button
  // Else, hide this button, since it shows up by itself in table view
  toggleSelectAllRowsButtonOnMobile($selectButtonTable1, $addMembersTable1, allCheckedTable1, tableBreakpointForCardView);
  toggleSelectAllRowsButtonOnMobile($selectButtonTable2, $potentionalGroupTable2, allCheckedTable2, tableBreakpointForCardView);

  // Placeholder function for when the user clicks the create group button to submit the form
  $('#create-group-button').on('click', function(){
    console.log("Submitting form. Creating group...");
  });
});

// --- When the window is resized --- //
$(window).on('resize', function(event){
  // When the table is in card view, display a select/unselect all button
  // Else, hide this button, since it shows up by itself in table view
  toggleSelectAllRowsButtonOnMobile($selectButtonTable1, $addMembersTable1, allCheckedTable1, tableBreakpointForCardView);
  toggleSelectAllRowsButtonOnMobile($selectButtonTable2, $potentionalGroupTable2, allCheckedTable2, tableBreakpointForCardView);
});

// This functions transfers the rows selected in table 1 to table 2
// by deleting the selected rows in table 1
// and adding the selected rows to table 2
function transferSelectedRowsFromTable1ToTable2(table1, table2) {
  // Step 1: get the ids and row data of the selected rows from table 1
  var ids = $.map(table1.bootstrapTable('getSelections'), function (row) {
    // Step 2: Add the selected rows to table 2
    table2.bootstrapTable('append', row);
    return row.id;
  });
  // Step 3: for each row selected in table 1, remove the rows from the first table, using their ids
  table1.bootstrapTable('remove', {
    field: 'id',
    values: ids
  });
  // Step 4: Unselect all choices.
  table1.bootstrapTable('uncheckAll');
  table2.bootstrapTable('uncheckAll');
}

// This functions transfers all the rows in table 1 to table 2
// by deleting all the rows in table 1
// and adding all of these rows to table 2
function transferAllRowsFromTable1ToTable2(table1, table2) {
  // Step 1: select all rows in table 1
  table1.bootstrapTable('checkAll');
  // Step 2: get the ids and row data of the selected rows from table 1
  var ids = $.map(table1.bootstrapTable('getSelections'), function (row) {
    // Step 3: Add the selected rows to table 2
    table2.bootstrapTable('append', row);
    return row.id;
  });
  // Step 4: for each row selected in table 1, remove the rows from the first table, using their ids
  table1.bootstrapTable('remove', {
    field: 'id',
    values: ids
  });
  // Step 5: Unselect all choices.
  table1.bootstrapTable('uncheckAll');
  table2.bootstrapTable('uncheckAll');
}

// This function toggles the display of the select/unselect all button depending on
// whether the screen is small or large
// For small screens, this function also switches between the select and unselect
// state of the select all button (since this button can't show up in card view by itself)
function toggleSelectAllRowsButtonOnMobile(selectButton, table, checkButtonState, windowThreshold) {
  // If on mobile view, show the select/unselect all button
  if (window.innerWidth < windowThreshold) {
    selectButton.css('display','block');
    selectButton.on('click', function() {
      // If the current state of the button is to uncheck, then uncheck everything
      if (checkButtonState == false) {
        table.bootstrapTable('uncheckAll');
        checkButtonState = true;
        selectButton.text('Select All');
      } else {  // else, check everything
        table.bootstrapTable('checkAll');
        checkButtonState = false;
        selectButton.text('Unselect All');
      }
    });
  } else { // else hide the select/unselect all button on desktop view
    selectButton.css('display','none');
  }
}