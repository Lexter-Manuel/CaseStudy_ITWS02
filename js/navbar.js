const toggleButton = document.querySelector(".toggleButton");
const buttonIcon = document.querySelector(".toggleButton i");
const responsiveNav = document.querySelector(".responsiveNav");

toggleButton.onclick = function() {
    responsiveNav.classList.toggle("toggle");
    const isOpen = responsiveNav.classList.contains("toggle");

    buttonIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}