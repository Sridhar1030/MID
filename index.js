const dropdown = document.querySelector(".dropdown");
const menuIcon = document.querySelector(".menu");
const body = document.querySelector(".body");

menuIcon.addEventListener("click", function(event) {
    // Toggle opacity between 0 and 1
    dropdown.style.opacity = (parseFloat(window.getComputedStyle(dropdown).opacity) === 1) ? 0.9 : 1;

    // Change the image source based on the current opacity value
    if (parseFloat(window.getComputedStyle(dropdown).opacity) === 0) {
        menuIcon.src = "dropup.svg";
    } 
    else{
        dropdown.style.opacity = 0;
        menuIcon.src = "dropdown.svg";
    }
    event.stopPropagation(); // Prevent the body click event from being triggered immediately
});

body.addEventListener("click", function() {
    // Close the dropdown when the body is clicked, but only if it's not the dropdown itself
    if (parseFloat(window.getComputedStyle(dropdown).opacity) === 1) {
        dropdown.style.opacity = 0;
        menuIcon.src = "dropdown.svg";
    }
});
