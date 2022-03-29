const menu = document.querySelector(".menu-btn");
const menuContent = document.querySelector(".na-content");

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuContent.classList.toggle("extended");
});