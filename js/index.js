function login(){
    var params = {
        user_number: $('#user_number').val(),
        password: $('#password').val()
    }
console.log(params);
    $.post("http://137.184.208.214/sessions", params, function( data ) {
        console.log(data);
        //localStorage.setItem('token', data.token);
    });
}
