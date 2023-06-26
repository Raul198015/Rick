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
    const characters = jsonObj['results'];
console.log (characters)    
    for (var i = 0; i < characters.length; i++) {
      const myArticle = document.createElement('article');
      const myPara1 = document.createElement('img')
      const myH2 = document.createElement('h2');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myPara4 = document.createElement('p');
      const myPara5 = document.createElement('p');
      const myPara6 = document.createElement('p');
      const myPara7 = document.createElement('p');
      const myList = document.createElement('ul');

      myPara1.setAttribute("src", characters[i].image);
      myH2.textContent = characters[i].name;
      myPara2.textContent = 'status: ' + characters[i].status;
      myPara3.textContent = 'species: ' + characters[i].species;
      myPara4.textContent = 'type:' + characters[i].type;
      myPara5.textContent = 'gender:' + characters[i].gender;
      myPara6.textContent = 'origin:' + characters[i].name;
      myPara7.textContent = 'location:' + characters[i].name;
      
      
  
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);
      myArticle.appendChild(myPara7);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
  