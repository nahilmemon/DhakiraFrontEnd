// --- Global Variables --- //
// Table Breakpoint
var tableBreakpointForCardView = 701;
// Table 1 Variables
var allCheckedTable1 = true; // for the state of the select/unselect all button
var $addMembersTable1 = $('#add-members-table-1');
var $selectButtonTable1 = $('div > #select-button-table-1');
// Table 2 Variables
var allCheckedTable2 = true;
var $potentionalGroupTable2 = $('#potential-group-table-2');
var $selectButtonTable2 = $('div > #select-button-table-2');

// --- When the document is fully loaded --- //
$(document).ready(function(){
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
    $addMembersTable1.bootstrapTable({data: data});
  });

  // Populate the selected group members table
  $(function () {
    // Note: this step is necessary for the table to initialize properly
    // but this creates a row of '-' (undefined strings)
    var data = [{}];
    $potentionalGroupTable2.bootstrapTable({data: data});
    // Delete the row of undefined strings
    $potentionalGroupTable2.bootstrapTable('removeAll');
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