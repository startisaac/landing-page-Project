/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
//global variable for navigation
const navigation = document.getElementById("navbar__list");
// global variable for sections
const mySections = document.querySelectorAll("section");

const menuLink = document.querySelectorAll("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */


// building the nav

function myNavBuilder() {
    let myNavUserInter = "";

//sectional looping

 mySections.forEach((section) => {
    const mySectionID = section.id;

    const mySectionDataNav = section.dataset.nav;

    myNavUserInter += `<li class="menu__link"><a  data-section="${mySectionID}" href="#${mySectionID}">${mySectionDataNav}</a></li>`;
 });

// This appends the elements to navigation
 navigation.innerHTML = myNavUserInter;
}
myNavBuilder();

// Add class 'active' to section when near top of viewport

// to get the largest value that is equal or less than the number
function myOverallSet(section) {
    return Math.floor(section.getBoundingClientRect().top);
}

// remover of the active class
function myActiveRemoval(section) {
    section.classList.remove("your-active-class");

 // this add color to the specific section of the page
    section.style.cssText = "background-color: rgba(255, 255, 255, 0.187);";
}

// addition of the active class
function MyActiveAdd(clause, section) {
    if (clause) {
    section.classList.add("your-active-class");
    section.style.cssText = "background-color: purple;";
 }
}

// the actual function implementation

function actifierSection() {
    mySections.forEach((section) => {
    const elementOverallSet = myOverallSet(section);
    myViewPort = () => elementOverallSet < 250 && elementOverallSet >= -250;

    myActiveRemoval(section);
    MyActiveAdd(myViewPort(), section);
 });
}

window.addEventListener("scroll", actifierSection);

function mySectionScroll(element) {
    element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
 });
}

// Scroll to anchor ID using scrollTO event

function myScroll() {
    const myLinks = document.querySelectorAll(".navbar__menu a");
    myLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
    e.preventDefault();
    link.classList.add("menu__link");
    let myScrollSection = e.target.getAttribute("data-section");

    let eleme = document.getElementById(myScrollSection);

    eleme.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
    });
    });
    });
}
myScroll();
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
