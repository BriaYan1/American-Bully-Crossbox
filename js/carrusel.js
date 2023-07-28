let imagenes = [ /*Arreglo que contiene las imagenes */
    "assets/carrusel/imagenes/1.jpg",
    "assets/carrusel/imagenes/2.jpg",
    "assets/carrusel/imagenes/3.jpg",
    "assets/carrusel/imagenes/4.jpg",
    "assets/carrusel/imagenes/5.jpg",
    "assets/carrusel/imagenes/6.jpg",
    "assets/carrusel/imagenes/7.jpg",
    "assets/carrusel/imagenes/8.jpg",
    "assets/carrusel/imagenes/9.jpg",
    "assets/carrusel/imagenes/10.jpg",
    "assets/carrusel/imagenes/11.jpg",
    "assets/carrusel/imagenes/12.jpg",
    "assets/carrusel/imagenes/13.jpg"
];

document.Imagen.src = imagenes[0]; /*Muestra la primera imagen en el carrusel*/
let sliderDerecho = document.querySelector(".slider-derecho"); /*selecciona la flecha derecha del carrusel*/
let sliderIzquierdo = document.querySelector(".slider-izquierdo");/*selecciona la flecha izquierda del carrusel*/
let cont = 0; /*contador con el que se moveran las imagenes*/
let intervalo = setInterval(MoverDerecha, 4000);

function MoverDerecha() { /*funcion para mover a la derecha automatico, esta funcion se llama por defecto al cargar la pagina*/
    cont++;  /*incremento del contador ( muestra la imagen siguiente )*/
    if (cont > imagenes.length - 1) { /*al llegar la ultima imagen hace que el contador vuelva a la primera imagen*/
        cont = 0;
    }
    document.Imagen.src = imagenes[cont]; /*Muestra la imagen correpondiente segun la posicion del contador*/
}

function MoverIzquierda() { /*funcion para mover a la izquierda*/
    cont--; /*incremento del contador ( muestra la imagen anterior )*/
    if (cont < 0) { 
        cont = imagenes.length - 1; 
    }
    document.Imagen.src = imagenes[cont]; /*Muestra la imagen correpondiente segun la posicion del contador*/
}

sliderDerecho.addEventListener("click", function() { /*al hacer click muestra la imagen de la derecha, ignorando el intervalo*/
    clearInterval(intervalo); /*hace que el intervalo se resete y empiece en cero*/
    MoverDerecha(); /*ejecucion de la funcion*/
    intervalo = setInterval(MoverDerecha, 4000); /*despues de hacer click y que muestre la siguiente imagen, se establece de nuevo el tiempo que va a durar el intervalo*/
});

sliderIzquierdo.addEventListener("click", function() { /*al hacer click muestra la imagen de la izquierda, ignorando el intervalo*/
    clearInterval(intervalo); /*hace que el intervalo se resete y empiece en cero*/
    MoverIzquierda(); /*ejecucion de la funcion*/
    intervalo = setInterval(MoverDerecha, 4000); /*despues de hacer click y que muestre la siguiente imagen, se establece de nuevo el tiempo que va a durar el intervalo*/
});