var controlLeft = document.getElementById('slider-control-left');
var controlRight = document.getElementById('slider-control-right');
var sliderWrapper = document.getElementById('slider-wrapper');
var sliderItem = document.querySelector('.slider__item');
var sliderImg = document.querySelector('.slider__img');
var modalWinFoto = document.querySelector('.modal-win-foto');
var modalWinFotoExit = document.querySelector('.modal-win-foto__exit');
var modalWinFotoImg = document.querySelector('.modal-win-foto__img');

var counter = 0;

controlLeft.onclick = function () {
  if (counter < 0) {
    counter += sliderImg.scrollWidth;
    sliderWrapper.style.transform = 
    "translate("+ counter +"px, 0)";
  }
}

controlRight.onclick = function () {
  if (Math.abs(counter) < sliderWrapper.scrollWidth - sliderWrapper.offsetWidth) {
    counter -= sliderImg.scrollWidth;
    sliderWrapper.style.transform = 
    "translate("+ counter  +"px, 0)";
  }
}

for (var i = sliderWrapper.children.length - 1; i >= 0; i--) {
  sliderWrapper.children[i].onclick = function () {
    modalWinFoto.style.display = "flex";
    modalWinFotoImg.src = this.querySelector('.slider__img').src;
  }
}

modalWinFotoExit.onclick = function () {
  modalWinFoto.style.display = "none";
}