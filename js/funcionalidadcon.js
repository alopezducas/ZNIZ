var regexCampoEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexCampoTel= /^[0-9]{4}[-][0-9]{4}$/


function validar2(){
    var error = false; 
    var mensajeError = "";
    if(document.getElementById("nombre").value==''){
        error = true;
        mensajeError+="<p>El campo 'Nombre y Apellido/s' no puede estar vacio</p>"; 
    }

    if(!regexCampoTel.test(document.getElementById("telefono").value)){
        error=true;
        mensajeError+="<p>Ingrese un teléfono correcto. Ejemplo: 4444-4444</p>"; 
    } if (document.getElementById("telefono").value==''){
        error=false;
    }

    if (!regexCampoEmail.test(document.getElementById("email").value)){
        error = true;
        mensajeError+="<p>Ingrese un Email válido</p>";
    }

    if(document.getElementById("consulta").value== ''){
        error=true;
        mensajeError+="<p>El campo 'Consulta' no puede estar vacio</p>";
    }

    contarCaracteres()

    if(error){
        document.getElementById("mensaje").innerHTML=mensajeError; 
        return false;
    }else{
        return true;
    }

}

const cantidad = 1000;

function contarCaracteres(){
    var caracteres = document.getElementById("consulta").value.length;
    var restantes = cantidad-caracteres;
    document.getElementById("caracteres").innerHTML=restantes;

}