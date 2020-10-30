var addEntry = document.querySelector('.entryButton');
var overElement = document.querySelector('.overlay');
var modalElement = document.querySelector('.modal');

addEntry.addEventListener('click', function () {
  overElement.className = 'overlay';
  modalElement.className = 'modal';
});
