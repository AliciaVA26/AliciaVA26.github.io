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
            '<div class="text-end"><a href="/grupo_alumno.html?id='+ me.groups[i].id +'" class="btn btn-primary">Entrar</a></div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

}

