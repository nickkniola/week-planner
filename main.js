var addEntry = document.querySelector('.entryButton');
var overElement = document.querySelector('.overlay');
var modalElement = document.querySelector('.modal');

addEntry.addEventListener('click', function () {
  overElement.className = 'overlay';
  modalElement.className = 'modal';
});

var entryList = {
  currentView: '',
  monday: {
    entry: []
  }
};

var form = document.querySelector('form');

var entryData = {};
entryData.day = form.elements.day.value;
entryData.hour = form.elements.hour.value;
entryData.description = form.elements.description.value;

// push object into array

console.log(entryList);
