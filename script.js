
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
    Type.innerHTML = data.results[0].type
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
    Type1.innerHTML = data.results[1].type
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
    Type2.innerHTML = data.results[2].type
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
    Type3.innerHTML = data.results[3].type
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
    Type4.innerHTML = data.results[4].type
    Gender4.innerHTML = data.results[4].gender
    console.log(data.results[4].name)
})
}

button5.addEventListener('click', imprimirabadingo)

const urlApi5 = 'https://rickandmortyapi.com/api/character'
function imprimirabadingo() {
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
    Type5.innerHTML = data.results[5].type
    Gender5.innerHTML = data.results[5].gender
    console.log(data.results[5].name)
})
}
button6.addEventListener('click', imprimirabradolf)

const urlApi6 = 'https://rickandmortyapi.com/api/character'
function imprimirabradolf() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name6.innerHTML = data.results[6].name
    Status6.innerHTML = data.results[6].status
    Specie6.innerHTML = data.results[6].species
    Type6.innerHTML = data.results[6].type
    Gender6.innerHTML = data.results[6].gender
    console.log(data.results[6].name)
})
}

button7.addEventListener('click', imprimirjuezrick)

const urlApi7 = 'https://rickandmortyapi.com/api/character'
function imprimirjuezrick() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name7.innerHTML = data.results[7].name
    Status7.innerHTML = data.results[7].status
    Specie7.innerHTML = data.results[7].species
    Type7.innerHTML = data.results[7].type
    Gender7.innerHTML = data.results[7].gender
    console.log(data.results[7].name)
})
}


button8.addEventListener('click', imprimiragency)

const urlApi8 = 'https://rickandmortyapi.com/api/character'
function imprimiragency() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name8.innerHTML = data.results[8].name
    Status8.innerHTML = data.results[8].status
    Specie8.innerHTML = data.results[8].species
    Type8.innerHTML = data.results[8].type
    Gender8.innerHTML = data.results[8].gender
    console.log(data.results[8].name)
})
}
button9.addEventListener('click', imprimiralan)

const urlApi9 = 'https://rickandmortyapi.com/api/character'
function imprimiralan() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name9.innerHTML = data.results[9].name
    Status9.innerHTML = data.results[9].status
    Specie9.innerHTML = data.results[9].species
    Type9.innerHTML = data.results[9].type
    Gender9.innerHTML = data.results[9].gender
    console.log(data.results[9].name)
})
}

button10.addEventListener('click', imprimiralbert)

const urlApi10 = 'https://rickandmortyapi.com/api/character'
function imprimiralbert() {
const config = {
    headers: {
        accept: "application/json",
    },
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
    Name10.innerHTML = data.results[10].name
    Status10.innerHTML = data.results[10].status
    Specie10.innerHTML = data.results[10].species
    Type10.innerHTML = data.results[10].type
    Gender10.innerHTML = data.results[10].gender
    console.log(data.results[10].name)
})
}

