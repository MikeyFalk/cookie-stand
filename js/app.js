'use strict';
//Global variable Store Hours
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Object 1 creating the seattle store

var seattle = {
  name: 'Seattle',
  avgerageCookiePerCustomer: 6.3,
  minimumCustomersPerHour: 23,
  maximumCustomersPerHour: 65,
  totalCookiesForTheDay: 0,

  // an array that will hold the number of customers each hour
  customersEachHour: [],

  // an array that holds the number of cookies sold each hour to do this we will need to multiply the number of customers each hour by the average number of cookies for this store and round

  cookiesSoldEachHour: [],

  //a function that generates the customersEachHour array
  //get a random number between min and max -random number generator
  // create a loop that will run the random number generator for each hour the store is open

  generateCustomersEachhour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

      this.customersEachHour.push(randomNumber);
    }
  },
  // a function that will: 1. loop over the number of customers each hour and multiply by the average cookies sold to return the number of cookies each hour 2. Round up 3. put the results into the cookiesSoldEachHour array.

  generateCookiesSoldEachHour: function () {
    this.generateCustomersEachhour();

    for (var i = 0; i < storeHours.length; i++) {
      var cookiesSoldthisHour = Math.ceil(this.customersEachHour[i] * this.avgerageCookiePerCustomer);

      this.totalCookiesForTheDay += cookiesSoldthisHour;

      this.cookiesSoldEachHour.push(cookiesSoldthisHour);
    }
  },

  render: function () {
    //get seattle section from DOM
    var parentSection = document.getElementById('seattle');
    // creatte an h2
    var headingSeattle = document.createElement('h2');
    //fill it with content 'seattle'
    headingSeattle.textContent = this.name;
    //append it to the parent
    parentSection.appendChild(headingSeattle);
    //get the ul with the id of seattle-sales from the DOM -- parent element
    var salesList = document.getElementById('seattle-sales');
    //loop over array called cookiesSoldEachHour
    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
      //create and li
      var liElement = document.createElement('li');
      //fill it with the content from the cookies sold each hour array
      liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      //append it to the paretn
      salesList.appendChild(liElement);
    }
  }
};

seattle.generateCookiesSoldEachHour();
seattle.render();

//Object 2 creating the tokyo store

var tokyo = {
  name: 'Tokyo',
  avgerageCookiePerCustomer: 1.2,
  minimumCustomersPerHour: 3,
  maximumCustomersPerHour: 24,
  totalCookiesForTheDay: 0,

  // an array that will hold the number of customers each hour
  customersEachHour: [],

  // an array that holds the number of cookies sold each hour to do this we will need to multiply the number of customers each hour by the average number of cookies for this store and round

  cookiesSoldEachHour: [],

  //a function that generates the customersEachHour array
  //get a random number between min and max -random number generator
  // create a loop that will run the random number generator for each hour the store is open

  generateCustomersEachhour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

      this.customersEachHour.push(randomNumber);
    }
  },
  // a function that will: 1. loop over the number of customers each hour and multiply by the average cookies sold to return the number of cookies each hour 2. Round up 3. put the results into the cookiesSoldEachHour array.

  generateCookiesSoldEachHour: function () {
    this.generateCustomersEachhour();

    for (var i = 0; i < storeHours.length; i++) {
      var cookiesSoldthisHour = Math.ceil(this.customersEachHour[i] * this.avgerageCookiePerCustomer);

      this.totalCookiesForTheDay += cookiesSoldthisHour;

      this.cookiesSoldEachHour.push(cookiesSoldthisHour);
    }
  },

  render: function () {
    //get seattle section from DOM
    var parentSection = document.getElementById('tokyo');
    // creatte an h2
    var headingTokyo = document.createElement('h2');
    //fill it with content 'seattle'
    headingTokyo.textContent = this.name;
    //append it to the parent
    parentSection.appendChild(headingTokyo);
    //get the ul with the id of seattle-sales from the DOM -- parent element
    var salesList = document.getElementById('tokyo-sales');
    //loop over array called cookiesSoldEachHour
    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
      //create and li
      var liElement = document.createElement('li');
      //fill it with the content from the cookies sold each hour array
      liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      //append it to the paretn
      salesList.appendChild(liElement);
    }
  }
};

tokyo.generateCookiesSoldEachHour();
tokyo.render();

//Object 3 creating the dubai store

var dubai = {
  name: 'Dubai',
  avgerageCookiePerCustomer: 3.7,
  minimumCustomersPerHour: 11,
  maximumCustomersPerHour: 38,
  totalCookiesForTheDay: 0,

  // an array that will hold the number of customers each hour
  customersEachHour: [],

  // an array that holds the number of cookies sold each hour to do this we will need to multiply the number of customers each hour by the average number of cookies for this store and round

  cookiesSoldEachHour: [],

  //a function that generates the customersEachHour array
  //get a random number between min and max -random number generator
  // create a loop that will run the random number generator for each hour the store is open

  generateCustomersEachhour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

      this.customersEachHour.push(randomNumber);
    }
  },
  // a function that will: 1. loop over the number of customers each hour and multiply by the average cookies sold to return the number of cookies each hour 2. Round up 3. put the results into the cookiesSoldEachHour array.

  generateCookiesSoldEachHour: function () {
    this.generateCustomersEachhour();

    for (var i = 0; i < storeHours.length; i++) {
      var cookiesSoldthisHour = Math.ceil(this.customersEachHour[i] * this.avgerageCookiePerCustomer);

      this.totalCookiesForTheDay += cookiesSoldthisHour;

      this.cookiesSoldEachHour.push(cookiesSoldthisHour);
    }
  },

  render: function () {
    //get seattle section from DOM
    var parentSection = document.getElementById('dubai');
    // creatte an h2
    var headingDubai = document.createElement('h2');
    //fill it with content 'seattle'
    headingDubai.textContent = this.name;
    //append it to the parent
    parentSection.appendChild(headingDubai);
    //get the ul with the id of seattle-sales from the DOM -- parent element
    var salesList = document.getElementById('dubai-sales');
    //loop over array called cookiesSoldEachHour
    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
      //create and li
      var liElement = document.createElement('li');
      //fill it with the content from the cookies sold each hour array
      liElement.textContent = `${storeHours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      //append it to the paretn
      salesList.appendChild(liElement);
    }
  }
};

dubai.generateCookiesSoldEachHour();
dubai.render();
