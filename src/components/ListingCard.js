import React,{useState} from "react";

function ListingCard({item, toDelete}) {

  const{id, description, image, location } = item;
  const [star,setStar]= useState()

  function handleClick(){
   setStar(false)
 }
  
 function handleClickCancle(){
 setStar(true)
}

function handleDelete(){

  fetch(`http://localhost:6001/listings/${id}`,{
    method:"DELETE"
  })
  .then(res=>res.json())
  .then(()=>toDelete(id))

}
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {star ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClickCancle}  className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
