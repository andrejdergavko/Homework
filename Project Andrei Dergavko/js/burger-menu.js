var burgerButton = document.getElementById("burger-button");
var burgerSlider = document.getElementById("burger-slider");

burgerButton.onclick = function () {
  if (burgerButton.classList.contains('burger-menu__button_active')) {
    burgerButton.classList.remove('burger-menu__button_active');
    burgerSlider.style.top = "100%";
  } else {
    burgerButton.classList.add('burger-menu__button_active');
    burgerSlider.style.top = "0";
  }
}