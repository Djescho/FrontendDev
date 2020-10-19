// JavaScript Document
var menuOpen = document.querySelector("#menuButton");
var closeMenu = document.querySelector("#closeButton")
var sideMenu = document.querySelector(".sideMenu");
var mainElement = document.querySelector("main");

var deButtons = document.querySelectorAll("section button");

for(i=0; i<deButtons.length; i++) {
  deButtons[i].addEventListener("click", scrollenMaar);
}

function scrollenMaar(event) {
  // event.target is de button waarop is geklikt
  let deButtonWaaropGekliktIs = event.target;
  // bepalen in welke richting gescrolld moet worden
  // het data-direction attribute is prev of next (zie de HTML)
  let deScrollRichting = deButtonWaaropGekliktIs.getAttribute("data-direction");
  
  let deSectionWaarinGescrolldGaatWorden = deButtonWaaropGekliktIs.parentNode;
  let deUlInDieSection = deSectionWaarinGescrolldGaatWorden.querySelector("ul");
  // breedte van eerste item/li bepalen
  // dat is de afstand die gescrolled gaat worden
  // eerst het eerste item zoeken en opslaan in een variabele
  let eersteItem = deUlInDieSection.querySelector("li");
  // dan de breedte van dit item bepalen en opslaan in een variabele
  let scrollAfstand = eersteItem.offsetWidth;
  
  /* naar links scrollen bij de "prev" button */
  if (deScrollRichting == "prev") {
    // scrollLeft is de heoeveelheid pixels dat er vanaf de linkerrand van het element is gescrolld
    // bij "prev" wordt daar de scrollMaat vanaf getrokken
    deUlInDieSection.scrollLeft -= scrollAfstand;
  }
  /* naar rechts scrollen bij de "prev" button */
  else if (deScrollRichting == "next") {
    // bij "next" wordt daar de scrollMaat bij opgeteld
    deUlInDieSection.scrollLeft += scrollAfstand;
  }
}

function toggleMenu() {
    console.log("Menu toggle");
    sideMenu.classList.toggle("sideMenuActive");
    mainElement.classList.toggle("noscroll");
}

menuOpen.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

