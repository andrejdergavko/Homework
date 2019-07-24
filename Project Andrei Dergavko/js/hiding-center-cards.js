var btnAll = document.getElementById('btn-all');
var btnGrodno = document.getElementById('btn-grodno');
var btnMinsk = document.getElementById('btn-minsk');
var btnBrest = document.getElementById('btn-brest');

btnAll.onclick = function () {
  hidingCards("center-cards__item")
};

btnGrodno.onclick = function () {
  hidingCards("center-cards__item_grodno")
};

btnMinsk.onclick = function () {
  hidingCards("center-cards__item_minsk")
};

btnBrest.onclick = function () {
  hidingCards("center-cards__item_brest")
};


function hidingCards (visibleClass) {
  var arrCards = document.querySelectorAll('.center-cards__item');

  document.querySelector('.center-cards__grid').style.gridTemplateColumns = 
  "repeat(auto-fill, minmax(260px, 1fr))";

  for (var i = arrCards.length - 1; i >= 0; i--) {
    if (!arrCards[i].classList.contains(visibleClass)) {
      arrCards[i].style.display = "none"
    } else {
      arrCards[i].style.display = "block"
    }
  }
}