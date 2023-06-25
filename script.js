
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

button.addEventListener('click', imprimirrick)

const urlApi = 'https://rickandmortyapi.com/api/character'
function imprimirrick() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name.innerHTML = data.results[0].name
    Status.innerHTML = data.results[0].status
    Specie.innerHTML = data.results[0].species
    Gender.innerHTML = data.results[0].gender
    console.log(data.results[0].name)
})
}

button1.addEventListener('click', imprimirmorty)

const urlApi1 = 'https://rickandmortyapi.com/api/character'
function imprimirmorty() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name1.innerHTML = data.results[1].name
    Status1.innerHTML = data.results[1].status
    Specie1.innerHTML = data.results[1].species
    Gender1.innerHTML = data.results[1].gender
    console.log(data.results[1].name)
})
}
button2.addEventListener('click', imprimirsummer)

const urlApi2 = 'https://rickandmortyapi.com/api/character'
function imprimirsummer() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name2.innerHTML = data.results[2].name
    Status2.innerHTML = data.results[2].status
    Specie2.innerHTML = data.results[2].species
    Gender2.innerHTML = data.results[2].gender
    console.log(data.results[2].name)
})
}

button3.addEventListener('click', imprimirbeth)

const urlApi3 = 'https://rickandmortyapi.com/api/character'
function imprimirbeth() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name3.innerHTML = data.results[3].name
    Status3.innerHTML = data.results[3].status
    Specie3.innerHTML = data.results[3].species
    Gender3.innerHTML = data.results[3].gender
    console.log(data.results[3].name)
})
}

button4.addEventListener('click', imprimirjerry)

const urlApi4 = 'https://rickandmortyapi.com/api/character'
function imprimirjerry() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name4.innerHTML = data.results[4].name
    Status4.innerHTML = data.results[4].status
    Specie4.innerHTML = data.results[4].species
    Gender4.innerHTML = data.results[4].gender
    console.log(data.results[4].name)
})
}

button5.addEventListener('click', imprimirabadango)

const urlApi5 = 'https://rickandmortyapi.com/api/character'
function imprimirabadango() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name5.innerHTML = data.results[5].name
    Status5.innerHTML = data.results[5].status
    Specie5.innerHTML = data.results[5].species
    Gender5.innerHTML = data.results[5].gender
    console.log(data.results[5].name)
})
}

