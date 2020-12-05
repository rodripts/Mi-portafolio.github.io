let boton = document.getElementById("burguer-button")
let menu = document.getElementById("menu-card")

boton.addEventListener("click", () => {
    if(menu.classList.contains("is-active")) {
        menu.classList.remove("is-active")
    } else {
        menu.classList.add("is-active")
    }
})