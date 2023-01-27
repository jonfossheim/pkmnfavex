const lsArr = [];
if (!localStorage.getItem('favourites')) {
  localStorage.setItem('favourites', JSON.stringify(lsArr));
}
const favourites = JSON.parse(localStorage.getItem('favourites'));
