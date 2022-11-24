function page_init(){ }


$(function() {

    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/groups/"+ window.location.search.split('=')[1] +".json"
    }).done(function(data){

      $('#api_group_header').text(data.id + '. ' + data.subject_name);
      for (var i = 0; i < data.members.length; i++) {
        $('#api_members').append('<li class="list-group-item">' + data.members[i].name +'</li>');
      }
      for (var i = 0; i < data.assignments.length; i++) {
        $('#api_assignments').append(
          '<li class="list-group-item d-flex justify-content-between align-items-start">' +
            '<div class="ms-2 me-auto">' +
              '<div class="fw-bold">Tarea</div>' +
              data.assignments[i].description +
            '</div>' +
            '<span class="badge bg-primary rounded-pill">'+ data.assignments[i].value +'</span>' +
          '</li>'
        );
      }

    });

});

