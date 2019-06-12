'use strict';
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    console.log(item);
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const error=null;
  const setError=function(err){
    this.error=err;
  };
  
  
  const findAndUpdate = function(id,newData){
    
    return Object.assign(this.findById(id),newData);

  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

 

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    addItem,
    findById,
    findAndUpdate,
    findAndDelete,    
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    setError,
    error,
  };
  
}());
