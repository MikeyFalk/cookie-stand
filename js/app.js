'use strict';
//Global variable Store Hours
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Object Constructor

var allStores = [];

function Store(name, avgerageCookiePerCustomer, minimumCustomersPerHour, maximumCustomersPerHour, totalCookiesForTheDay) {
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
};

//object instances to create stores
var seattle = new Store('seattle', 6.3, 23, 65, 0);
var tokyo = new Store('tokyo', 1.2, 3, 24, 0);
var dubai = new Store('dubai', 3.7, 11, 38, 0);
var paris = new Store('paris', 2.3, 20, 38, 0);
var lima = new Store('lima', 4.6, 2, 16, 0);

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


//Object 2 creating the tokyo store

// var tokyo = {
//   name: 'Tokyo',
//   avgerageCookiePerCustomer: 1.2,
//   minimumCustomersPerHour: 3,
//   maximumCustomersPerHour: 24,
//   totalCookiesForTheDay: 0,

//   // an array that will hold the number of customers each hour
//   customersEachHour: [],

//   // an array that holds the number of cookies sold each hour to do this we will need to multiply the number of customers each hour by the average number of cookies for this store and round

//   cookiesSoldEachHour: [],

//   //a function that generates the customersEachHour array
//   //get a random number between min and max -random number generator
//   // create a loop that will run the random number generator for each hour the store is open

//   generateCustomersEachhour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

//       this.customersEachHour.push(randomNumber);
//     }
//   },
//   // a function that will: 1. loop over the number of customers each hour and multiply by the average cookies sold to return the number of cookies each hour 2. Round up 3. put the results into the cookiesSoldEachHour array.

//   generateCookiesSoldEachHour: function () {
//     this.generateCustomersEachhour();

//     for (var i = 0; i < storeHours.length; i++) {
//       var cookiesSoldthisHour = Math.ceil(this.customersEachHour[i] * this.avgerageCookiePerCustomer);

//       this.totalCookiesForTheDay += cookiesSoldthisHour;

//       this.cookiesSoldEachHour.push(cookiesSoldthisHour);
//     }
//   },

var parentElement = document.getElementById('table');
function generateHeaderRow() {
  //create a tr
  var trElement = document.createElement('tr');
  var headerArray = ['Name', 'Type', 'Color', 'Age'];
  for (var i = 0; i < headerArray.length; i++) {
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
generateHeaderRow();



// function render() {
//   //get tokyo section from DOM
//   var parentSection = document.getElementById('tokyo');
//   // creatte an h2
//   var headingTokyo = document.createElement('h2');
//   //fill it with content 'seattle'
//   headingTokyo.textContent = this.name;
//   //append it to the parent
//   parentSection.appendChild(headingTokyo);
//   //get the ul with the id of seattle-sales from the DOM -- parent element
//   var salesList = document.getElementById('tokyo-sales');
//   //loop over array called cookiesSoldEachHour
//   for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
//     //create and li
//     var liElement = document.createElement('li');
//     //fill it with the content from the cookies sold each hour array
//     liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//     //append it to the paretn
//     salesList.appendChild(liElement);
//   }
// }


tokyo.generateCookiesSoldEachHour();
//render(tokyo);
