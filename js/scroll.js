var shape = document.querySelector(".shape");
var paragraph = document.querySelector(".par");
var secondShape = document.querySelector(".shape-2");
var secondParagraph = document.querySelector(".par2");

function scanClass() {
  if (visible(shape)) {
    shape.classList.add('reveal');
    setTimeout(() => {
        if (visible(paragraph)) {
          paragraph.classList.add('revealText');
        }
    }, 1000);
  } else {
    shape.classList.remove('reveal');
    paragraph.classList.remove('revealText');
  }

  if (visible(secondShape)) {
    secondShape.classList.add('reveal');
    setTimeout(() => {
        if (visible(secondParagraph)) {
          secondParagraph.classList.add('revealText');
        }
    }, 700);
  } else {
    secondShape.classList.remove('reveal');
    secondParagraph.classList.remove('revealText');
  }
}

function visible(element) {
  const elementDiv = element.getBoundingClientRect();
  var distanceFromTop = -100;
  return elementDiv.top - window.innerHeight <= distanceFromTop;
}

// Function to debounce the scroll event
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

// Initial check on page load
scanClass();

// Add debounced scroll event listener
window.addEventListener('scroll', debounce(scanClass, 10));