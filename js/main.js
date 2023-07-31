//* ~~~~~~~~~~~~~~~~~~~~~ Menu Hamburguesa ~~~~~~~~~~~~~~~~~~~~~ */

const nav = document.querySelector('#nav'); /*Selecciona el id nav*/
const abrir = document.querySelector('#abrir'); /*Selecciona el id abrir*/
const menuItems = document.querySelectorAll('#nav ul li a'); /*seleciona el id nav y las etiquetas dentro del contenedor*/
const botonContacto = document.querySelector('#boton-contacto-movil'); /*selecciona el boton de contacto movil*/

/* ~~~~~~~~~Lineas~~~~~~~~~ */
const linea1 = document.querySelector('.linea1');
const linea2 = document.querySelector('.linea2');
const linea3 = document.querySelector('.linea3');
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */

let menuHamburguesa = () => {
    /* La variable menuHamburguesa almacena una funcion tipo flecha que luego sera llamada por el nombre de la variable en otra parte del codigo. */
    if (nav.classList.contains('nav--elements-visible')) {
        /* Se valida si el HTML contiene la clase nav-elements-visible, si es asi se ejecuta la condicion */
        nav.classList.remove('nav--elements-visible');
        linea1.classList.remove('linea1-visible');
        linea2.classList.remove('linea2-visible');
        linea3.classList.remove('linea3-visible');
    } else {
        nav.classList.add('nav--elements-visible'); /* Agrega la clase en el HTML, ver el CSS donde esta el estilo predeterminado */
        linea1.classList.add('linea1-visible');
        linea2.classList.add('linea2-visible');
        linea3.classList.add('linea3-visible');
    }
};

abrir.onclick = menuHamburguesa; // Al hacer click en el icono del menu hamburguesa se va a ejecutar la funcion menuHamburguesa
botonContacto.onclick = menuHamburguesa;

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuHamburguesa();
    });
}); /* Para cada elemento que esta dentro del nav al hacer click se ejecuta la funcion del menuHamburguesa */

/* ~~~~~~~~~~~~~~~~~~~~~ FUNCIONALIDAD DE CERRAR SESION Y LOGEARSE ~~~~~~~~~~~~~~~~~~~~~ */

/*
El evento "DOMContentLoaded" se dispara cuando el contenido HTML está
completamente cargado y analizado. En este caso, se utiliza para verificar
el estado de localStorage, que contiene información sobre la sesión del
usuario, y ajustar la visualización de la página en consecuencia, basándose
en las condiciones establecidas.
*/
document.addEventListener('DOMContentLoaded', () => {
    let sesion_login = document.querySelector('.nav--right'); // Selecciona la Clase ".nav--right" que se ubica en index.html linea 84 enel contenedor <nav>.
    let sesion_login_movil = document.querySelector('.nav--rigth-2'); // Selecciona la Clase ".nav--right2" que se ubica en index.html linea 55 enel contenedor <nav>.

    let sesion_perfil = document.querySelector('.sesion-container'); // Selecciona la Clase ".sesion-container" que se ubica en index.html linea 68 enel Contenedor de <nav>
    let sesion_perfil_movil = document.querySelector('.sesion-container-movil'); // Selecciona la Clase ".sesion-container-movil" que se ubica en index.html linea 39 enel Contenedor de <nav>

    let boton_cerrarsesion = document.getElementById('cerrar-sesion'); // Selecciona el ID 'cerrar-sesion' que se ubica en la linea 78 de index.html.
    let boton_cerrarsesion_movil = document.getElementById('cerrar-sesion-movil'); // Selecciona el ID 'cerrar-sesion-movil' que se ubica en la linea 49 de index.html.

    /*  window.matchMedia permite saber si una condición de tamaño de pantalla se cumple o no.
    en el codigo se usa Para verificar si los elementos de que estan entre 0px a 1030px de ancho se 
    agregen los estilos y contenedores que se deben que monstrar en la vista movil. y despues si
    la vista se pasa de 1030px de ancho . se agregan los estilos y contenedores que se deben que
    monstrar en la vista escritorio. */

    const mediaQuery = window.matchMedia('(max-width: 1030px)');

    const media_movil = event => {
        // Funcion que se Declara para Comprobar la Vista si es Movil y Escritorio.

        const cerrar_abrir = () => {
            localStorage.setItem('sesion', 'false'); // Guarda en Localstorage el valor false, para cuando se recarge la pagina otra funcion compruebe de que se esta logeando.
            location.reload(); // esta Funcion Recarga la pagina cuando le damos cerrar sesion para evitar bugs visuales.
        };

        /* El método .matches comprueba si los parámetros proporcionados (en este caso, la función de mediaQuery)
        cumplen con los requisitos especificados. Si los requisitos se cumplen, el método devuelve true. 
        como lo que esta haciendo aca. de que si la vista esta menos que 1030px se activen los contenedores de vista movil.*/

        if (event.matches) {
            if (localStorage.getItem('sesion') === 'true') {
                // Este Comprueba el valor guardado en localstorage es true y Esto permite activar los estilos de los contenedores para la vista móvil.
                sesion_login.style.display = 'none'; // Activa el Display: none; al Contenedor de los Botones de login de vista escritorio. para que no aparezca enel contenedor de login movil.
                sesion_perfil.style.display = 'none'; // Activa el Display: none; al contenedor del perfil de escritorio. para que no aparesca enel contenedor de login movil.
                sesion_login_movil.style.display = 'none'; // Activa el Display: none; al Contenedor de los Botones de login de vista movil.
                sesion_perfil_movil.style.display = 'flex'; // Activa el Display: flex; al contenedor del perfil de vista movil.
            } else {
                sesion_login.style.display = 'none'; // Activa el Display: none; al Contenedor de los Botones de login de vista escritorio. para que no aparezca enel contenedor de login movil.
                sesion_perfil.style.display = 'none'; // Activa el Display: none; al contenedor del perfil de escritorio. para que no aparesca enel contenedor de login movil.
                sesion_login_movil.style.display = 'flex'; // Activa el Display: flex; al contenedor del login de vista movil.
                sesion_perfil_movil.style.display = 'none'; // Activa el Display: none; al Contenedor perfil de vista movil.
            }
            boton_cerrarsesion_movil.onclick = cerrar_abrir; // CUando se le da click al Boton de cerrar sesion enel menu hamburguesa. se activa la funcion cerrar_abrir_movil.
        } else {
            // Este Comprueba de que si la vista esta por mas de 1030px. y activa los contenedores de vista escritorio.
            if (localStorage.getItem('sesion') === 'true') {
                // Este Comprueba el valor guardado en localstorage es true y Esto permite activar los estilos de los contenedores para la vista móvil.
                sesion_login.style.display = 'none'; // Activa el Display: none; al Contenedor de los Botones de login de vista escritorio.
                sesion_perfil.style.display = 'flex'; // Activa el Display: flex; al contenedor del perfil de vista escritorio.
                sesion_login_movil.style.display = 'none'; // Activa el Display: none; al Contenedor de los Botones de login de vista movil.
                sesion_perfil_movil.style.display = 'none'; // Activa el Display: none; al Contenedor perfil de vista movil.
            } else {
                sesion_login.style.display = 'flex'; // Activa el Display: flex; al contenedor de login de vista escritorio.
                sesion_perfil.style.display = 'none'; // Activa el Display: none; al contenedor del perfil de escritorio.
                sesion_login_movil.style.display = 'none'; // Activa el Display: none; al Contenedor de los Botones de login de vista movil.
                sesion_perfil_movil.style.display = 'none'; // Activa el Display: none; al Contenedor perfil de vista movil.
            }
            boton_cerrarsesion.onclick = cerrar_abrir; // CUando se le da click al Boton de cerrar sesion. se activa la funcion cerrar_abrir.
        }
    };

    mediaQuery.onchange = media_movil; // El evento .onchange  se activa cuando el contenido cambia. el cual lo usamos en funcion de mediaQuery. que si se cambia la vista a movil o escritorio.

    media_movil(mediaQuery); // Ingresa el Parametro de MediaQuery. para verificar los Condicionales de los cuales comprueban de si es vista movil o vista escritorio.
});

/*  ~~~~~~~~~~~~~~~~~~~~~ MENU DESLIZANTE DE PANEL DE SESION ~~~~~~~~~~~~~~~~~~~~~  */

let panel = document.getElementById('perfil-escritorio'); // Selecciona el ID 'perfil-escritorio' que se ubica en la linea 70 de index.html.
let panel_movil = document.getElementById('perfil-movil'); // Selecciona el ID 'perfil-movil' que se ubica en la linea 41 de index.html.
let barra = document.getElementById('menu'); // Selecciona el ID 'perfil-movil' que se ubica en la linea 74 de index.html.
let barra_deslizadora = document.querySelector('.barra-deslizadora'); // Selecciona la Clase ".barra-deslizadora", que se ubica en la linea 75 de index.html.
let barra_deslizadora_movil = document.querySelector('.barra-deslizadora-movil'); // Selecciona la Clase ".barra-deslizadora-movil", que se ubica en la linea 46 de index.html.

let menu = () => {
    // Funcion que Crear y Elimina el Contenedor de la barra deslizadora en vista escritoriol. el cual tiene css agregado en styles.css
    if (barra_deslizadora.classList.contains('barra-deslizadora-visible')) {
        // Comprueba si la clase "barra-deslizadora-visible" esta creada.
        barra_deslizadora.classList.remove('barra-deslizadora-visible'); // Elimina la clase "barra-deslizadora-visible" el cual hace desaparecer el contenedor de vista escritorio.
    } else {
        barra_deslizadora.classList.add('barra-deslizadora-visible'); // Crea la clase "barra-deslizadora-visible" en la linea 75 de index.html. el cual tiene css agregado en styles.css
    }
};

let menu_movil = () => {
    // Funcion que Crear y Elimina el Contenedor de la barra deslizadora-movil en vista movil. el cual tiene css agregado en styles.css enel mediaquery de nav
    if (barra_deslizadora_movil.classList.contains('barra-deslizadora-movil-visible')) {
        // Comprueba si la clase "barra-deslizadora-movil-visible" esta creada.
        barra_deslizadora_movil.classList.remove('barra-deslizadora-movil-visible'); // Elimina la clase "barra-deslizadora-movil-visible" el cual hace desaparecer el contenedor de vista movil.
    } else {
        barra_deslizadora_movil.classList.add('barra-deslizadora-movil-visible'); // Crea la clase "barra-deslizadora-movil-visible" en la linea 46 de index.html. el cual tiene css agregado en styles.css enel mediaquery de nav
    }
};

panel.addEventListener('click', menu); // Activa el menu de la vista escritorio y lo cierra.
panel_movil.addEventListener('click', menu_movil); // Activa el menu de la vista movil y lo cierra.

/* PARA MOSTRAR EL NOMBRE ENEL PANEL PERFIL */

var perfil_nombre_movil = document.getElementById('name-movil');
var perfil_nombre_escritorio = document.getElementById('name-escritorio');

perfil_nombre_escritorio.innerHTML = localStorage.getItem('nombreRegistrado');
perfil_nombre_movil.innerHTML = localStorage.getItem('nombreRegistrado');
