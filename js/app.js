'use strict';
//Global variables
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];
var parentElement = document.getElementById('table');
var allStores = [];



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
  for (var i = 0; i < storeHours.length - 1; i++) {
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

    this.customersEachHour.push(randomNumber);
  }
};

Store.prototype.generateCookiesSoldEachHour = function () {
  for (var i = 0; i < storeHours.length - 1; i++) {
    var cookiesSoldthisHour = Math.ceil(this.customersEachHour[i] * this.avgerageCookiePerCustomer);

    this.totalCookiesForTheDay += cookiesSoldthisHour;

    this.cookiesSoldEachHour.push(cookiesSoldthisHour);
  }
};


//object instances to create stores
var seattle = new Store('seattle', 6.3, 23, 65);
var tokyo = new Store('tokyo', 1.2, 3, 24);
var dubai = new Store('dubai', 3.7, 11, 38);
var paris = new Store('paris', 2.3, 20, 38);
var lima = new Store('lima', 4.6, 2, 16);

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
  for (var i = -1; i < storeHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = storeHours[i];
    trElement.appendChild(thElement);
  }
  parentElement.appendChild(trElement);
}
//create footer row
function generateFooterRow() {
  var tfElement = document.createElement('tr');
  var tfHeader = document.createElement('th');
  tfHeader.textContent = 'Total';
  tfElement.appendChild(tfHeader);
  for (var i = -1; i < storeHours.length; i++) {
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
  var tableHeader = document.createElement('th');
  tableHeader.textContent = this.name;
  tableRowElement.appendChild(tableHeader);

  var dailyCookieTotalsByStore = document.createElement('tr');
  dailyCookieTotalsByStore.textContent = this.totalCookiesForTheDay;
  tableRowElement.appendChild(dailyCookieTotalsByStore);

  for (var i = 0; i < storeHours.length; i++) {

    var totalCookiesData = document.createElement('td');
    totalCookiesData.textContent = this.cookiesSoldEachHour[i];
    tableRowElement.appendChild(totalCookiesData);
  }
  parentElement.appendChild(tableRowElement);
};

// Store.prototype.renderTotals = function () {
//   var tableRowElement3 = document.createElement('tr');
//   var tableHeader3 = document.createElement('th');
//   tableHeader3.textContent = 'total';
//   tableRowElement3.appendChild(tableHeader3);

//   for (var i = 0; i < allStores.length; i++) {

//     var dailyCookieTotalsByStore = document.createElement('td');
//     dailyCookieTotalsByStore.textContent = this.totalCookiesForTheDay[i];
//     tableHeader3.appendChild(dailyCookieTotalsByStore);
//   }
//   parentElement.appendChild(tableRowElement3);
// };

// var td3Element = document.createElement('td');
// td3Element.textContent = this.totalCookiesForTheDay;
// td2Element.appendChild(td2Element);

// //append the tr to the parent table
// //trElement.appendChild(td2Element);



generateHeaderRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
generateFooterRow();

