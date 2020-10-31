var addEntry = document.querySelector('.entryButton');
var overElement = document.querySelector('.overlay');
var modalElement = document.querySelector('.modal');

addEntry.addEventListener('click', function () {
  overElement.className = 'overlay';
  modalElement.className = 'modal';
});

var data = {
  currentView: '',
  monday: {
    entry: []
  },
  tuesday: {
    entry: []
  }


};



var form = document.querySelector('form');

form.addEventListener('submit', function () {
  event.preventDefault();
  var entryData = {};
  var day = form.elements.day.value;
  // data[day]
  entryData.hour = form.elements.hour.value;
  entryData.description = form.elements.description.value;

  // push object into array
  data[day].entry.push(entryData);
})



console.log(data);
