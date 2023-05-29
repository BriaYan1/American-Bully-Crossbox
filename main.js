/*Menu Hamburguesa*/
    /*Esto no sirve, no hace nada*/
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    /*Esto no sirve, no hace nada*/

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    })    
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });

