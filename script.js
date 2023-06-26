const header = document.querySelector('header');

const section = document.querySelector('section');

const requestURL = 'https://rickandmortyapi.com/api/character';

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const characters = request.response;
    identityCharacters(characters);
}

function identityCharacters(jsonObj) {
    const characters = jsonObj['names'];
  
    for (var i = 0; i < characters.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myPara4 = document.createElement('p');
      const myPara5 = document.createElement('p');
      const myList = document.createElement('ul');

      myH2.textContent = characters[i].name;
      myPara1.textContent = 'status: ' + characters[id].status;
      myPara2.textContent = 'species: ' + characters[id].specie;
      myPara3.textContent = 'type:' + characters[id].Type;
      myPara4.textContent = 'origin:' + characters[id].name, url;
      myPara5.textContent = 'location:' + characters[id].name, url;
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }