$(document).ready(function(){
  // Populate the add members table
  var $addTable = $('#add-members-table');
  $addTable.bootstrapTable({
    columns: [{
      checkbox: true,
    }, {
      field: 'id',
      title: 'ID',
      sortable: true,
      visible: false
    }, {
      field: 'firstName',
      title: 'First Name',
      sortable: true
    }, {
      field: 'lastName',
      title: 'Last Name',
      sortable: true
    }, {
      field: 'email',
      title: 'Email',
      sortable: true
    }],
    data: [{
      id: '000001',
      firstName: 'Misa',
      lastName: 'Kaison',
      email: 'misakaison@gmail.com'
    }, {
      id: '000002',
      firstName: 'Elrik',
      lastName: 'Parker',
      email: 'elrik.parker@yahoo.com'
    }, {
      id: '000003',
      firstName: 'Essa',
      lastName: 'Mentoryte',
      email: 'em5632@live.com'
    }]
  });

  // Populate the delete members table
  var $deleteTable = $('#delete-members-table');
  $deleteTable.bootstrapTable({
    columns: [{
      checkbox: true,
    }, {
      field: 'id',
      title: 'ID',
      sortable: true,
      visible: false
    }, {
      field: 'firstName',
      title: 'First Name',
      sortable: true
    }, {
      field: 'lastName',
      title: 'Last Name',
      sortable: true
    }, {
      field: 'email',
      title: 'Email',
      sortable: true
    }],
    data: [{
      id: '000004',
      firstName: 'Sana',
      lastName: 'Ryder',
      email: 's_ryder@hotmail.com'
    }, {
      id: '000005',
      firstName: 'Skyler',
      lastName: 'Melrow',
      email: 'skys_the_limit@live.com'
    }, {
      id: '000006',
      firstName: 'Emma',
      lastName: 'Minks',
      email: 'em8998@gmail.com'
    }, {
      id: '000007',
      firstName: 'Daryn',
      lastName: 'Pleakly',
      email: 'daryn.i.am@gmail.com'
    }]
  });

  // When the reset add members button is pressed,
  // then reset all the choices selected in the add members table
  $('#reset-add-members').on('click', function() {
    console.log("Clearing all selected choices from the add members table.");
    $addTable.bootstrapTable('uncheckAll');
  });

  // When the reset add members button is pressed,
  // then reset all the choices selected in the add members table
  $('#reset-delete-members').on('click', function() {
    console.log("Clearing all selected choices from the delete members table.");
    $deleteTable.bootstrapTable('uncheckAll');
  });

  // When the submit add members button is pressed,
  // then obtain all the choices that were selected
  // and do something with them...
  $('#submit-add-members').on('click', function() {
    // Empty the contents of the body div of the alert modal
    $("#alert-modal-body").empty();
    // Retrieving filters
    console.log("Retrieving all selected choices from the add members table.");
    var addMembersSelected = $addTable.bootstrapTable('getSelections');
    // Tell the user in the alert modal which members they are trying to add.
    var alertBodyString = "<h3>Are you sure you want to add the following people?</h3><ul>";
    for (var i = 0, len = addMembersSelected.length; i < len; i++) {
      alertBodyString += "<li>" + addMembersSelected[i].firstName + " " + addMembersSelected[i].lastName + " (" + addMembersSelected[i].email + ")</li>";
    }
    alertBodyString += "</ul>";
    // Add new desired content to the body div of the alert modal
    $("#alert-modal-body").append(alertBodyString);

    // If the user says no,
    // then reset all the choices selected in the add members table
    $('#no-to-alert').on('click', function() {
      console.log("Clearing all selected choices from the add members table.");
      $addTable.bootstrapTable('uncheckAll');
    });

    // If the user says yes, then delete them from the table and do something
    $(function () {
      console.log("Confirming selected choices. Transfering members from add list to user database.");
      $('#yes-to-alert').click(function () {
        // Add the selected rows to the delete table
        var row = $.map($addTable.bootstrapTable('getSelections'), function (row) {
          return row;
        });
        $deleteTable.bootstrapTable('append', row);
        // Unselect the added rows
        $deleteTable.bootstrapTable('uncheckAll');
        // Remove the selected rows from the add table
        var ids = $.map($addTable.bootstrapTable('getSelections'), function (row) {
          return row.id;
        });
        $addTable.bootstrapTable('remove', {
          field: 'id',
          values: ids
        });
      });
    });
  });

  // When the submit delete members button is pressed,
  // then obtain all the choices that were selected
  // and do something with them...
  $('#submit-delete-members').on('click', function() {
    // Empty the contents of the body div of the alert modal
    $("#alert-modal-body").empty();
    // Retrieving filters
    console.log("Retrieving all selected choices from the delete members table.");
    var deleteMembersSelected = $deleteTable.bootstrapTable('getSelections');
    // Tell the user in the alert modal which members they are trying to add.
    var alertBodyString = "<h3>Are you sure you want to delete the following people?</h3><ul>";
    for (var i = 0, len = deleteMembersSelected.length; i < len; i++) {
      alertBodyString += "<li>" + deleteMembersSelected[i].firstName + " " + deleteMembersSelected[i].lastName + " (" + deleteMembersSelected[i].email + ")</li>";
    }
    alertBodyString += "</ul>";
    // Add new desired content to the body div of the alert modal
    $("#alert-modal-body").append(alertBodyString);

    // If the user says no,
    // then reset all the choices selected in the add members table
    $('#no-to-alert').on('click', function() {
      console.log("Clearing all selected choices from the delete members table.");
      $deleteTable.bootstrapTable('uncheckAll');
    });

    // If the user says yes, then delete them from the table and do something
    $(function () {
      console.log("Confirming selected choices. Deleting members from the delete list.");
      $('#yes-to-alert').click(function () {
        var ids = $.map($deleteTable.bootstrapTable('getSelections'), function (row) {
          return row.id;
        });
        $deleteTable.bootstrapTable('remove', {
          field: 'id',
          values: ids
        });
      });
    });
  });

});

// Gets called whenever the window is resized
$(window).resize(function(){
  // If the screen width is too small,
  // then change the table entries to card view
  // if (window.innerWidth < 500) {
  //   console.log("tiny view");
  //   $("table#add-members-table").data("card-view", true);
  //   console.log($("table#add-members-table").data());
  // } else { // else rest to normal table view
  //   console.log("large view");
  //   $("table#add-members-table").data("card-view", false);
  //   console.log($("table#add-members-table").data());
  // }
});

  // // Enable sorting columns for the add members table
  // $.extend($.fn.bootstrapTable.columnDefaults, {
  //   sortable: true
  // });