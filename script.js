
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

button11.addEventListener('click', imprimiralexander)

const urlApi11 = 'https://rickandmortyapi.com/api/character'
function imprimiralexander() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name11.innerHTML = data.results[11].name
Status11.innerHTML = data.results[11].status
Specie11.innerHTML = data.results[11].species
Type11.innerHTML = data.results[11].type
Gender11.innerHTML = data.results[11].gender
console.log(data.results[11].name)
})
}

button12.addEventListener('click', imprimirgoogah)

const urlApi12 = 'https://rickandmortyapi.com/api/character'
function imprimirgoogah() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name12.innerHTML = data.results[12].name
Status12.innerHTML = data.results[12].status
Specie12.innerHTML = data.results[12].species
Type12.innerHTML = data.results[12].type
Gender12.innerHTML = data.results[12].gender
console.log(data.results[12].name)
})
}

button13.addEventListener('click', imprimiralienmorty)

const urlApi13 = 'https://rickandmortyapi.com/api/character'
function imprimiralienmorty() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name13.innerHTML = data.results[13].name
Status13.innerHTML = data.results[13].status
Specie13.innerHTML = data.results[13].species
Type13.innerHTML = data.results[13].type
Gender13.innerHTML = data.results[13].gender
console.log(data.results[13].name)
})
}

button14.addEventListener('click', imprimiralienrick)

const urlApi14 = 'https://rickandmortyapi.com/api/character'
function imprimiralienrick() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name14.innerHTML = data.results[14].name
Status14.innerHTML = data.results[14].status
Specie14.innerHTML = data.results[14].species
Type14.innerHTML = data.results[14].type
Gender14.innerHTML = data.results[14].gender
console.log(data.results[14].name)
})
}

button15.addEventListener('click', imprimircyborg)

const urlApi15 = 'https://rickandmortyapi.com/api/character'
function imprimircyborg() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name15.innerHTML = data.results[15].name
Status15.innerHTML = data.results[15].status
Specie15.innerHTML = data.results[15].species
Type15.innerHTML = data.results[15].type
Gender15.innerHTML = data.results[15].gender
console.log(data.results[15].name)
})
}

button16.addEventListener('click', imprimirannie)

const urlApi16 = 'https://rickandmortyapi.com/api/character'
function imprimirannie() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name16.innerHTML = data.results[16].name
Status16.innerHTML = data.results[16].status
Specie16.innerHTML = data.results[16].species
Type16.innerHTML = data.results[16].type
Gender16.innerHTML = data.results[16].gender
console.log(data.results[16].name)
})
}

button17.addEventListener('click', imprimirantenam)

const urlApi17 = 'https://rickandmortyapi.com/api/character'
function imprimirantenam() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name17.innerHTML = data.results[17].name
Status17.innerHTML = data.results[17].status
Specie17.innerHTML = data.results[17].species
Type17.innerHTML = data.results[17].type
Gender17.innerHTML = data.results[17].gender
console.log(data.results[17].name)
})
}

button18.addEventListener('click', imprimirantenar)

const urlApi18 = 'https://rickandmortyapi.com/api/character'
function imprimirantenar() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name18.innerHTML = data.results[18].name
Status18.innerHTML = data.results[18].status
Specie18.innerHTML = data.results[18].species
Type18.innerHTML = data.results[18].type
Gender18.innerHTML = data.results[18].gender
console.log(data.results[18].name)
})
}

button19.addEventListener('click', imprimireyes)

const urlApi19 = 'https://rickandmortyapi.com/api/character'
function imprimireyes() {
const config = {
headers: {
accept: "application/json",
},
}

fetch(urlApi,config)
.then((respuesta) => respuesta.json())
.then((data) => {let persons = data.results
Name19.innerHTML = data.results[19].name
Status19.innerHTML = data.results[19].status
Specie19.innerHTML = data.results[19].species
Type19.innerHTML = data.results[19].type
Gender19.innerHTML = data.results[19].gender
console.log(data.results[19].name)
})
}

