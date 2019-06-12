/* eslint-disable no-undef */
'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });  
});

//store.items.push(Item.create('apples'));
//```````````````````````````````````````````````````````````````````````````````````
//below we are updating our index.js call to api.getItems()
// to first resolve the response datastream with .json() and then logging out
// the data from the second resolved promise
// api.getItems()
//   .then(response => response.json())
//   .then(data => console.log(data)); // sucess message

// console.log(api.BASE_URL); // returns undefined
//````````````````````````````````````````````````````````````````````````````````````
