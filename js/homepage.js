'use strict';

// collect response from user then display a personal message and the address for the location in their hometown.

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
