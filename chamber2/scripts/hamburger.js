const menu = document.querySelector("#menu");
const menuList = document.querySelector(".nav_links");

menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuList.classList.toggle("show");
});
