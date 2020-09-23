// JavaScript Document
var menuOpen = document.querySelector("#menuButton");
var closeMenu = document.querySelector(".closeButton")
var sideMenu = document.querySelector(".sideMenu");

function toggleMenu() {
    console.log("Menu toggle");
    sideMenu.classList.toggle("sideMenuOpen");
}

menuOpen.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);