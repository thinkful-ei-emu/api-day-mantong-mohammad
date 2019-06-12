/* eslint-disable no-undef */
/* eslint-disable indent */
'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mantong-mohammad';
  function getItems(){
    return fetch(`${BASE_URL}/items`); //making a fetch GET request to the base url 
  }

  function createItem(name) {
    const newItem = JSON.stringify({name:name});
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
  }

  function updateItem(id, updateData ) {    
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    });
  }
  return {
    getItems,
    createItem,
    updateItem,
  };

}());