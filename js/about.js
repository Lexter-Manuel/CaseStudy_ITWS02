var lexIMG = document.getElementById("lexImg");
var lexSection = document.querySelector(".aboutLex");
var raphaIMG = document.getElementById("raphaImg");
var raphaSection = document.querySelector(".aboutRapha");
var cheskaIMG = document.getElementById("cheskaImg");
var cheskaSection = document.querySelector(".aboutChes");
var carraoIMG = document.getElementById("carraoImg");
var carraoSection = document.querySelector(".aboutCarrao");
var firstEmpty = document.querySelector("#empty1");
var secondEmpty = document.querySelector("#empty2");
var thirdEmpty = document.querySelector("#empty3");
var fourthEmpty = document.querySelector("#empty4");

function scanClass() {
  if(visible(lexSection)){
    lexIMG.classList.add("emphasize");
  }else{
    lexIMG.classList.remove("emphasize");
  }
  if(visible(firstEmpty)){
    lexIMG.classList.remove("emphasize");
  }
  if(visible(cheskaSection)){
    cheskaIMG.classList.add("emphasize3");    
  }else{
    cheskaIMG.classList.remove("emphasize3");
  }  
  if(visible(secondEmpty)){
    cheskaIMG.classList.remove("emphasize3");
  }
  if(visible(raphaSection)){
    raphaIMG.classList.add("emphasize2");
  }else{
    raphaIMG.classList.remove("emphasize2");
  }
  if(visible(thirdEmpty)){
    raphaIMG.classList.remove("emphasize2");
  }
  if(visible(carraoSection)){
    carraoIMG.classList.add("emphasize4");
}else{
    carraoIMG.classList.remove("emphasize4");
  }
  if(visible(fourthEmpty)){
    carraoIMG.classList.remove("emphasize4");
  }
}

function visible(element) {
  const elementDiv = element.getBoundingClientRect();
  var distanceFromTop = -100;
  return elementDiv.top - window.innerHeight <= distanceFromTop;
}

function debounce(func, wait) {
  var timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

scanClass();

window.addEventListener('scroll', debounce(scanClass, 10));

window.addEventListener("scroll", function(){
    var lex = document.querySelector(".lex");
    var rapha = document.querySelector(".rapha");
    var cheska = document.querySelector(".cheska");
    var carrao = document.querySelector(".carrao");


    lex.classList.toggle("scroll1", window.scrollY > 0);
    rapha.classList.toggle("scroll2", window.scrollY > 0);
    cheska.classList.toggle("scroll3", window.scrollY > 0);
    carrao.classList.toggle("scroll4", window.scrollY > 0);
})

window.addEventListener("scroll", function(){
  var moveUp = window.scrollY;
  var text = document.querySelector(".aboutText");
  
  text.style.top = moveUp * -.15 + 50 + '%';
})