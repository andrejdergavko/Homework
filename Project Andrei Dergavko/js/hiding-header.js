var header = document.getElementById('header');

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 50) {
    header.style.top = "-50px";
    header.style.transition = "top 0.4s";
  } else {
    header.style.top = "0";
    header.style.transition = "top 0.04s";
  }
}