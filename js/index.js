function login(){
    console.log('login fun');
    var params = {
        matricula: $('#matricula').val(),
        password: $('#password').val()
    }

    $.post("http://127.0.0.1/sessions", params, function( data ) {
        console.log(data);
        //localStorage.setItem('token', data.token);
    });
}
