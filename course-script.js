// slider
var sliderPrice = document.getElementById("price");
var outputPrice = document.getElementById("value-price");
outputPrice.innerHTML = sliderPrice.value;

sliderPrice.oninput = function() {
  outputPrice.innerHTML = this.value;
}
var sliderDuration = document.getElementById("duration");
var outputDuration = document.getElementById("value-duration");
outputDuration.innerHTML = sliderDuration.value;

sliderDuration.oninput = function() {
  outputDuration.innerHTML = this.value;
}