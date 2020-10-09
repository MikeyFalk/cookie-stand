'use strict';

// collect response from user then display a personal message and the address for the location in their hometown.

//get table that will hold adress from main page
var parentElement = document.getElementById('table');

// Get response from user input
var formElement = document.getElementById('form');

//Store response in an array
var peopleArray = [];

//run a callback function

function handleSubmit(event){
  //don't lose the data
  event.preventDefault();

  //collect the information from the form
  console.log('this is my', event.target.username.value);
  console.log('this is where I live', event.target.hometown.value);
  console.log(peopleArray);
  var personName = event.target.username.value;
  var storeTownLocation = event.target.hometown.value;
  new Person(personName, storeTownLocation);
}

function Person(name, storeTownLocation) {
  this.personName = name;
  this.storeTownLocation = storeTownLocation;
  peopleArray.push(this);
}

formElement.addEventListener('submit', handleSubmit);

function headerRow(){
  var trElement = document.createElement('tr');
  for (var i = -1; i < peopleArray.length; i++) {
  var thElement = document.createElement('th');
  thElement.textContent = peopleArray[1];
  trElement.appendChild(thElement);}
  
  parentElement.appendChild(trElement);
}
headerRow();

function storeAddress(){
  var trTwoElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = peopleArray[0];
  trTwoElement.appendChild(tdElement);
  parentElement.appendChild(trTwoElement);

}

storeAddress();


//Store.prototype.render = function () {
//    var tableRowElement = document.createElement('tr');
//    var tableHeader = document.createElement('th');
//    tableHeader.textContent = this.name;
//    tableRowElement.appendChild(tableHeader);
  
//    var dailyCookieTotalsByStore = document.createElement('tr');
//    dailyCookieTotalsByStore.textContent = this.totalCookiesForTheDay;
//    tableRowElement.appendChild(dailyCookieTotalsByStore);
  
//    for (var i = 0; i < storeHours.length; i++) {
  
//      var totalCookiesData = document.createElement('td');
//      totalCookiesData.textContent = this.cookiesSoldEachHour[i];
//     tableRowElement.appendChild(totalCookiesData);
//  }
//  parentElement.appendChild(tableRowElement);
//};



//function addressRow() {

  //  var trElement = document.createElement('tr');

    //for (var i = -1; i < storeHours.length; i++) {

      //  var thElement = document.createElement('th');

        //thElement.textContent = storeHours[i];

        //trElement.appendChild(thElement);

    //}
//    parentElement.appendChild(trElement);
//}
