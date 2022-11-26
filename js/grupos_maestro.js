function page_init(me) {

  // Render grupos
  for(var i = 0; i < me.groups.length; i++){
    $('#api_groups_container').append(
      '<div class="col-md-4">' +
        '<div class="card mb-3">' +
          '<div class="card-header">' +
            me.groups[i].teacher_name +
          '</div>' +
          '<div class="card-body">' +
            '<h5 class="card-title">'+ me.groups[i].id + '. ' + me.groups[i].subject_name +'</h5>' +
            '<div class="text-end"><a href="/grupo_maestro.html?id='+ me.groups[i].id +'" class="btn btn-primary">Entrar</a></div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

}

function create_group() {
    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "POST",
        data: { group: { subject_id: $('#api_new_group_subject_id').val() } },
        url: "http://137.184.208.214/groups.json"
    }).done(function(data){
      window.location.reload();
    });
}

$(function() {

    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/subjects.json"
    }).done(function(data){
      for(var i = 0; i < data.length; i++){
        $('#api_new_group_subject_id').append('<option value="'+ data[i].id +'">'+ data[i].name +'</option');
      }
    });

});

