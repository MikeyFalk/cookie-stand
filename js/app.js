'use strict';
//Global variable Store Hours
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','total'];

//Object Constructor

var allStores = [];

function Store(name, avgerageCookiePerCustomer, minimumCustomersPerHour, maximumCustomersPerHour, totalCookiesForTheDay = 0) {
  this.name = name;
  this.avgerageCookiePerCustomer = avgerageCookiePerCustomer;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.totalCookiesForTheDay = totalCookiesForTheDay;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  allStores.push(this);
}
Store.prototype.generateCustomersEachHour = function () {
  for (var i = 0; i < storeHours.length-1; i++) {
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

    this.customersEachHour.push(randomNumber);
  }
};

Store.prototype.generateCookiesSoldEachHour = function () {
  for (var i = 0; i < storeHours.length-1; i++) {
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

console.log(allStores);

var parentElement = document.getElementById('table');
function generateHeaderRow() {
  //create a tr
  var trElement = document.createElement('tr');
  var headerArray = storeHours;
  for (var i = -1; i < headerArray.length; i++) {
    //create a th
    var thElement = document.createElement('th');
    // fill it with content - 'Name'
    thElement.textContent = headerArray[i];
    //append to the tr element
    trElement.appendChild(thElement);
  }
  // append the tr to the tbody
  parentElement.appendChild(trElement);
}

Store.prototype.renderData = function () {
  //create a tr
  var trElement = document.createElement('tr');
  parentElement.appendChild(trElement);
  var tdElement = document.createElement('td');
  tdElement.textContent = this.name;
  trElement.appendChild(tdElement);

  //var fluffyArray = this.cookiesSoldEachHour;

  for (var i = 0; i < storeHours.length; i++) {
    //create a td
    var td2Element = document.createElement('td');
    // fill it with content
    td2Element.textContent = this.cookiesSoldEachHour[i];
    //append it to the tr
    trElement.appendChild(td2Element);

    var td3Element = document.createElement('td');
    td3Element.textContent = this.totalCookiesForTheDay;
    trElement.appendChild(td2Element);

    //append the tr to the parent table
    //trElement.appendChild(td2Element);
  }
};

generateHeaderRow();
seattle.renderData();
tokyo.renderData();
dubai.renderData();
paris.renderData();
lima.renderData();
