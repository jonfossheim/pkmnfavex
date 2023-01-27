import { pokemon } from './pokemon.js';

const main = document.querySelector('main');
main.classList.add('wrapper');

const lsArr = [];
if (!localStorage.getItem('favourites')) {
  localStorage.setItem('favourites', JSON.stringify(lsArr));
}

const adjustBg = (element, pkmn) => {
  let selectedColor;
  switch (pkmn.type[0]) {
    case 'Water':
      selectedColor = '#0984e3';
      break;
    case 'Fire':
      selectedColor = '#d63031';
      break;
    case 'Grass':
      selectedColor = '#00b894';
      break;
    default:
      selectedColor = 'white';
      break;
  }

  element.style.backgroundColor = selectedColor;
};

const renderCards = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const { id, name, type, base } = arr[i];

    const addToFavs = () => {
      const current = localStorage.getItem('favourites');
      console.log(JSON.parse(current));
      localStorage.setItem('favourites', JSON.stringify([arr[i]]));
    };

    //make container
    const container = document.createElement('div');
    container.classList.add('container');

    // Make button
    const favBtn = document.createElement('button');
    favBtn.innerHTML = 'FAV';
    container.appendChild(favBtn);

    favBtn.addEventListener('click', addToFavs);

    //make heading
    const heading = document.createElement('h2');
    heading.innerHTML = name.english;
    container.appendChild(heading);

    //create languages section
    const langHead = document.createElement('h3');
    langHead.innerHTML = 'name in other languages';
    container.appendChild(langHead);

    const langList = document.createElement('ul');
    const jpn = document.createElement('li');
    const cn = document.createElement('li');
    const fr = document.createElement('li');

    jpn.innerHTML = `Japanese: ${name.japanese}`;
    cn.innerHTML = `Chinese: ${name.chinese}`;
    fr.innerHTML = `French: ${name.french}`;

    langList.appendChild(jpn);
    langList.appendChild(cn);
    langList.appendChild(fr);
    container.appendChild(langList);

    //add separator
    const separator = document.createElement('hr');
    container.appendChild(separator);

    // add types section
    const typesHead = document.createElement('h3');
    typesHead.innerHTML = 'types';
    container.appendChild(typesHead);

    const typesList = document.createElement('ul');

    for (let i = 0; i < type.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = type[i];
      typesList.appendChild(li);
    }
    container.appendChild(typesList);

    //add new separator
    const separator2 = document.createElement('hr');
    container.appendChild(separator2);

    //create stats section
    const statsHead = document.createElement('h3');
    statsHead.innerHTML = 'stats';
    container.appendChild(statsHead);

    const statsList = document.createElement('ul');
    const statValues = Object.values(base);
    for (let i = 0; i < statValues.length; i++) {
      let li = document.createElement('li');
      switch (i) {
        case 0:
          li.innerHTML = `HP: ${statValues[i]}`;
          break;
        case 1:
          li.innerHTML = `Attack: ${statValues[i]}`;
          break;
        case 2:
          li.innerHTML = `Defence: ${statValues[i]}`;
          break;
        case 3:
          li.innerHTML = `Sp. Attack: ${statValues[i]}`;
          break;
        case 4:
          li.innerHTML = `Sp. Defence: ${statValues[i]}`;
          break;
        case 5:
          li.innerHTML = `Speed: ${statValues[i]}`;
          break;
        default:
          li.innerHTML = 'Unknown';
          break;
      }
      statsList.appendChild(li);
    }
    container.appendChild(statsList);

    //append to dom
    main.appendChild(container);

    // Adjust Background based on type:
    adjustBg(container, arr[i]);
  }
};
renderCards(pokemon);
