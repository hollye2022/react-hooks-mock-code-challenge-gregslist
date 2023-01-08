import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, toDelete}) {


  return (
    <main>
      <ul className="cards">
        {items.map((item)=>{
         return <ListingCard item={item} key={item.id} toDelete={toDelete}/>
        })}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
