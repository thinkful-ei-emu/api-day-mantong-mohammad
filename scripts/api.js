/* eslint-disable no-undef */
/* eslint-disable indent */
'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mantong-mohammad';
  function listApiFetch(...args) {
    let error = false;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
          error = { code: res.status };
        }
  
        // In either case, parse the JSON stream:
        return res.json();
      })
  
      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
  
        // Otherwise give back the data as resolved Promise
        return data;
      });
  }
  function getItems(){
    return listApiFetch(`${BASE_URL}/items`); //making a fetch GET request to the base url 
  }


  function createItem(name) {
    const newItem = JSON.stringify({name:name});
    //console.log(name);
    return listApiFetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
  }

  function updateItem(id, updateData ) {    
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    });
  }

  function deleteItem(id) {    
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
     
    });
  }
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };

}());