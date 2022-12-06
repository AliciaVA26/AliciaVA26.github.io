function page_init(me){

  for (var i = 0; i < me.homeworks.length; i++) {
    $('#badge_assignment_id_' + me.homeworks[i].assignment_id).removeClass('bg-primary').addClass('bg-success');
  }

}


$(function() {

    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/groups/"+ window.location.search.split('=')[1] +".json"
    }).done(function(data){

      $('#api_group_header').text(data.id + '. ' + data.subject_name);
      $('#api_token').val(localStorage.getItem('token'));

      for (var i = 0; i < data.members.length; i++) {
        $('#api_members').append('<li class="list-group-item">' + data.members[i].user_name +'</li>');
      }

      for (var i = 0; i < data.assignments.length; i++) {
        $('#api_assignments').append(
          '<li class="list-group-item d-flex justify-content-between align-items-start">' +
            '<div class="ms-2 me-auto">' +
              '<div class="fw-bold">Tarea</div>' +
              data.assignments[i].description +
            '</div>' +
            '<span class="badge bg-primary rounded-pill" id="badge_assignment_id_'+ data.assignments[i].id +'">'+ data.assignments[i].value +'</span>' +
          '</li>'
        );

        $('#homework_assignment_id').append('<option value="'+ data.assignments[i].id +'">'+ data.assignments[i].description +'</option>');
      }

      for (var i = 0; i < data.lectures.length; i++) {
        $('#api_lectures').append(
          '<div class="accordion-item">' +
            '<h2 class="accordion-header" id="heading'+ data.lectures[i].id +'">' +
              '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+ data.lectures[i].id +'" aria-expanded="false" aria-controls="collapse'+ data.lectures[i].id +'">' +
                'Clase #'+ (i+1) +
              '</button>' +
            '</h2>' +
            '<div id="collapse'+ data.lectures[i].id +'" class="accordion-collapse collapse" aria-labelledby="heading'+ data.lectures[i].id +'" data-bs-parent="#api_lectures">' +
              '<div class="accordion-body">' +
                '<video width="100%" controls>' +
                  '<source src="'+ data.lectures[i].video_url +'" type="video/mp4">' +
                '</video>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
      }


      $.ajax({
          headers: { Authorization: localStorage.getItem('token') },
          method: "GET",
          url: "http://137.184.208.214/me.json"
      }).done(function(data){
          page_init(data);
      });


    });

});

