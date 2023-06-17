/*Menu Hamburguesa*/
function closeMenu() {
    const nav = document.querySelector("#nav");
    nav.classList.remove("visible");
    return true;
}

    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

  // Agrega el evento click a cada opción del menú
    const menuItems = document.querySelectorAll("#nav ul li a");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        closeMenu();
    });
});

cerrar.addEventListener("click", () => {
    closeMenu();
});
