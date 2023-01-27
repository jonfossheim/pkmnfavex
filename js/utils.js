const populateList = (elem, arr) => {
  for (let i = 0; i < arr.length; i++) {
    elem.innerHTML += `<li>${arr[i]}</li>`;
  }
};
