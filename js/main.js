$(function() {

    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/me.json"
    }).done(function(data){
        var me = data;
        $('#api_me_name').text(me.name);
        page_init(me);
    });

});


function logout(){
  localStorage.removeItem('token');
  window.location.replace('/');
}

