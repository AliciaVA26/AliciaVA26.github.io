$(function() {

    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/me.json"
    }).done(function(data){
        var me = data;
        $('#api_me_name').text(me.name);
        page_init(me);
        console.log(me);
    });

/*
    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/subjects.json"
    }).done(function(data){
        console.log(data);
    });
*/

});


function logout(){
  localStorage.removeItem('token');
  window.location.replace('/');
}

