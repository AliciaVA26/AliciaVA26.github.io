function inicia_sesion(){
    var usuarioRef = db.collection("usuario");
        var login = true;
        var passwordMatch;

        passwordCheck = document.getElementById("password").value;
        usuarioCheck = document.getElementById("email").value;
        tipoUsuario = document.getElementById("tipo_usuario").value;

        console.log("Este ese Check el que se ingresa "+passwordCheck);

        console.log("Este es el tipo de usuario que se ingresa "+tipoUsuario);

        switch(tipoUsuario){
            case "Maestro": tipoUsuario_num = 1;
            break;
            case "Alumno": tipoUsuario_num = 2;
            break;
            default: tipoUsuario_num = 0;
            break;
        }
        console.log("Este es el tipo de usuario que se ingresa "+tipoUsuario_num);
       
        usuarioRef.where("email","==", usuarioCheck).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.data().password); Mostrar datos
                passwordMatch = doc.data().password;
                console.log("Este ese Match el correcto "+passwordMatch);
                //Valida en la base de datos el tipo de usuario
                usuarioTipo = doc.data().tipo_miembro;
                console.log("Este es el tipo de usuario correcto "+usuarioTipo);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            
        });

        

        setTimeout(function(){
            if((passwordMatch != passwordCheck) || (usuarioTipo != tipoUsuario_num)){
                alert("Ingrese los datos correctos");
                login = false;
            }

            if(login == true){
                alert("Ingresó con éxito");

                if(tipoUsuario == "Maestro"){
                    window.location.href = "/JS/grupos_maestro.html";
                }
                else{
                    window.location.href = "/JS/grupos_alumno.html";
                }
            }
        }, 2000);
}