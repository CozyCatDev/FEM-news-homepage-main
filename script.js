const nav = document.querySelector("nav");
const navOverlay = document.querySelector(".overlay");

document.querySelector(".open-nav-btn").addEventListener("click", () => {
    nav.dataset.active = "true";
    navOverlay.dataset.active = "true";
});
document.querySelector(".close-nav-btn").addEventListener("click", () => {
    nav.dataset.active = "false";
    navOverlay.dataset.active = "false";
});