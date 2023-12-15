window.addEventListener("scroll", function(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
})