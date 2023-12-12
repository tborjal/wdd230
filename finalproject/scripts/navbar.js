const menu = document.querySelector("#menu");
const menuList = document.querySelector(".menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuList.classList.toggle("show");
});
