/* Dark Mode and Light Mode */
const darkModeSwitch = document.getElementById('darkModeSwitch');
const rootElement = document.documentElement;

darkModeSwitch.addEventListener('change', function() {
  if (darkModeSwitch.checked) {
    rootElement.classList.add('dark-mode');
  } else {
    rootElement.classList.remove('dark-mode');
  }
});

/* Hamburger Toggle Button 

$(function() {
$(".toggle").on("click", function() {
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
    } else {
        $(".item").addClass("active");
    }
});
}); 

*/

const menu = document.querySelector("#menu");
const menuList = document.querySelector(".menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuList.classList.toggle("show");
});
