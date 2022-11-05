$(function() {

    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/me.json"
    }).done(function(data){
        console.log(data);
    });

});
