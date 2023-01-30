const populateList = (elem, arr) => {
  for (let i = 0; i < arr.length; i++) {
    elem.innerHTML += `<li>${arr[i]}</li>`;
  }
};

const containsObject = (obj, list) => {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
};

if (containsObject(currPkmn, favs)) {
  let index = favs.indexOf(currPkmn);
  console.log('indeX?:', index);
  favs.splice(index, 1);
  localStorage.setItem(favKey, JSON.stringify(favs));
} else {
  console.log('push?:', currPkmn);
  favs.push(currPkmn);
  localStorage.setItem(favKey, JSON.stringify(favs));
}
