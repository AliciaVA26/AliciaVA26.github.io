function login(){
    $.ajax({
        method: "POST",
        url: "http://137.184.208.214/sessions.json",
        data: {
            user_number: $('#user_number').val(),
            password: $('#password').val()
        }
    }).done(function(data){
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.replace('/groups.html');
        }
    });
}
