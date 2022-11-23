function busca(){
    var materia = document.getElementById("busca_grupo").value;

    $.ajax({
        headers: { Authorization: localStorage.getItem('token') },
        method: "GET",
        url: "http://137.184.208.214/subjects.json"
    }).done(function(data){
       
        var BreakException = {};
        
        try{
            data.forEach(element => {
                if(element.name == materia){
                    console.log(element.name);
                    subject_name = element.name;
                    throw BreakException;
                }
            });
        }catch (e) {
            if (e !== BreakException){
               throw e; 
            } 
        }

        contenedorMateria = document.getElementById("contenedorMateria");

        contenedorMateria.innerHTML = "";

        subject_container = "<a href="+subject_name+".html class=subject_text >"+subject_name+"</a>";
       
        $.ajax({
            headers: { Authorization: localStorage.getItem('token') },
            method: "GET",
            url: "http://137.184.208.214/me.json"
        }).done(function(data){
            if(data.kind == "teacher"){
                console.log(data.kind)
                subject_container += "<button class=busca_submit>Editar</button>";
                contenedorMateria.innerHTML = subject_container;
            }
        });
        
        contenedorMateria.innerHTML = subject_container;
        console.log(subject_name);
        
    });
}
