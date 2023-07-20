let imagenes = [
    "assets/competitions/americangames/american1.jpg",
    "assets/competitions/americangames/american2.jpg",
    "assets/competitions/americangames/american3.jpg",
    "assets/competitions/americangames/american4.jpg",
    "assets/competitions/americangames/american5.jpg"
];

document.Imagen.src = imagenes[0]; //Al cargar la pagina muestra la imagen ubicada en el espacio 0 del arreglo.

let sliderDerecho = document.querySelector(".slider-derecho"); //Toma el elemento con el id slider-derecho.
let sliderIzquierdo = document.querySelector(".slider-izquierdo");
let cont=0;

function MoverDerecha() {
    cont++;

    if(cont > imagenes.length-1) {
        cont=0;
    }

    document.Imagen.src = imagenes[cont];
}

let intervalo = setInterval(MoverDerecha, 4000);
sliderDerecho.addEventListener("click", function(){
    clearInterval(intervalo);
    MoverDerecha();
    intervalo = setInterval(MoverDerecha, 4000);
})

sliderDerecho.addEventListener("click", MoverDerecha); //Ejecuta la funcion MoverDerecha al hacer click.



function MoverIzquierda() {
    cont--;

    if(cont < 0) {
        cont=imagenes.length-1;
    }
    
    document.Imagen.src = imagenes[cont];
}

sliderIzquierdo.addEventListener("click", function(){
    clearInterval(intervalo);
    MoverIzquierda();
    intervalo = setInterval(MoverIzquierda, 4000);
})

sliderIzquierdo.addEventListener("click", MoverIzquierda);