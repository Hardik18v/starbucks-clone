const menuCon = document.querySelector("div.toggle")
const toggleNav = document.querySelector(".toggle-nav")

menuCon.addEventListener("click", function navToggle() {
    menuCon.classList.toggle("open")
    if (toggleNav.style.display != "flex") {
        toggleNav.style.display = "flex";
    } else {
        toggleNav.style.display = "none";
    }
}
)
