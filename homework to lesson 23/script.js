var arr = document.querySelector('.slider__wrapper').children;
var btnLeft = document.getElementById("btn-left");
var btnRight = document.getElementById("btn-right");

var count = 0;

btnLeft.onclick = function () {
  arr[count].style.opacity = "0";
  if (count === 0) {
    count = count + 3;
  }
  count--;
  arr[count].style.opacity = "1";
}

btnRight.onclick = function () {
  arr[count].style.opacity = "0";
  if (count >= arr.length - 1) {
    count = count - 3;
  }
  count++;
  arr[count].style.opacity = "1";
}