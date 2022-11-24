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
            $.ajax({
                headers: { Authorization: localStorage.getItem('token') },
                method: "GET",
                url: "http://137.184.208.214/me.json"
            }).done(function(data){
                if(data.kind == "teacher"){
                    window.location.replace('grupos_maestro.html');
                } else {
                    window.location.replace('grupos_alumno.html');
                }
            });
            
            
        }
    });
}
