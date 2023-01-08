import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const[items, setItems]=useState([])

useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then(res=>res.json())
  .then(items=>setItems(items))
},[])

function toDelete(id){

  const newItem = items.filter(item=>item.id !== id)
  setItems(newItem)
}

function toSearch(updatedItem){
  console.log("items is now:");
  console.log(items);
  console.log("Update item is:")
  console.log(updatedItem)
  const newItems = items.filter(item=>item.description.toLowerCase().includes(updatedItem.toLowerCase()))

setItems(newItems)
}
  return (
    <div className="app">
      <Header items={items} toSearch={toSearch} />
      <ListingsContainer items={items} toDelete={toDelete}  />
    </div>
  );
}

export default App;
