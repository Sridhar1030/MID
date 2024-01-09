// Your JavaScript code goes here
const dropdown = document.querySelector(".dropdown");
const menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", function() {
    // Toggle opacity between 0 and 1
    dropdown.style.opacity = (parseFloat(window.getComputedStyle(dropdown).opacity) === 0) ? 0.9 : 0;

    // Change the image source based on the current opacity value
    if (parseFloat(window.getComputedStyle(dropdown).opacity) === 0) {
        menuIcon.src= "dropup.svg";
    } else {
        menuIcon.src= "dropdown.svg";
    }
});
