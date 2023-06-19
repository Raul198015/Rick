var triangulo = document.getElementById("triangulo");
var colorKeyframes = ["red", "pink", "blue", "green", "yellow"];
function changeTriangleColor() {
var currentIndex = 0;
setInterval(function() {
triangulo.style.backgroundColor = colorKeyframes[currentIndex];
currentIndex = (currentIndex + 1) % colorKeyframes.length;
}, 300);
}
changeTriangleColor();

