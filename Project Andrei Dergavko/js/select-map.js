var mapSelect = document.getElementById('map-select');
var iframeMap = document.getElementById('iframe-map');

mapSelect.onchange = function () {
  if (mapSelect.value === "grodno") {
    iframeMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.6463419215856!2d23.828142787726048!3d53.689370306842385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd620768e91cf%3A0xd91b5c46d78b4768!2z0J_RgNC-0YTQtdGB0YHQvtGA0YHQutC40Lkg0LrQvtC90YHRg9C70YzRgtCw0YLQuNCy0L3Ri9C5INGG0LXQvdGC0YA!5e0!3m2!1sru!2sby!4v1563285312631!5m2!1sru!2sby";
  } else if (mapSelect.value === "minsk") {
    iframeMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.805277569392!2d27.52543961608849!3d53.91743603948089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc5610e646a43%3A0x400bdfc0ec691a5e!2z0JzQtdC00LjRhtC40L3RgdC60LjQuSDRhtC10L3RgtGA!5e0!3m2!1sru!2sby!4v1563285042609!5m2!1sru!2sby";
  } else if (mapSelect.value === "brest") {
    iframeMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19608.841895539794!2d23.751425699292593!3d52.096016294540476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33fb30e985784204!2z0JzQtdC00LjRhtC40L3RgdC60LjQuSDRhtC10L3RgtGAICLQndC-0LLQsNC80LXQtCI!5e0!3m2!1sru!2sby!4v1563285140858!5m2!1sru!2sby";
  }
}