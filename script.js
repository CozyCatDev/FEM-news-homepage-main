const nav = document.querySelector("nav");
const navOverlay = document.querySelector(".overlay");

document.querySelector(".open-nav-btn").addEventListener("click", () => {
    nav.dataset.active = "true";
    navOverlay.dataset.active = "true";
    navOverlay.style.visibility = "visible";
    navOverlay.style.opacity = "1";
});
document.querySelector(".close-nav-btn").addEventListener("click", () => {
    nav.dataset.active = "false";
    navOverlay.dataset.active = "false";
    navOverlay.style.opacity = "0";
    setTimeout(() => {
        navOverlay.style.visibility = "hidden";
    },250);
});