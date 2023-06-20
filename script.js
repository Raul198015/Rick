
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

const urlApi = 'https://rickandmortyapi.com/api/character'
const config = {
    headers: {
        accept: "application/json",
    },
}
let nombre = document.getElementById('Name')

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    nombre.innerHTML = data.results[0].name
    console.log(data.results[0].name)
})





