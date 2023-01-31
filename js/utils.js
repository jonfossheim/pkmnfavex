export const favKey = 'favourites';

export const adjustBg = (element, pkmn) => {
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

export const updateArray = (array, obj) => {
  const index = array.findIndex((elem) => elem.id === obj.id);
  if (index === -1) {
    array.push(obj);
    localStorage.setItem(favKey, JSON.stringify(array));
  } else {
    array.splice(index, 1);
    localStorage.setItem(favKey, JSON.stringify(array));
  }
};
