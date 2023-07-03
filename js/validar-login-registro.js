const formulario = document.getElementById('formulario'); // selecciona en el dom el id formulario que contiene al formulario, es decir donde estan los labels e inputs
const inputs = document.querySelectorAll('#formulario input'); // selecciona todo el formulario como tal y los inputs del mismo

const expresionesRegulares = {
    nombreYApellido: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,30}$/, 
    /*Esta expresión regular valida nombres que cumplan los siguientes requisitos: 
    - Deben tener al menos 2 caracteres. 
    - Deben tener como máximo 30 caracteres. 
    - Solo se permiten letras y espacios en blanco. 
    - Se permiten letras con acentos y la letra "ñ". */
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
    /* ^  indica el inicio de la cadena. 
    -  [a-zA-Z0-9._%+-]+  indica que se aceptan letras, números y los caracteres especiales  ._%+-  antes de la arroba, y que se    pueden repetir varias veces. 
    -  @  indica que debe haber un arroba después de los caracteres permitidos antes del arroba. 
    -  [a-zA-Z0-9.-]+  indica que se aceptan letras, números y los caracteres especiales  -  y  .  después de la arroba, y que se pueden repetir varias veces. 
    -  \.  indica que debe haber un punto después del dominio. 
    -  [a-zA-Z]{2,}  indica que el dominio debe tener al menos dos letras. 
    -  $  indica el final de la cadena.*/
    clave: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    /*Esta expresión regular valida contraseñas que cumplan los siguientes requisitos: 
    - Al menos 8 caracteres de longitud. 
    - Al menos una letra mayúscula o minúscula. 
    - Al menos un número. 
    - Al menos un carácter especial. 
    -Para confirmar una contraseña, la expresión regular es la misma que la utilizada para validar la contraseña original..*/
}

const campos = {
    nombreYApellido: false,
    correo: false,
    clave: false,
    confirm_clave: false,
    fechaNacimiento: false,
    confirmarCorreo: false
};

const validarInput = (input) => { /*(input) es como la i en un for, es la variable de control de la funcion*/
const campo = input.parentElement; /*obtiene el elemento padre del input actual y lo asigna a la variable campo. El padre es el div que tiene la clase campo.*/
const error = campo.querySelector('.formulario-error');

switch (input.name) { // seleciona el nombre del input
    case "nombre": // selecciona el name que esta dentro del div campo
    case "apellido": // selecciona el name que esta dentro del div campo
        if (expresionesRegulares.nombreYApellido.test(input.value))  // como nombre y apellido "es lo mismo", la validacion para ambos es igual, value valida lo que se ingresa al input con lo que hay en la expresion regular
        {
            campo.classList.remove('inputs-error'); //clases de css, revisar el css, remove quita
            error.classList.remove('formulario-error-activo'); //clases de css, revisar el css
            campos.nombreYApellido = true;
        } else {
            campo.classList.add('inputs-error');
            error.classList.add('formulario-error-activo');
            campos.nombreYApellido = false;
        }
    break;

    case "correo":
        if (expresionesRegulares.correo.test(input.value)) { // test() valida que si la cadena cumple con lo que establece la expresion regular
            campo.classList.remove('inputs-error');
            error.classList.remove('formulario-error-activo');
            campos.correo = true;
        } else {
            campo.classList.add('inputs-error');
            error.classList.add('formulario-error-activo');
            campos.correo = false;
        }
    break;

    case "confirmar-correo":

    const validarCorreo = document.getElementById('correo'); // obtiene lo que este guardado dentro de clave
    if (input.value === validarCorreo.value) { // valida si lo ingresado dentro de clave es igual a lo que hay en confirmar clave
        campo.classList.remove('inputs-error');
        error.classList.remove('formulario-error-activo');
        campos.confirmarCorreo = true;
    } else {
        campo.classList.add('inputs-error');
        error.classList.add('formulario-error-activo');
        campos.confirmarCorreo = false;
    }

    break;

    case "clave":
        if (expresionesRegulares.clave.test(input.value)) {
            campo.classList.remove('inputs-error');
            error.classList.remove('formulario-error-activo');
            campos.clave = true;
        } else {
            campo.classList.add('inputs-error');
            error.classList.add('formulario-error-activo');
            campos.clave = false;
        }
    break;

    case "confirmar-clave":
        const claveInput = document.getElementById('clave'); // obtiene lo que este guardado dentro de clave
        if (input.value === claveInput.value) { // valida si lo ingresado dentro de clave es igual a lo que hay en confirmar clave
            campo.classList.remove('inputs-error');
            error.classList.remove('formulario-error-activo');
            campos.confirm_clave = true;
        } else {
            campo.classList.add('inputs-error');
            error.classList.add('formulario-error-activo');
            campos.confirm_clave = false;
        }
    break;
  }
};
    
inputs.forEach((input) => { // valida todos los inputs del formulario
    input.addEventListener('keyup', () => validarInput(input)); // keyip valida cuando se esta escribiendo en el input
    input.addEventListener('blur', () => validarInput(input)); // blur valida cuando se hace clic fuera del formulario al estar escribiendo y hace que de un error
});

const botonRegistro = document.getElementById('registrarse');
if (botonRegistro) {
    botonRegistro.addEventListener('click', (e) => {
        e.preventDefault(); // hace que al dar submit no se envie nada a ningun lado
        inputs.forEach((input) => {
            validarInput(input); //ejecuta validar input para todos los inputs del formulario
        });

        if (campos.nombreYApellido && campos.correo && campos.clave && campos.confirm_clave && campos.confirmarCorreo) { //valida que todos los campos esten llenos
            Swal.fire({
                title: 'Usuario Registrado!',
                text: 'Haz click en el botón para continuar!',
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'login-ingreso.html' // Reemplaza con la URL de la página a la que deseas redirigir
                }
            });
            
            document.getElementById('formulario-no-enviado').classList.remove('formulario-no-enviado-activo');
            
            const usuarioIngresado = document.getElementById('correo').value; // guarda el dato ingresado en el input correo
            const claveIngresada = document.getElementById('clave').value; // guarda el dato ingresado en el input clave
    
            localStorage.setItem('usuarioIngreso', usuarioIngresado); // guardo en localStprage los datos ingresados 
            localStorage.setItem('claveIngreso', claveIngresada); // guardo en localStorage los datos ingresados 
            
        } else {
            document.getElementById('formulario-no-enviado').classList.add('formulario-no-enviado-activo');
        }
    
    });
}

/***************************INICIAR SESION**************************************/

const ingresar = document.getElementById('ingresar'); // seleciona el id enviar del boton de inciar sesion
if (ingresar) {
ingresar.addEventListener("click", (e) => {
    const validarIngreso = document.getElementById('correo-ingreso').value; // obtiene el id del input correo
    const validarClave = document.getElementById('clave-ingreso').value; // obtiene el id del input contraseña
    const usuarioIngresado = localStorage.getItem('usuarioIngreso'); // guarda lo que esta alcenado en la llave de localStorage de correo
    const claveIngresada = localStorage.getItem('claveIngreso'); // guarda lo que esta alcenado en la llave de localStorage de contraseña

        if (validarIngreso === usuarioIngresado && validarClave === claveIngresada) { // valida que lo que se escriba en el input correo y contraseña coincidan con lo que hay guardado en local store
            window.location.href = 'vista-login-ingreso'; // se accede al login (evento de ventana)
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...Algo salió mal!',
                text: 'Verifica los datos ingresados!'
            });
        }   
    });
}   

/*************MOSTRAR CONTRASEÑA***********************/

const ojo = document.getElementById('ojo'); //Obtiene el id ojo que esta en la etiqueta img
const input_ojo = document.getElementById('clave'); // obtiene el id clave del input

ojo.addEventListener( "click", function() { // se agrega el evento al hacer click y se pasa una funcion
    if( input_ojo.type == "password") // se valida si el tipo del input es de tipo password
    {
    input_ojo.type= "text"; // si el tipo del input es de tipo password se cambia a text a para mostrar el texto
        ojo.style.opacity = 1; // se le da el estilo 1 para que se muestre el logo
    }else{
        input_ojo.type= "password"; // si no es diferente a password el tipo pone en password
        ojo.style.opacity = 0.6; // // se le da el estilo 1 para opacar el logo
    }
});

/*Codigo para confirmar clave registro*/

const ojo_clave = document.getElementById('ojo-clave');
const input_ojo_clave = document.getElementById('confirmar-clave');

ojo_clave.addEventListener( "click", function() {
    if( input_ojo_clave.type == "password")
    {
        input_ojo_clave.type= "text";
        ojo_clave.style.opacity = 1;
    }else{
        input_ojo_clave.type= "password";
        ojo_clave.style.opacity = 0.6;
    }
});



