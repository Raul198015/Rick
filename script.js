const characterList = document.getElementById('characterList');
const filterButtons = document.getElementById('filterButtons');
let charactersData = [];

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    showCharacters(characters);

    // Obtener valores únicos para cada propiedad de filtro
    const uniqueStatus = [...new Set(characters.map(character => character.status))];
    const uniqueSpecies = [...new Set(characters.map(character => character.species))];
    const uniqueTypes = [...new Set(characters.map(character => character.type))];
    const uniqueGenders = [...new Set(characters.map(character => character.gender))];
    const uniqueLocations = [...new Set(characters.map(character => character.location.name))];

    // Crear botones de filtro
    createFilterButtons('Status', uniqueStatus);
    createFilterButtons('Species', uniqueSpecies);
    createFilterButtons('Type', uniqueTypes);
    createFilterButtons('Gender', uniqueGenders);
    createFilterButtons('Location', uniqueLocations);
  })
  .catch(error => console.log(error));

function showCharacters(characters) {
  characterList.innerHTML = ''; // Limpiar la lista antes de mostrar los personajes

  characters.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.classList.add('characterCard');
    characterCard.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Type: ${character.type}</p>
      <p>Gender: ${character.gender}</p>
      <p>Origin: ${character.origin.name}</p>
      <p>Location: ${character.location.name}</p>
    `;
    characterList.appendChild(characterCard);
  });
}

function createFilterButtons(label, values) {
  const filterGroup = document.createElement('div');
  filterGroup.classList.add('filterGroup');

  const filterLabel = document.createElement('label');
  filterLabel.textContent = label;
  filterGroup.appendChild(filterLabel);

  values.forEach(value => {
    const filterButton = document.createElement('button');
    filterButton.textContent = value;
    filterButton.addEventListener('click', () => filterCharacters(label, value));
    filterGroup.appendChild(filterButton);
  });

  filterButtons.appendChild(filterGroup);
}

function filterCharacters(property, value) {
  fetch(`https://rickandmortyapi.com/api/character?${property.toLowerCase()}=${value}`)
    .then(response => response.json())
    .then(data => {
      const filteredCharacters = data.results;
      showCharacters(filteredCharacters);
    })
    .catch(error => console.log(error));
}
