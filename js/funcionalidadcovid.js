var error = false;
var mensajeError = "";

function validar(){
    var error = false;
    var mensajeError = "";
    var enfermedad = 0;

    if(document.getElementById("nombre").value== ''){
        error=true;
        mensajeError+="<p>El campo 'Nombre y Apellido/s' no puede estar vacio</p>";
    }

    if(document.getElementById("dni").value== ''){
        error=true;
        mensajeError+="<p>El campo 'DNI' no puede estar vacio</p>";
    }

    if(document.getElementById("telefono").value== ''){
        error=true;
        mensajeError+="<p>El campo 'Teléfono' no puede estar vacio</p>";
    }

    var seleccionado=false;
    var opciones = document.getElementsByName("interior");
    for (i in opciones){
        if (opciones [i].checked){
            seleccionado=true;
            if(opciones[i].value== 'si'){
            }
        } 
    } if (!seleccionado){
        error=true;
        mensajeError+="<p>Aclare si viajó al exterior del país</p>";
    }

    var seleccionado=false;
    var opciones = document.getElementsByName("fiebre");
    for (i in opciones){
        if (opciones [i].checked){
            seleccionado=true;
            if(opciones[i].value== 'si'){
            enfermedad++;
            }
        } 
    } if (!seleccionado){
        error=true;
        mensajeError+="<p>Aclare si tuvo fiebre</p>";
    }

    var seleccionado=false;
    var opciones = document.getElementsByName("dolor");
    for (i in opciones){
        if (opciones [i].checked){
            seleccionado=true;
            if(opciones[i].value== 'si'){
                enfermedad++;
                }
        } 
    } if (!seleccionado){
        error=true;
        mensajeError+="<p>Aclare si tuvo dolor de cabeza</p>";
    }

    var seleccionado=false;
    var opciones = document.getElementsByName("tos");
    for (i in opciones){
        if (opciones [i].checked){
            seleccionado=true;
            if(opciones[i].value== 'si'){
                enfermedad++;
            }
        } 
    } if (!seleccionado){
        error=true;
        mensajeError+="<p>Aclare si tuvo tos persistente</p>";
    }

    var seleccionado=false;
    var opciones = document.getElementsByName("garganta");
    for (i in opciones){
        if (opciones [i].checked){
            seleccionado=true;
            if(opciones[i].value== 'si'){
                enfermedad++;
            }
        } 
    } if (!seleccionado){
        error=true;
        mensajeError+="<p>Aclare si tuvo dolor de garganta</p>";
    }

    var seleccionado=false;
    var opciones = document.getElementsByName("respirar");
    for (i in opciones){
        if (opciones [i].checked){
            seleccionado=true;
            if(opciones[i].value== 'si'){
                enfermedad++;
            }
        } 
    } if (!seleccionado){
        error=true;
        mensajeError+="<p>Aclare si tuvo dificultad para respirar</p>";
    }

    mostrarOcultar();
    mostrarOcultar2();

    if(error){
        document.getElementById("mensaje").innerHTML=mensajeError;
        return false;
    } else {
        alert("El formulario fue completado correctamente. " + enfermedad + " síntomas de COVID-19 fueron registrados")
        return false;
    }
}

function mostrarOcultar(){
    var error = false;
    var mensajeError = "";

    var opciones=document.getElementsByName("interior");
    for(i in opciones){
        if(opciones[i].value=="si" && opciones[i].checked){
            document.getElementById("pais").style.display="block";
            if(document.getElementById("paises").value=='seleccione'){
                error=true;
                mensajeError+="<p>Seleccione el país visitado</p>";
            }
        } 
        if(opciones[i].value=="no" && opciones[i].checked){
            document.getElementById("pais").style.display="none";
        }
    } 
}  

function mostrarOcultar2(){ 
    var error = false;
    var mensajeError = "";
    var opciones=document.getElementsByName("respirar");
    for(i in opciones){
        if(opciones[i].value=="si" && opciones[i].checked){
            document.getElementById("dir").style.display="block";
            if(document.getElementById("direccion").value== ''){
                error=true;
                mensajeError+="<p>El campo 'Dirección' no puede estar vacio</p>";
            }
        }
        if(opciones[i].value=="no" && opciones[i].checked){
            document.getElementById("dir").style.display="none";
            if(document.getElementById("direccion").value== ''){
                error=false;
            }
        }
    } 
 }