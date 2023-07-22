let imagenes = [
    "assets/competitions/americangames/american1.jpg",
    "assets/competitions/americangames/american2.jpg",
    "assets/competitions/americangames/american3.jpg",
    "assets/competitions/americangames/american4.jpg",
    "assets/competitions/americangames/american5.jpg"
];

document.Imagen.src = imagenes[0];
let sliderDerecho = document.querySelector(".slider-derecho");
let sliderIzquierdo = document.querySelector(".slider-izquierdo");
let cont = 0;
let intervalo = setInterval(MoverDerecha, 4000);

function MoverDerecha() {
    cont++;
    if (cont > imagenes.length - 1) {
        cont = 0;
    }
    document.Imagen.src = imagenes[cont];
}

function MoverIzquierda() {
    cont--;
    if (cont < 0) {
        cont = imagenes.length - 1;
    }
    document.Imagen.src = imagenes[cont];
}

sliderDerecho.addEventListener("click", function() {
    clearInterval(intervalo);
    MoverDerecha();
    intervalo = setInterval(MoverDerecha, 4000);
});

sliderIzquierdo.addEventListener("click", function() {
    clearInterval(intervalo);
    MoverIzquierda();
    intervalo = setInterval(MoverDerecha, 4000);
});