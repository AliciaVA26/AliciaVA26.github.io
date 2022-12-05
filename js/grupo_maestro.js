function page_init(){ }

function del(lecture_id) {
    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "DELETE",
        url: "http://137.184.208.214/lectures/"+ lecture_id +".json"
    }).done(function(data){
      $('#lecture_id_'+lecture_id).remove();
    });
}

function member_delete(member_id) {
    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "DELETE",
        url: "http://137.184.208.214/members/"+ member_id +".json"
    }).done(function(data){
      window.location.reload();
    });
}

function member_add(user_id) {
    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "POST",
        data: { member: { group_id: $('#lecture_group_id').val(), user_id: user_id } },
        url: "http://137.184.208.214/members.json"
    }).done(function(data){
      window.location.reload();
    });
}

function assignment_add(user_id) {
    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "POST",
        data: { assignment: { group_id: $('#lecture_group_id').val(), description: $('#assignment_description').val(), value: $('#assignment_value').val() } },
        url: "http://137.184.208.214/assignments.json"
    }).done(function(data){
      window.location.reload();
    });
}


$(function() {

    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/groups/"+ window.location.search.split('=')[1] +".json"
    }).done(function(data){

      $('#api_group_header').text(data.id + '. ' + data.subject_name);
      $('#lecture_group_id').val(data.id);
      $('#api_token').val(localStorage.getItem('token'));

      for (var i = 0; i < data.members.length; i++) {
        $('#api_members').append('<li class="list-group-item"><button class="btn btn-sm btn-outline-danger" onclick="member_delete('+ data.members[i].id +')">-</button> ' + data.members[i].user_name +'</li>');
      }

      for (var i = 0; i < data.not_members.length; i++) {
        $('#api_not_members').append('<li class="list-group-item"><button class="btn btn-sm btn-outline-primary" onclick="member_add('+ data.not_members[i].id +')">+</button> ' + data.not_members[i].name +'</li>');
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

      for (var i = 0; i < data.lectures.length; i++) {
        $('#api_lectures_container').append(
          '<div class="col-md-4" id="lecture_id_'+ data.lectures[i].id +'">' +
            '<div class="card mb-3">' +
              '<div class="card-body">' +
                '<video width="100%" controls>' +
                  '<source src="'+ data.lectures[i].video_url +'" type="video/mp4">' +
                '</video>' +
                '<button class="btn btn-danger" onclick="del('+ data.lectures[i].id +')">X</button>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
      }

    });

});

