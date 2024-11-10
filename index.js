// script.js
// script.js
// Getting the elements
var hameburgur = document.getElementById("pages"); // Hamburger menu icon
var setHameburgur = document.getElementById("hameburger"); // Navigation menu (pages)
hameburgur.addEventListener("click", function () {
    // Toggle the 'show' class on #pages
    if (setHameburgur.classList.contains("show")) {
        setHameburgur.classList.remove("show");
    }
    else {
        setHameburgur.classList.add("show");
    }
});
