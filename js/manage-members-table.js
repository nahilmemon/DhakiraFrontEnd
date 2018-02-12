// --- Global Variables --- //
// Table Breakpoint
var tableBreakpointForCardView = 768; // bootstrap breakpoint (below 768 = extra small devices)
// Table 1 Variables
var allCheckedTable1 = true; // for the state of the select/unselect all button
var $addMembersTable1 = $('#add-members-table-1');
var $selectButtonTable1 = $('div > #select-button-table-1');
// Table 2 Variables
var allCheckedTable2 = true;
var $deleteMembersTable2 = $('#delete-members-table-2');
var $selectButtonTable2 = $('div > #select-button-table-2');

// --- When the document is fully loaded --- //
$(document).ready(function(){
  // Populate the add members to montage table
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
    $deleteMembersTable2.bootstrapTable({data: data});
  });

  // When the submit add members button is pressed,
  // then obtain all the choices that were selected
  // and do something with them...
  $('#add-members').on('click', function() {
    // Empty the contents of the body and footer divs of the alert modal
    $("#alert-modal-body").empty();
    // Replace alert modal's footer with correctly labeled button
    $("#yes-to-alert").text("Add Members");
    // Retrieving filters
    console.log("Retrieving all selected choices from the add members table.");
    var addMembersSelected = $addMembersTable1.bootstrapTable('getSelections');
    // Tell the user in the alert modal which members they are trying to add.
    var alertBodyString = "<h3>Are you sure you want to add the following people?</h3><ul>";
    for (var i = 0, len = addMembersSelected.length; i < len; i++) {
      alertBodyString += "<li>" + addMembersSelected[i].firstName + " " + addMembersSelected[i].lastName + " (" + addMembersSelected[i].email + ")</li>";
    }
    alertBodyString += "</ul>";
    // Add new desired content to the body div of the alert modal
    $("#alert-modal-body").append(alertBodyString);

    // If the user says yes, then delete them from the table and do something
    $(function () {
      console.log("Confirming selected choices. Transfering members from add list to user database.");
      $('#yes-to-alert').click(function () {
        // Step 1: get the ids and row data of the selected rows from table 1
        var ids = $.map($addMembersTable1.bootstrapTable('getSelections'), function (row) {
          // Step 2: Add the selected rows to table 2
          $deleteMembersTable2.bootstrapTable('append', row);
          return row.id;
        });
        // Step 3: for each row selected in table 1, remove the rows from the first table, using their ids
        $addMembersTable1.bootstrapTable('remove', {
          field: 'id',
          values: ids
        });
        // Step 4: Unselect all choices.
        $addMembersTable1.bootstrapTable('uncheckAll');
        $deleteMembersTable2.bootstrapTable('uncheckAll');
      });
    });
  });

  // When the submit delete members button is pressed,
  // then obtain all the choices that were selected
  // and do something with them...
  $('#delete-members').on('click', function() {
    // Empty the contents of the body div of the alert modal
    $("#alert-modal-body").empty();
    // Replace alert modal's footer with correctly labeled button
    $("#yes-to-alert").text("Delete Members");
    // Retrieving filters
    console.log("Retrieving all selected choices from the delete members table.");
    var deleteMembersSelected = $deleteMembersTable2.bootstrapTable('getSelections');
    // Tell the user in the alert modal which members they are trying to add.
    var alertBodyString = "<h3>Are you sure you want to delete the following people?</h3><ul>";
    for (var i = 0, len = deleteMembersSelected.length; i < len; i++) {
      alertBodyString += "<li>" + deleteMembersSelected[i].firstName + " " + deleteMembersSelected[i].lastName + " (" + deleteMembersSelected[i].email + ")</li>";
    }
    alertBodyString += "</ul>";
    // Add new desired content to the body div of the alert modal
    $("#alert-modal-body").append(alertBodyString);

    // If the user says yes, then delete them from the table and do something
    $(function () {
      console.log("Confirming selected choices. Deleting members from the delete list.");
      $('#yes-to-alert').click(function () {
        // Step 1: get the ids and row data of the selected rows from table 1
        var ids = $.map($deleteMembersTable2.bootstrapTable('getSelections'), function (row) {
          return row.id;
        });
        // Step 3: for each row selected in table 1, remove the rows from the first table, using their ids
        $deleteMembersTable2.bootstrapTable('remove', {
          field: 'id',
          values: ids
        });
      });
    });
  });

  // When the table is in card view, display a select/unselect all button
  // Else, hide this button, since it shows up by itself in table view
  toggleSelectAllRowsButtonOnMobile($selectButtonTable1, $addMembersTable1, allCheckedTable1, tableBreakpointForCardView);
  toggleSelectAllRowsButtonOnMobile($selectButtonTable2, $deleteMembersTable2, allCheckedTable2, tableBreakpointForCardView);
});

// --- When the window is resized --- //
$(window).on('resize', function(event){
  // When the table is in card view, display a select/unselect all button
  // Else, hide this button, since it shows up by itself in table view
  toggleSelectAllRowsButtonOnMobile($selectButtonTable1, $addMembersTable1, allCheckedTable1, tableBreakpointForCardView);
  toggleSelectAllRowsButtonOnMobile($selectButtonTable2, $deleteMembersTable2, allCheckedTable2, tableBreakpointForCardView);
});

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