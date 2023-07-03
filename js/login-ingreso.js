const ojo_ingreso = document.getElementById('ojo-inicio'); //Obtiene el id ojo que esta en la etiqueta img
const input_ojo_ingreso = document.getElementById('clave-ingreso'); // obtiene el id clave del input

ojo_ingreso.addEventListener( "click", function() { // se agrega el evento al hacer click y se pasa una funcion
    if( input_ojo_ingreso.type == "password") // se valida si el tipo del input es de tipo password
    {
        input_ojo_ingreso.type= "text"; // si el tipo del input es de tipo password se cambia a text a para mostrar el texto
        ojo_ingreso.style.opacity = 1; // se le da el estilo 1 para que se muestre el logo
    }else{
        input_ojo_ingreso.type= "password"; // si no es diferente a password el tipo pone en password
        ojo_ingreso.style.opacity = 0.6; // // se le da el estilo 1 para opacar el logo
    }
});