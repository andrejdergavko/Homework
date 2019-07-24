var btnSearchOpen = document.getElementById('btn-search-open');
var btnSearchClose = document.getElementById('btn-search-close');
var searchBox = document.getElementById('search-box');

btnSearchOpen.onclick = function () {
  searchBox.style.transform = "translate(0, 0)";
  document.getElementById('search-input').focus();
};

btnSearchClose.onclick = function () {
  searchBox.style.transform = "translate(0, -200%)"
};