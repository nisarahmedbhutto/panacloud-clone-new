// TypeScript for toggling the hamburger menu
const hamburger = document.getElementById("hamburger");
const pagesMenu = document.getElementById("pages");

if (hamburger && pagesMenu) {
  hamburger.addEventListener("click", () => {
    pagesMenu.classList.toggle("show");
  });
}
