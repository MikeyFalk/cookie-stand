'use strict';
//Global variables
var storeHours = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];
var parentElement = document.getElementById('table');
var allStores = [];
var totalOfTotals = 0;


//Object Constructor Function
function Store(name, avgerageCookiePerCustomer, minimumCustomersPerHour, maximumCustomersPerHour) {
  this.name = name;
  this.avgerageCookiePerCustomer = avgerageCookiePerCustomer;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  allStores.push(this);
}
Store.prototype.generateCustomersEachHour = function () {
  for (var i = 0; i < storeHours.length; i++) {
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

    this.customersEachHour.push(randomNumber);
  }
};

Store.prototype.generateCookiesSoldEachHour = function () {
  for (var i = 0; i < storeHours.length; i++) {
    var cookiesSoldthisHour = Math.ceil(this.customersEachHour[i] * this.avgerageCookiePerCustomer);

    this.totalCookiesForTheDay += cookiesSoldthisHour;

    this.cookiesSoldEachHour.push(cookiesSoldthisHour);
  }
  totalOfTotals +=this.totalCookiesForTheDay;
};


//object instances to create stores
var seattle = new Store('seattle', 6.3, 23, 65);
var tokyo = new Store('tokyo', 1.2, 3, 24);
var dubai = new Store('dubai', 3.7, 11, 38);
var paris = new Store('paris', 2.3, 20, 38);
var lima = new Store('lima', 4.6, 2, 16);
///var addedStore = new Store();
//////////////////////////////////////////////////////////////////////////
var formElement = document.getElementById('form');


//var addedStore = [];
///////////////////////////////////////////////////////////////////////////////
function handleSubmit(event) {
  event.preventDefault();
  ///////////////////////////////////////////////////////////////////////////////
  //console.log('this is the new store name', event.target.storename.value);
  //console.log('maximum customers', event.target.maximumcustomers.value);
  //console.log(event.target.storename.value);
  console.log('maximum customers', event.target.cookiespercustomer.value);
  var newStoreName = event.target.storename.value;
  var newStoreAveCookie = parseInt(event.target.cookiespercustomer.value);
  var newStoreMinCust = parseInt(event.target.minipeeps.value);
  var newStoreMaxCust = parseInt(event.target.maximumcustomers.value);

  var newStore = new Store(newStoreName, newStoreAveCookie, newStoreMinCust, newStoreMaxCust);
  newStore.generateCustomersEachHour();
  newStore.generateCookiesSoldEachHour();
  allStores.push(newStore);
  parentElement.innerHTML = '';

  generateHeaderRow();
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();
  newStore.render();
  generateFooterRow();
}

//function NewLocation(newStoreName, newStoreAveCookie,newStoreMinCust,newStoreMaxCust) {
//this.newStoreName=newStoreName;
//this.newStoreAveCookie=newStoreAveCookie;
//this.newStoreMinCust=newStoreMinCust;
//this.newStoreMaxCust=newStoreMaxCust;

//addedStore.push(this);
//}



//console.log(allStores);

seattle.generateCustomersEachHour();
seattle.generateCookiesSoldEachHour();

tokyo.generateCustomersEachHour();
tokyo.generateCookiesSoldEachHour();

dubai.generateCustomersEachHour();
dubai.generateCookiesSoldEachHour();

paris.generateCustomersEachHour();
paris.generateCookiesSoldEachHour();

lima.generateCustomersEachHour();
lima.generateCookiesSoldEachHour();



//Create the header row
function generateHeaderRow() {
  var trElement = document.createElement('tr');
  for (var i = 0; i < storeHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = storeHours[i];
    trElement.appendChild(thElement);
  }
  parentElement.appendChild(trElement);
}
//create footer row
function generateFooterRow() {
  var tfElement = document.createElement('tr');
  var tfHeader = document.createElement('td');
  tfHeader.textContent = 'Total';
  tfElement.appendChild(tfHeader);
  
  for (var i = 0; i < storeHours.length - 1; i++) {
    var eachHourTotal = 0;

    for (var k = 0; k < allStores.length; k++) {
      eachHourTotal += allStores[k].cookiesSoldEachHour[i];

    }
    var thElement4 = document.createElement('td');
    thElement4.textContent = eachHourTotal;
    tfElement.appendChild(thElement4);
  }
  parentElement.appendChild(tfElement);
}

// Populate the table with cookie sales results
Store.prototype.render = function () {


  var tableRowElement = document.createElement('tr');
  var tableHeader = document.createElement('td');
  tableHeader.textContent = this.name;
  tableRowElement.appendChild(tableHeader);

  for (var i = 0; i < storeHours.length - 1; i++) {

    var totalCookiesData = document.createElement('td');
    totalCookiesData.textContent = this.cookiesSoldEachHour[i];
    tableRowElement.appendChild(totalCookiesData);
  }


    

  var dailyCookieTotalsByStore = document.createElement('td');
  dailyCookieTotalsByStore.textContent = this.totalCookiesForTheDay;
  tableRowElement.appendChild(dailyCookieTotalsByStore);

  
  parentElement.appendChild(tableRowElement);
};

generateHeaderRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
generateFooterRow();
formElement.addEventListener('submit', handleSubmit);
console.log (allStores);
console.log (totalOfTotals);
