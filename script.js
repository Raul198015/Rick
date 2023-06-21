
var shape = document.getElementById("shape");
var colorKeyframes = ["red", "pink", "blue", "green", "yellow"];
function changeshapeColor() {
var currentIndex = 0;
setInterval(function() {
shape.style.backgroundColor = colorKeyframes[currentIndex];
currentIndex = (currentIndex + 1) % colorKeyframes.length;
}, 2500);
}
changeshapeColor();

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

const click = document.getElementById('button2');


button2.addEventListener("click", () => {
  window.open('https://rickandmortyapi.com/api/character', 'click', 'width=150px,height=150px');
});