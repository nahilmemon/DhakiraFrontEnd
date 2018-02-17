// --- Global Variables --- //
// Table Breakpoint
var tableBreakpointForCardView = 768; // bootstrap breakpoint (below 768 = extra small devices)
// Table 1 Variables
var allCheckedTable2 = true; // for the state of the select/unselect all button
var $addMembersTable2 = $('#add-members-table-2');
var $selectButtonTable2 = $('div > #select-button-table-2');
// Table 2 Variables
var allCheckedTable1 = true;
var $groupMembersTable1 = $('#group-members-table-1');
var $selectButtonTable1 = $('div > #select-button-table-1');
// Dropdown Step 1
var $groupDropdown = $('#existing-groups-dropdown');
// List of information regarding each group
var desiredGroupDataCopy;
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
// List of information regarding each member
var memberData = [
  {
    'id': 1,
    'firstName': 'Misa',
    'lastName': 'Kaison',
    'email': 'misakaison@gmail.com'
  },
  {
    'id': 2,
    'firstName': 'Elrik',
    'lastName': 'Parker',
    'email': 'elrik.parker@yahoo.com'
  },
  {
    'id': 3,
    'firstName': 'Essa',
    'lastName': 'Mentoryte',
    'email': 'em5632@live.com'
  },
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

// Looks up an id in a list of arrays with id keys.
// Returns the index of the array that has the input id value.
function findByIdReturnIndex(source, id) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].id == id) {
      return i;
    }
  }
  throw "Couldn't find object with id: " + id;
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

// Makes a deep copy of an input array
function deepCopyArray(originalArray) {
  var output, v, key;
  output = Array.isArray(originalArray) ? [] : {};
  for (key in originalArray) {
    v = originalArray[key];
    output[key] = (typeof v === "object" && v !== null) ? deepCopyArray(v) : v;
  }
  return output;
}

// Create empty table
function createEmptyTable(table) {
  // Note: this step is necessary for the table to initialize properly
  // but this creates a row of '-' (undefined strings)
  var data = [{}];
  table.bootstrapTable({data: data});
  // Delete the row of undefined strings
  table.bootstrapTable('removeAll');
}

// Takes the value selected in select group dropdown which refers to the id of the group.
// Updates steps 2-4 of the form with the information about the group, including
// group name, cover photo source, group members list, and list of members not
// part of the group
function populateFormUponGroupSelection(dropdownValue) {
  // record the value of what was selected in the dropdown
  var groupMasterId = dropdownValue;
  // look up this id in the group master data list and get the sub-array about that group
  var desiredGroupData = findByIdReturnObject(originalGroupMasterData, groupMasterId);
  console.log("desired group data");
  console.log(desiredGroupData);
  // make a deep copy of the group info in case the user wants to undo their edits later
  desiredGroupDataCopy = deepCopyArray(desiredGroupData);
  // update the group name in step 2 accordingly
  $("#edit-group-name-input").val(desiredGroupData.groupName);
  // Update the photo preview in step 3 accordingly
  $("#edit-photo-div > img").attr('src', desiredGroupData.coverPhotoSource);
  // remove the placeholder image thumbnail and replace with the uploaded file
  $("#edit-photo-container").removeClass('fileinput-new');
  $("#edit-photo-container").addClass('fileinput-exists');
  // Update the data in table 1 in step 4 accordingly
  // Delete the old information displayed in the table
  $groupMembersTable1.bootstrapTable('destroy');
  // create a temporary list to store the new information to show in the table
  var tempData = [];
  var arrayLength = desiredGroupData.memberIds.length;
  // for each member in the group,
  for (var i = 0; i < arrayLength; i++) {
    // find the information about that member by looking up their id in the member data list
    var ithMemberInfo = findByIdReturnObject(memberData, desiredGroupData.memberIds[i]);
    // add that row of information to the temporary data list
    tempData.push(ithMemberInfo);
  }
  // add the information in the temporary data list to the table
  $groupMembersTable1.bootstrapTable({data: tempData});
  // Update the data in table 2 in step 4 accordingly
  $addMembersTable2.bootstrapTable('destroy');
  // make a deep copy of the member data list and store this in a temporary data list
  var tempData = deepCopyArray(memberData);
  var arrayLength = desiredGroupData.memberIds.length;
  // for each member in the group,
  for (var i = 0; i < arrayLength; i++) {
    // find the information about that member by looking up their id in the temporary data list
    var ithMemberIndex = findByIdReturnIndex(tempData, desiredGroupData.memberIds[i]);
    // delete that member's information from the temporary data list
    tempData.splice(ithMemberIndex, 1);
  }
  // add the information in the temporary data list to the table so that it shows all
  // the members in the site that are not part of the group
  $addMembersTable2.bootstrapTable({data: tempData});

  // reveal the whole form
  $("#group-edit-form").css('display', 'block');
}

// Update the original group master data list with whatever inputs the user gave
// in the edit group form throughout
function updateOriginalGroupMasterData() {
  desiredGroupDataCopy.coverPhotoSource = $("#edit-photo-preview-image").attr('src');
  console.log("Image:");
  console.log(desiredGroupDataCopy.coverPhotoSource);
  // extract the information about the relevant group
  var groupMasterId = $groupDropdown.dropdown('get value');
  var groupMasterIndex = findByIdReturnIndex(originalGroupMasterData, groupMasterId);
  // update the original group master data by deep copying the edited group data into it
  console.log("original:");
  console.log(originalGroupMasterData[groupMasterIndex]);
  originalGroupMasterData[groupMasterIndex] = deepCopyArray(desiredGroupDataCopy);
  console.log("updated:");
  console.log(originalGroupMasterData[groupMasterIndex]);
}

// This functions transfers the rows selected in table 1 to table 2
// by deleting the selected rows in table 1
// and adding the selected rows to table 2
// This function also deletes members' id info for the relevant group from
// the group master data list
function transferSelectedRowsFromTable1ToTable2AndDeleteData(table1, table2, dataList) {
  // Step 1: extract the information about the relevant group
  var groupMasterId = $groupDropdown.dropdown('get value');
  // Step 2: get the ids and row data of the selected rows from table 1
  var ids = $.map(table1.bootstrapTable('getSelections'), function (row) {
    // Step 3: Delete the member id of the selected rows from the group memberIds list
    // figure out the id and index of the selected member row
    var ithMemberId = row.id;
    var ithMemberIndex = findByValueReturnIndex(desiredGroupDataCopy.memberIds, ithMemberId);
    // delete the member id of the selected member row from the group memberIds list
    desiredGroupDataCopy.memberIds.splice(ithMemberIndex, 1);
    // Step 4: Add the selected rows to table 2
    table2.bootstrapTable('append', row);
    return row.id;
  });
  // Step 5: for each row selected in table 1, remove the rows from the first table, using their ids
  table1.bootstrapTable('remove', {
    field: 'id',
    values: ids
  });
  // Step 6: Unselect all choices.
  table1.bootstrapTable('uncheckAll');
  table2.bootstrapTable('uncheckAll');
}

// This functions transfers all the rows in table 1 to table 2
// by deleting all the rows in table 1
// and adding all of these rows to table 2
// This function also deletes all members' id info for the relevant group from
// the group master data list
function transferAllRowsFromTable1ToTable2AndDeleteAllData(table1, table2) {
  // Step 1: select all rows in table 1
  table1.bootstrapTable('checkAll');
  // Step 2: extract the information about the relevant group
  var groupMasterId = $groupDropdown.dropdown('get value');
  // Step 3: get the ids and row data of the selected rows from table 1
  var ids = $.map(table1.bootstrapTable('getSelections'), function (row) {
    // Step 4: Delete the member id of the selected rows from the group memberIds list
    // figure out the id and index of the selected member row
    var ithMemberId = row.id;
    var ithMemberIndex = findByValueReturnIndex(desiredGroupDataCopy.memberIds, ithMemberId);
    // delete the member id of the selected member row from the group memberIds list
    desiredGroupDataCopy.memberIds.splice(ithMemberIndex, 1);
    // Step 5: Add the selected rows to table 2
    table2.bootstrapTable('append', row);
    return row.id;
  });
  // Step 6: for each row selected in table 1, remove the rows from the first table, using their ids
  table1.bootstrapTable('remove', {
    field: 'id',
    values: ids
  });
  // Step 6: Unselect all choices.
  table1.bootstrapTable('uncheckAll');
  table2.bootstrapTable('uncheckAll');
}

// This functions transfers the rows selected in table 1 to table 2
// by deleting the selected rows in table 1
// and adding the selected rows to table 2
// This function also adds members' id info for the relevant group from
// the group master data list
function transferSelectedRowsFromTable1ToTable2AndAddData(table1, table2) {
  // Step 1: extract the information about the relevant group
  var groupMasterId = $groupDropdown.dropdown('get value');
  // Step 2: get the ids and row data of the selected rows from table 1
  var ids = $.map(table1.bootstrapTable('getSelections'), function (row) {
    // Step 3: Add the member ids of the selected rows to the group memberIds list
    // figure out the id and index of the selected member row
    var ithMemberId = row.id;
    // add the member id of the selected member row to the group memberIds list
    desiredGroupDataCopy.memberIds.push(ithMemberId);
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

// --- When the document is fully loaded --- //
$(document).ready(function(){
  // Step 1: Connect dropdown answer to steps 2-3
  $('.ui.dropdown').dropdown({
    onChange: function (value, text, $selectedItem) {
      populateFormUponGroupSelection(value);
    },
    forceSelection: false,
    selectOnKeydown: false,
    showOnFocus: false,
    on: "hover",
    fullTextSearch: true
  });

  // Populate the current group members table
  createEmptyTable($groupMembersTable1);
  // Populate the add members to group table
  createEmptyTable($addMembersTable2);

  // When the user changes the group name text input and deselects,
  // then update the name of the group in the copied group array info
  $("#edit-group-name-input").change(function(){
    desiredGroupDataCopy.groupName = $(this).val();
  });

  // When the user changes the group cover photo image source,
  // then update the name of the group in the copied group array info
  $('#edit-photo-container').fileinput().on('change.bs.fileinput', function(e, files){
    console.log('Changing image source. Idk how to actually change it...');
    // The following doesn't really work (changes the source to "undefined");
    desiredGroupDataCopy.coverPhotoSource = $("#edit-photo-preview-image").attr('src');
  });

  // When the user clicks the delete group members button,
  // then delete those rows from the group table 1
  // and add those rows to the add table 2
  $('#delete-group-members').on('click', function(){
    console.log("Removing selected members from the potential group table 2 and putting them back in the add table 1.");
    transferSelectedRowsFromTable1ToTable2AndDeleteData($groupMembersTable1, $addMembersTable2);
  });

  // When the user clicks the empty group button,
  // then delete all the rows in the group table 1
  // and add those rows to the add table 2
  $('#empty-group').on('click', function(){
    console.log("Removing all members from the potential group table 2 and putting them back in the add table 1.");
    transferAllRowsFromTable1ToTable2AndDeleteAllData($groupMembersTable1, $addMembersTable2);
  });

  // When the user clicks the add members to group button,
  // then delete those rows from the add table 2
  // and add those rows to the group table 1
  $('#add-group-members').on('click', function() {
    console.log("Transferring selected members from table 1 to group members table 2.");
    transferSelectedRowsFromTable1ToTable2AndAddData($addMembersTable2, $groupMembersTable1);
  });

  // When the table is in card view, display a select/unselect all button
  // Else, hide this button, since it shows up by itself in table view
  toggleSelectAllRowsButtonOnMobile($selectButtonTable2, $addMembersTable2, allCheckedTable2, tableBreakpointForCardView);
  toggleSelectAllRowsButtonOnMobile($selectButtonTable1, $groupMembersTable1, allCheckedTable1, tableBreakpointForCardView);

  // Placeholder function for when the user clicks the create group button to submit the form
  $('#create-group-button').on('click', function(){
    console.log("Submitting form. Editing group...");
    updateOriginalGroupMasterData();
  });

  // When the user clicks the reset form button,
  // reset the info in the desired group data copy array
  // and repopulate the whole form regarding that particular group
  $('#reset-group-info-button').on('click', function(){
    console.log("Undoing all changes. Repopualting the form.");
    var groupMasterId = $groupDropdown.dropdown('get value');
    populateFormUponGroupSelection(groupMasterId);
  });
});

// --- When the window is resized --- //
$(window).on('resize', function(event){
  // When the table is in card view, display a select/unselect all button
  // Else, hide this button, since it shows up by itself in table view
  toggleSelectAllRowsButtonOnMobile($selectButtonTable2, $addMembersTable2, allCheckedTable2, tableBreakpointForCardView);
  toggleSelectAllRowsButtonOnMobile($selectButtonTable1, $groupMembersTable1, allCheckedTable1, tableBreakpointForCardView);
});