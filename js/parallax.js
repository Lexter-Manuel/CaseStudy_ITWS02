
window.addEventListener('scroll', function(){
    var parallax = window.scrollY;
    var globe = document.querySelector(".globe");
    var text = document.querySelector(".hero-text");
    var programmer = document.querySelector(".programmer");
    var lines = document.querySelectorAll(".lines");
    var smoke = document.querySelector(".smoke-holder");
    
    globe.style.bottom = parallax * .05 + 50 + '%';
    globe.style.left = parallax * .07 + -20 + '%';
    text.style.bottom = parallax * -.08 + '%';
    programmer.style.bottom = parallax * -.05 + 11 + '%';
    smoke.style.bottom = parallax * -0.05 + -16 + '%';

    lines.forEach(function(line, index){
        const rootRight = getComputedStyle(document.documentElement);
        const right = rootRight.getPropertyValue(`--right-${index + 1}`);
        const convertedRight = parseFloat(right);
        const rootBottom = getComputedStyle(document.documentElement);
        const bottom = rootRight.getPropertyValue(`--bottom-${index + 1}`);
        const convertedBottom = parseFloat(bottom);
    
        line.style.setProperty('right', `${parallax * 0.05 + 10 + convertedRight}%`);
        line.style.setProperty('bottom', `${parallax * -0.07 + 30 + convertedBottom}%`);

        let rotation = parallax * 0.15;
        globe.style.transform = `translate(0, 50%) rotate(${rotation}deg)`;
    });
})